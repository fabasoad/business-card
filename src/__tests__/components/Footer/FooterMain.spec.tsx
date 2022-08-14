/// <reference types="jest" />
import * as React from 'react'
import { render } from '@testing-library/react'
import FooterMain from '../../../components/Footer/FooterMain'
import { useTranslation } from '../../__mocks__/react-i18next'

let tMock

beforeAll(() => {
  tMock = useTranslation().t
})

test('should render FooterMain correctly', () => {
  const { container } = render(<FooterMain />)
  expect(container.firstChild).toMatchSnapshot()
  expect(tMock).toHaveBeenCalledTimes(3)
  expect(tMock).toHaveBeenCalledWith('business-card-contact-title')
})
