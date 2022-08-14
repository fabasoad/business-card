/// <reference types="jest" />
import * as React from 'react'
import { render } from '@testing-library/react'
import EducationMain from '../../../components/Education/EducationMain'
import { useTranslation } from '../../__mocks__/react-i18next'

let tMock

beforeAll(() => {
  tMock = useTranslation().t
})

test.skip('should render EducationItem correctly', () => {
  const { container } = render(<EducationMain />)
  expect(container.firstChild).toMatchSnapshot()
  expect(tMock).toHaveBeenCalledTimes(3)
  expect(tMock).toHaveBeenCalledWith('business-card-education-title')
  expect(tMock).toHaveBeenCalledWith('business-card-education-university-master')
  expect(tMock).toHaveBeenCalledWith('business-card-education-university-bachelor')
})
