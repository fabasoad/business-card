/// <reference types="jest" />
import * as React from 'react'
import { render } from '@testing-library/react'
import JobResponsibilities from '../../../components/Experience/JobResponsibilities'
import { useTranslation } from '../../__mocks__/react-i18next'

let tMock;
let i18nMock;

beforeEach(() => {
  tMock = useTranslation().t
  i18nMock = useTranslation().i18n
})

test('should render JobResponsibilities correctly', () => {
  const prefix = 'some-prefix'
  const { container } = render(<JobResponsibilities
    i18nKeyPrefix={prefix}
  />)
  expect(container.firstChild).toMatchSnapshot()
  expect(tMock).toBeCalledWith('business-card-experience-responsibilities-title')
  expect(tMock).toHaveBeenCalledWith(`${prefix}-1`)
  expect(tMock).toHaveBeenCalledWith(`${prefix}-1-1`)
  expect(tMock).not.toHaveBeenCalledWith(`${prefix}-2`)
})

afterEach(() => {
  jest.restoreAllMocks();
});
