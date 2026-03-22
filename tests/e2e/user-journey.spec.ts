import { test, expect } from '@playwright/test';

test.describe('User Journey — Home Page', () => {
    test('loads homepage with hero section', async ({ page }) => {
        await page.goto('/');

        // Hero heading visible
        await expect(page.getByText('أساعدكِ على كسر الهوية القديمة')).toBeVisible();

        // Navbar logo visible
        await expect(page.getByText('Rania Brahmi').first()).toBeVisible();
    });

    test('navigates to booking page from CTA', async ({ page }) => {
        await page.goto('/');

// Click booking CTA
  await page.locator('#hero-cta-primary').click();

// Should reach the booking page
  await expect(page).toHaveURL(/booking/);
  await expect(page.getByRole('heading', { name: 'الخطوة الأولى نحو التحول' })).toBeVisible();
    });

    test('value ladder section shows three tiers', async ({ page }) => {
        await page.goto('/');

        // Scroll to programs section
        await page.locator('#programs').scrollIntoViewIfNeeded();

// Three tier cards
  await expect(page.getByText('استكشاف الجذور')).toBeVisible();
  await expect(page.getByText('برنامج التحوّل العميق')).toBeVisible();
  await expect(page.getByText('ورش العمل والدورات')).toBeVisible();
    });

    test('FAQ section toggles answers', async ({ page }) => {
        await page.goto('/');

        // Scroll to FAQ
        await page.locator('#faq').scrollIntoViewIfNeeded();

        // Click first question
        const firstQuestion = page.getByText('ما الفرق بين Shadow Work والعلاج النفسي؟');
        await firstQuestion.click();

        // Answer should be visible
        await expect(page.getByText('أعمال الظل هي ممارسة تطويرية')).toBeVisible();
    });
});

test.describe('User Journey — Booking Flow', () => {
    test('booking page allows session type selection', async ({ page }) => {
        await page.goto('/booking');

// Default video session selected
  await expect(page.getByText('150', { exact: true })).toBeVisible();

// Click audio session
  await page.getByText('صوت').click();
  await expect(page.getByText('100', { exact: true })).toBeVisible();

  // Click whatsapp session
  await page.locator('#session-واتساب').click();
  await expect(page.getByText('60', { exact: true })).toBeVisible();
    });

    test('displays security reassurance badges', async ({ page }) => {
        await page.goto('/booking');

await expect(page.getByText('سرية تامة')).toBeVisible();
  await expect(page.getByText('دفع آمن', { exact: true })).toBeVisible();
    });
});

test.describe('Mobile-Specific Tests', () => {
    test.use({ viewport: { width: 375, height: 812 } });

    test('bottom navigation is visible on mobile', async ({ page }) => {
        await page.goto('/');

        // Bottom nav items should be visible
        await expect(page.getByText('الرئيسية').last()).toBeVisible();
        await expect(page.getByText('البرامج').last()).toBeVisible();
        await expect(page.getByText('الاستشارات').last()).toBeVisible();
    });

test('sticky CTA appears after scrolling', async ({ page }) => {
  await page.setViewportSize({ width: 375, height: 812 });
  await page.goto('/');

  // Wait for hydration
  await page.waitForLoadState('networkidle');

  // Scroll down past hero
  await page.evaluate(() => window.scrollTo(0, 800));
  await page.waitForTimeout(1000);

  // Sticky CTA should appear (check if element is attached first)
  const stickyCta = page.locator('#sticky-cta');
  await expect(stickyCta).toBeAttached();
  await expect(stickyCta).toBeVisible();
});
});
