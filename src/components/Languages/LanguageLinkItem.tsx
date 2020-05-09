import * as React from 'react'
import LanguageItem from './LanguageItem'
import { LanguageTextItemProps } from './LanguageTextItem'

type LanguageLinkItemProps = LanguageTextItemProps & {
  url: string
}

export default function LaguageLinkItem(props: LanguageLinkItemProps) {
  return (
    <LanguageItem code={props.code}>
      <a className="h5 mt-2" target="_blank" rel="noopener noreferrer" href={props.url}>{props.text}</a>
    </LanguageItem>
  )
}
