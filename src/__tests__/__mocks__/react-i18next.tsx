import * as React from 'react'

const mock = {
  t: jest.fn((key) => key),
  i18n: {
    exists: jest.fn((key) => key === 'some-prefix-1' || key == 'some-prefix-1-1')
  }
}

export const useTranslation = () => mock

// eslint-disable-next-line react/prop-types
export function Trans({ i18nKey }) {
  return (<>{i18nKey}</>)
}
