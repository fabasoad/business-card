import '@testing-library/jest-dom'
import * as React from 'react'
import AboutMain, {
  AboutMeItem,
  renderList
} from '../../../components/About/AboutMain'
import { render } from '@testing-library/react'
import StringUtils from '../../../scripts/utils/StringUtils'
import { testSectionTitle } from '../Controls/TestUtils'

jest.mock('../../../components/Controls/SectionTitle')

describe('AboutMain', () => {
  test('should render AboutMain correctly', () => {
    const { container } = render(<AboutMain />)
    const div = container.querySelector<HTMLDivElement>('div#about-me.container')
    testSectionTitle(div, 'about-me.title')
    const divRow = div.querySelector(
      'div.row.d-flex.justify-content-center'
    )
    expect(divRow).toBeInTheDocument()
    expect(
      divRow.querySelector(
        'div.about-photo.col-md.d-flex.justify-content-center > img.about-photo--portrait.img-thumbnail[src="[object Object]"][alt="About me"][loading="lazy"]'
      )
    ).toBeInTheDocument()
    expect(
      divRow.querySelector('div.col-md-8.offset-md-2')
    ).toHaveTextContent('about-me.list')
  })

  test('renderList should return string when children is string', () => {
    const children = StringUtils.random(10)
    const { container } = render(renderList(children))
    expect(container).toHaveTextContent(children)
  })

  test('renderList should return ul when children is list', () => {
    const children: AboutMeItem[] = [{
      title: StringUtils.random(10),
      list: [{
        title: StringUtils.random(10)
      }, {
        title: StringUtils.random(10)
      }]
    }]
    const { container } = render(renderList(children))
    const ul1 = container.querySelector('ul')
    expect(ul1.children).toHaveLength(1)
    const li1 = ul1.querySelector('li')
    expect(li1).toHaveTextContent(children[0].title)
    const ul2 = li1.querySelector('ul')
    expect(ul2.children).toHaveLength(2)
    const liElements = ul2.querySelectorAll('li')
    expect(liElements.item(0)).toHaveTextContent(children[0].list[0].title)
    expect(liElements.item(1)).toHaveTextContent(children[0].list[1].title)
  })
})
