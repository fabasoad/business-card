import * as React from 'react'
import FlagIconFactory from 'react-flag-icon-css'

export default function LanguageItem({ children, code }) {
  const FlagIcon = FlagIconFactory(React, { 'useCssModules': false })
  return (
    <div className="m-4">
      <FlagIcon className="mx-auto" code={code} size="4x" />
      {children}
    </div>
  )
}