import '@testing-library/jest-dom'
import * as React from 'react'
import AboutMain from '../../../components/About/AboutMain'
import { render } from '@testing-library/react'

jest.mock('../../../components/Controls/SectionTitle')

test('should render AboutMain correctly', () => {
  const { container } = render(<AboutMain />)
  const div = container.querySelector('div#about-me.container')
  expect(div).not.toBeNull()
  expect(div.querySelector('div[data-testid="SectionTitle"]')).not.toBeNull()
  const divRow = div.querySelector(
    'div.row.d-flex.justify-content-center'
  )
  expect(divRow).not.toBeNull()
  const divAboutPhoto = divRow.querySelector(
    'div.about-photo.col-md.d-flex.justify-content-center'
  )
  expect(divAboutPhoto).not.toBeNull()
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
  expect(divListItems).toHaveTextContent('about-me.list')
})
