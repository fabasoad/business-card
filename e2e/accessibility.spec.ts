import { test, expect } from '@playwright/test'
import AxeBuilder from '@axe-core/playwright'
import type { Result } from 'axe-core'

// Accessibility regression gate for the built site (see #418).
//
// The check fails on `critical` and `serious` violations — the ones that
// make content unusable with assistive technology (missing alt text,
// links without discernible text, ...). `moderate` and `minor`
// violations are reported as annotations but do not fail the build yet:
// the site carries pre-existing structural debt there (heading order,
// missing landmarks), which is tracked by the broader accessibility
// work in #46. Any *new* critical/serious violation fails this test.
const BLOCKING_IMPACTS: Array<Result['impact']> = ['critical', 'serious']

function formatViolations(violations: Result[]): string {
  return violations
    .map((v) => `[${v.impact}] ${v.id}: ${v.help} (${v.nodes.length} node(s))`)
    .join('\n')
}

for (const path of ['/', '/404.html']) {
  test(`built site ${path} has no critical or serious axe violations`, async ({
    page
  }, testInfo) => {
    await page.goto(path, { waitUntil: 'domcontentloaded' })
    // Let the React app render and settle before scanning.
    await page.waitForSelector('#app > *')
    await page.waitForTimeout(2000)

    const { violations } = await new AxeBuilder({ page }).analyze()

    const blocking = violations.filter((v) =>
      BLOCKING_IMPACTS.includes(v.impact)
    )
    const nonBlocking = violations.filter(
      (v) => !BLOCKING_IMPACTS.includes(v.impact)
    )
    if (nonBlocking.length > 0) {
      testInfo.annotations.push({
        type: 'known-a11y-debt',
        description: `Non-blocking violations on ${path}:\n${formatViolations(nonBlocking)}`
      })
    }

    expect(
      blocking,
      `Blocking axe violations on ${path}:\n${formatViolations(blocking)}`
    ).toEqual([])
  })
}
