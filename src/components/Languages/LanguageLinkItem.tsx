import * as React from 'react'
import LanguageItem from './LanguageItem'

export default function LaguageLinkItem({ code, text, url }) {
  return (
    <LanguageItem code={code}>
      <a className="h5 mt-2" target="_blank" href={url}>{text}</a>
    </LanguageItem>
  )
}