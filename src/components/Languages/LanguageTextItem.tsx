import * as React from 'react'
import LanguageItem, { type LanguageItemProps } from './LanguageItem'

export type LanguageTextItemProps = LanguageItemProps & {
  text: string
}

export default function LanguageTextItem({ code, text }: LanguageTextItemProps) {
  return (
    <LanguageItem code={code}>
      <span className="h5 mt-2">{text}</span>
    </LanguageItem>
  )
}
