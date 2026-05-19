/**
 * Instagram 계정 분석 스크립트
 * 대상: @ai_underdog (자사) + 레퍼런스 계정들
 */

import { chromium } from 'playwright';
import { writeFileSync, mkdirSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const SCREENSHOT_DIR = join(__dirname, '..', 'knowledge', 'references', 'screenshots');
const TODAY = new Date().toISOString().slice(0, 10).replace(/-/g, '');

// 분석 대상 계정
const ACCOUNTS = [
  // 자사 계정
  { handle: 'ai_underdog', category: '자사', priority: 1 },
  // AI 인사이트 레퍼런스 (미분석)
  { handle: 'newsdaddy.ai', category: 'AI인사이트', priority: 2 },
  { handle: 'prompts.ig', category: 'AI인사이트', priority: 2 },
  { handle: 'claye.ai', category: 'AI인사이트', priority: 2 },
  { handle: 'ai_dori_', category: 'AI육아', priority: 2 },
  { handle: 'knock_making', category: 'AI육아', priority: 2 },
];

async function analyzeAccount(page, handle) {
  const url = `https://www.instagram.com/${handle}/`;
  console.log(`\n📸 분석 중: @${handle} → ${url}`);

  const result = {
    handle,
    url,
    timestamp: new Date().toISOString(),
    screenshot: null,
    data: {},
    loginRequired: false,
    error: null,
  };

  try {
    await page.goto(url, { waitUntil: 'networkidle', timeout: 30000 });
    await page.waitForTimeout(3000);

    // 로그인 요구 팝업 감지
    const loginModal = await page.$('div[role="dialog"]');
    const loginWall = await page.$('text=Log in to Instagram');
    const loginWallKo = await page.$('text=인스타그램에 로그인');

    if (loginModal || loginWall || loginWallKo) {
      result.loginRequired = true;
      console.log(`  ⚠️  로그인 팝업 감지 — 팝업 닫기 시도`);
      // ESC 눌러서 팝업 닫기
      await page.keyboard.press('Escape');
      await page.waitForTimeout(1500);
    }

    // 스크린샷 저장
    const filename = `${handle}_${TODAY}.png`;
    const screenshotPath = join(SCREENSHOT_DIR, filename);
    await page.screenshot({ path: screenshotPath, fullPage: false });
    result.screenshot = filename;
    console.log(`  ✅ 스크린샷: ${filename}`);

    // 텍스트 데이터 추출 시도
    const bodyText = await page.evaluate(() => document.body.innerText);

    // 팔로워/팔로잉/게시물 수 추출
    const followerMatch = bodyText.match(/(\d[\d,.]+[만천kKmM]?)\s*(팔로워|followers?)/i);
    const followingMatch = bodyText.match(/(\d[\d,.]+)\s*(팔로잉|following)/i);
    const postMatch = bodyText.match(/(\d[\d,.]+)\s*(게시물|posts?)/i);

    if (followerMatch) result.data.followers = followerMatch[1];
    if (followingMatch) result.data.following = followingMatch[1];
    if (postMatch) result.data.posts = postMatch[1];

    // 소개글 추출 (header 섹션 내 텍스트)
    try {
      const header = await page.$('header');
      if (header) {
        result.data.headerText = await header.innerText();
      }
    } catch (e) {
      // 무시
    }

    console.log(`  📊 팔로워: ${result.data.followers || '미확인'} | 게시물: ${result.data.posts || '미확인'}`);

  } catch (err) {
    result.error = err.message;
    console.log(`  ❌ 오류: ${err.message}`);

    // 오류 시에도 스크린샷 시도
    try {
      const filename = `${handle}_${TODAY}_error.png`;
      await page.screenshot({ path: join(SCREENSHOT_DIR, filename) });
      result.screenshot = filename;
    } catch (e) {
      // 무시
    }
  }

  return result;
}

async function main() {
  mkdirSync(SCREENSHOT_DIR, { recursive: true });

  const browser = await chromium.launch({
    headless: false, // Instagram 봇 탐지 우회
    args: [
      '--no-sandbox',
      '--disable-setuid-sandbox',
      '--disable-blink-features=AutomationControlled',
    ],
  });

  const context = await browser.newContext({
    userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36',
    viewport: { width: 1280, height: 900 },
    locale: 'ko-KR',
  });

  const page = await context.newPage();

  // 자동화 탐지 스크립트 제거
  await page.addInitScript(() => {
    Object.defineProperty(navigator, 'webdriver', { get: () => undefined });
  });

  const results = [];

  for (const account of ACCOUNTS) {
    const result = await analyzeAccount(page, account.handle);
    results.push({ ...account, ...result });
    await page.waitForTimeout(2000); // 계정 간 딜레이
  }

  await browser.close();

  // 결과 JSON 저장
  const jsonPath = join(SCREENSHOT_DIR, `analysis_${TODAY}.json`);
  writeFileSync(jsonPath, JSON.stringify(results, null, 2), 'utf-8');
  console.log(`\n📄 분석 결과 저장: ${jsonPath}`);

  // 요약 출력
  console.log('\n===== 분석 요약 =====');
  for (const r of results) {
    const status = r.error ? '❌' : r.loginRequired ? '⚠️' : '✅';
    console.log(`${status} @${r.handle}: 팔로워 ${r.data?.followers || '미확인'} | 게시물 ${r.data?.posts || '미확인'} | 스크린샷: ${r.screenshot || '없음'}`);
  }

  return results;
}

main().catch(console.error);
