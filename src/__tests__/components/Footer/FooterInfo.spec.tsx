/// <reference types="jest" />
import * as React from 'react'
import { render } from '@testing-library/react'
import FooterInfo from '../../../components/Footer/FooterInfo'
import { useTranslation } from '../../__mocks__/react-i18next'
import { version } from '../../../../package.json'

let tMock

beforeAll(() => {
  tMock = useTranslation().t
})

test('should render FooterInfo correctly', () => {
  const { container } = render(<FooterInfo />)
  expect(container.firstChild).toMatchSnapshot()
  expect(tMock).toHaveBeenCalledTimes(1)
  expect(tMock).toHaveBeenCalledWith(
    'business-card-version',
    { version }
  )
})
