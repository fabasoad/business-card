/// <reference types="jest" />
import * as React from 'react'
import { render } from '@testing-library/react'
import EducationItem from '../../../components/Education/EducationItem'
import { useTranslation } from '../../__mocks__/react-i18next'

let tMock

beforeAll(() => {
  tMock = useTranslation().t
})

test.skip('should render EducationItem correctly', () => {
  const { container } = render(<EducationItem
    from={2019}
    to={2020}
    title="test-title"
  />)
  expect(container.firstChild).toMatchSnapshot()
  expect(tMock).toHaveBeenCalledTimes(2)
  expect(tMock).toHaveBeenCalledWith('business-card-education-university-title')
  expect(tMock).toHaveBeenCalledWith('business-card-education-university-speciality')
})
