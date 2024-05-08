import * as React from 'react'
import { useTranslation } from 'react-i18next'

export type LanguageItemProps = {
  code: string
}

export default function LanguageItem({
  children, code
}: React.PropsWithChildren<LanguageItemProps>) {
  const { t } = useTranslation()
  return (
    <div className="mb-4 mx-4">
      <div className="h4">{t(`business-card-languages-${code}`)}</div>
      {children}
    </div>
  )
}
