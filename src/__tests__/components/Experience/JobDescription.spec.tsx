/// <reference types="jest" />
import * as React from 'react'
import { render, screen } from '@testing-library/react'
import JobDescription from '../../../components/Experience/JobDescription'
import { useTranslation } from '../../__mocks__/react-i18next'

let tMock

beforeEach(() => {
  tMock = useTranslation().t
})

test.skip('should render JobDescription without title correctly', () => {
  const prefix = 'some-prefix'
  const count = 2
  const { container } = render(<JobDescription
    count={count}
    i18nKeyPrefix={prefix}
    withTitle={false}
  />)
  expect(container.firstChild).toMatchSnapshot()
  expect(tMock).not.toBeCalledWith('business-card-experience-description-title')
  for (let i = 0; i < count; i++) {
    expect(screen.queryByText(`${prefix}-${i + 1}`)).not.toBeNull()
  }
})

test.skip('should render JobDescription with title correctly', () => {
  const prefix = 'some-prefix'
  const count = 3
  const { container } = render(<JobDescription
    count={count}
    i18nKeyPrefix={prefix}
  />)
  expect(container.firstChild).toMatchSnapshot()
  expect(tMock).toBeCalledWith('business-card-experience-description-title')
  for (let i = 1; i < count; i++) {
    expect(screen.queryByText(`${prefix}-${i}`)).not.toBeNull()
  }
})
