import { testSectionTitle } from '../Controls/TestUtils'

export function testAboutMain(div: HTMLDivElement) {
  expect(div).toHaveClass('container')
  testSectionTitle(div.querySelector('div.section-title'), 'about-me.title')
  const divRow = div.querySelector('div.row')
  expect(divRow).toHaveClass('d-flex')
  expect(divRow).toHaveClass('justify-content-center')
  const divAboutPhoto = divRow.querySelector('div.about-photo')
  expect(divAboutPhoto).toHaveClass('col-md')
  expect(divAboutPhoto).toHaveClass('d-flex')
  expect(divAboutPhoto).toHaveClass('justify-content-center')
  const imgElements = divAboutPhoto.querySelectorAll('img')
  expect(imgElements).toHaveLength(2)
  const imgPortrait: HTMLImageElement = imgElements.item(0)
  expect(imgPortrait).toHaveClass('about-photo--portrait')
  expect(imgPortrait).toHaveClass('img-thumbnail')
  expect(imgPortrait).toHaveAttribute('src', '[object Object]')
  expect(imgPortrait).toHaveAttribute('alt', 'About me')
  const imgBadge: HTMLImageElement = imgElements.item(1)
  expect(imgBadge).toHaveClass('about-photo--badge')
  expect(imgBadge).toHaveAttribute('src', '[object Object]')
  expect(imgBadge).toHaveAttribute('alt', 'Oracle 1Z0-808')
  const divListItems = divRow.querySelector('div.col-md-8.offset-md-2')
  expect(divListItems).not.toBeNull()
  const ul = divListItems.querySelector('ul')
  expect(ul).toHaveClass('mt-3')
  const liElements = divListItems.querySelectorAll('ul>li')
  expect(liElements).toHaveLength(14)

  for (let i = 1; i <= 14; i++) {
    const exp = expect(liElements.item(i - 1))
    if (i > 17) {
      exp.toBeNull()
    } else {
      exp.toHaveTextContent(`about-me.list.${i - 1}.title`)
    }
  }
}
