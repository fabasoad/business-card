import * as React from 'react'
import { LanguageLinkItemProps } from '../LanguageLinkItem'

export default function LanguageLinkItem({ code, text, url }: LanguageLinkItemProps) {
  return (
    <div data-testid={code}>
      <div data-testid="text">{text}</div>
      <div data-testid="url">{url}</div>
    </div>
  )
}
