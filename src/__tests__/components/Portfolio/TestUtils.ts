export function testPortfolioItem(
  div: HTMLDivElement,
  url: string,
  name: string,
  title: string,
  subtitle: string,
  img: string
) {
  expect(div).toHaveClass('col-sm-6')
  expect(div).toHaveClass('col-md-3')
  expect(div).toHaveClass('col-lg-3')
  const divPortfolioItem = div.querySelector('div.portfolio-item')
  expect(divPortfolioItem).not.toBeNull()
  const divCenter = divPortfolioItem.querySelector('div.hover-bg.text-center')
  expect(divCenter).not.toBeNull()
  const a = divCenter.querySelector('a')
  expect(a).toHaveAttribute('href', url)
  expect(a).toHaveAttribute('title', name)
  expect(a).toHaveAttribute('rel', 'noopener noreferrer')
  expect(a).toHaveAttribute('target', '_blank')
  const divHoverText = a.querySelector('div.hover-text')
  expect(divHoverText).not.toBeNull()
  expect(divHoverText.querySelector('h4')).toHaveTextContent(title)
  expect(divHoverText.querySelector('small')).toHaveTextContent(subtitle)
  expect(divHoverText.querySelector('i.fa.fa-search')).not.toBeNull()
  const imgElement = a.querySelector('img')
  expect(imgElement).toHaveClass('img-thumbnail')
  expect(imgElement).toHaveAttribute('src', img)
  expect(imgElement).toHaveAttribute('alt', name)
}
