import * as React from 'react'

const mock = {
  t: jest.fn((key) => key)
}

export const useTranslation = () => mock

export function Trans() {
  return (
    <div></div>
  )
}
