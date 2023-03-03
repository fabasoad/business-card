import * as React from 'react'
import * as gb from '../../assets/i18n/gb.json'
import SupportedLocales from '../../scripts/i18n/SupportedLocales'

const reactI18Next: any = jest.createMockFromModule('react-i18next')

const tMock = jest.fn((key) => key)

const i18n = {
  language: SupportedLocales.default.code,
  t: tMock,
  exists: (key: string): boolean => Object.hasOwn(gb, key) ||
    // For testing purposes
    key === 'testing-prefix-1' || key === 'testing-prefix-1-1'
}

reactI18Next.withTranslation = () => (Component) => {
  if (!Component.defaultProps) {
    Component.defaultProps = {}
  }
  Component.defaultProps.i18n = i18n
  Component.defaultProps.t = tMock
  return Component
}

// eslint-disable-next-line react/prop-types
reactI18Next.Trans = function Trans({ i18nKey }) {
  return (<>{i18nKey}</>)
}

reactI18Next.getI18n = () => i18n

module.exports = reactI18Next
