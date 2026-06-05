import * as React from 'react'
import * as gb from '../../assets/i18n/gb.json'
import SupportedLocales from '../../scripts/i18n/SupportedLocales'
import { vi } from 'vitest'

const tMock = vi.fn((key) => key)

const i18nMock = {
  language: SupportedLocales.default.code,
  t: tMock,
  exists: (key: string): boolean => Object.hasOwn(gb, key) ||
    // For testing purposes
    key === 'testing-prefix-1' || key === 'testing-prefix-1-1'
}

const Trans = function Trans({ i18nKey }: { i18nKey: string }) {
  return (<>{i18nKey}</>)
}

const getI18n = () => i18nMock

const useTranslation = () => ({
  t: tMock,
  i18n: i18nMock
})

export { Trans, getI18n, useTranslation }
export default { Trans, getI18n, useTranslation }
