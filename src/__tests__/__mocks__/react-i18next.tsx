import * as React from 'react'

const mock = {
  t: jest.fn((key) => key),
  i18n: {
    exists: jest.fn((key) => key === 'some-prefix-1' || key == 'some-prefix-1-1')
  }
}

export const useTranslation = () => mock

export function Trans() {
  return (
    <div></div>
  )
}
