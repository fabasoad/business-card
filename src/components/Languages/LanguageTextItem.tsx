import * as React from 'react'
import LanguageItem, { LanguageItemProps } from './LanguageItem'

export type LanguageTextItemProps = LanguageItemProps & {
  text: string
}

export default function LanguageTextItem(props: LanguageTextItemProps) {
  return (
    <LanguageItem code={props.code}>
      <span className="h5 mt-2">{props.text}</span>
    </LanguageItem>
  )
}
