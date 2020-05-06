import * as React from 'react'

const mock = {
  t: jest.fn((key, options) => key)
}

export const useTranslation = () => mock

export function Trans(props) {
  return (
    <div></div>
  )
}
