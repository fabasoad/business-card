export function testSectionTitle(div: HTMLDivElement, title: string) {
  expect(
    div.querySelector('div[data-testid="SectionTitle"]')
  ).toHaveTextContent(title)
}
