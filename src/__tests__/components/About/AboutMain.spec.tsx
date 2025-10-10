import '@testing-library/jest-dom'
import * as React from 'react'
import AboutMain, {
  type AboutMeItem,
  renderList
} from '../../../components/About/AboutMain'
import { render } from '@testing-library/react'
import { randomString } from '../../../scripts/utils/StringUtils'

jest.mock('../../../components/Controls/Section')

describe('AboutMain', () => {
  test('should render AboutMain correctly', () => {
    const { container } = render(<AboutMain />)
    const div = container.querySelector<HTMLDivElement>(
      'div[data-testid=Section-about-me] > div.row.d-flex.justify-content-center'
    )
    expect(div).toBeInTheDocument()
    expect(
      div.querySelector(
        'div.about-photo.col-md.d-flex.justify-content-center > img.about-photo--portrait.rounded-circle.img-thumbnail[src="[object Object]"][alt="About me"][loading="lazy"]'
      )
    ).toBeInTheDocument()
    expect(
      div.querySelector('div.col-md-8.offset-md-2')
    ).toHaveTextContent('about-me.list')
  })

  test('renderList should return string when children is string', () => {
    const children = randomString(10)
    const { container } = render(renderList(children))
    expect(container).toHaveTextContent(children)
  })

  test('renderList should return ul when children is list', () => {
    const children: AboutMeItem[] = [{
      title: randomString(10),
      list: [{
        title: randomString(10)
      }, {
        title: randomString(10)
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
