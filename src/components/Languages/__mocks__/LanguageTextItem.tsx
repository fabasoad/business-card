import * as React from 'react'
import { LanguageTextItemProps } from '../LanguageTextItem'

export default function LanguageTextItem({ code, text }: LanguageTextItemProps) {
  return (
    <div data-testid={code}>
      <div data-testid="text">{text}</div>
    </div>
  )
}
