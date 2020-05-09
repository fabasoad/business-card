import * as React from 'react'
import FlagIconFactory from 'react-flag-icon-css'

export interface LanguageItemProps {
  children?: React.ReactNode
  code: string
}

export default function LanguageItem(props: LanguageItemProps) {
  const FlagIcon = FlagIconFactory(React, { 'useCssModules': false })
  return (
    <div className="mb-4 mx-4">
      <FlagIcon className="mx-auto" code={props.code} size="4x" />
      {props.children}
    </div>
  )
}
