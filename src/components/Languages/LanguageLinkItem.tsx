import * as React from 'react'
import LanguageItem from './LanguageItem'
import type { LanguageTextItemProps } from './LanguageTextItem'

export type LanguageLinkItemProps = LanguageTextItemProps & {
  url: string
}

export default function LanguageLinkItem({ code, text, url }: LanguageLinkItemProps) {
  return (
    <LanguageItem code={code}>
      <a className="h5 mt-2" target="_blank" rel="noopener noreferrer" href={url}>{text}</a>
    </LanguageItem>
  )
}
