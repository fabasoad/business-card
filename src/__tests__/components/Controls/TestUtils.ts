export function testSectionTitle(div: HTMLDivElement, title: string) {
  expect(div).toHaveClass('section-title')
  expect(div).toHaveClass('text-center')
  expect(div).toHaveClass('center')
  expect(div.querySelector('h2')).toHaveTextContent(title)
  expect(div.querySelector('hr')).not.toBeNull()
}
