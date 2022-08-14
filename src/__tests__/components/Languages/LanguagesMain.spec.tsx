/// <reference types="jest" />
import * as React from 'react'
import { render } from '@testing-library/react'
import LanguagesMain from '../../../components/Languages/LanguagesMain'
import { useTranslation } from '../../__mocks__/react-i18next'

describe(LanguagesMain.name, () => {
  let tMock

  beforeAll(() => {
    tMock = useTranslation().t
  })

  test('should render LanguageItem correctly', () => {
    const { container } = render(<LanguagesMain />)
    expect(container.firstChild).toMatchSnapshot()
    expect(tMock).toHaveBeenCalledTimes(2)
    expect(tMock).toHaveBeenNthCalledWith(1, 'business-card-languages-title')
    expect(tMock).toHaveBeenNthCalledWith(2, 'business-card-languages-native')
  })
})
