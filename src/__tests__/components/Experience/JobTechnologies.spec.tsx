/// <reference types="jest" />
import * as React from 'react'
import { render } from '@testing-library/react'
import JobTechnologies from '../../../components/Experience/JobTechnologies'
import { useTranslation } from '../../__mocks__/react-i18next'

let tMock

beforeEach(() => {
  tMock = useTranslation().t
})

test('should render JobTechnologies correctly', () => {
  const { container } = render(<JobTechnologies keys={['maven', 'java']} />)
  expect(container.firstChild).toMatchSnapshot()
  expect(tMock).toBeCalledWith('business-card-experience-technologies-title')
})
