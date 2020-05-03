import * as React from 'react'
import LanguageItem from './LanguageItem'

export default function LaguageTextItem({ code, text }) {
  return (
    <LanguageItem code={code}>
      <span className="h5 mt-2">{text}</span>
    </LanguageItem>
  )
}