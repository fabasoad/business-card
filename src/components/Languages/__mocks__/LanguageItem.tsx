import * as React from 'react'
import { LanguageItemProps } from '../LanguageItem'

export default function LanguageItem({
  children, code
}: React.PropsWithChildren<LanguageItemProps>) {
  return (
    <div data-testid={code}>{children}</div>
  )
}
