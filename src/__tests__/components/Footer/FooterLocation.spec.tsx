/// <reference types="jest" />
import * as React from 'react'
import { render } from '@testing-library/react'
import FooterLocation from '../../../components/Footer/FooterLocation'
import { useTranslation } from '../../__mocks__/react-i18next'

let tMock

beforeAll(() => {
  tMock = useTranslation().t
})

test('should render FooterLocation correctly', () => {
  const { container } = render(<FooterLocation />)
  expect(container.firstChild).toMatchSnapshot()
  expect(tMock).toHaveBeenCalledTimes(1)
  expect(tMock).toHaveBeenCalledWith('business-card-contact-city')
})
