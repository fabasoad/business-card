import * as React from 'react'
import { withTranslation, WithTranslation } from 'react-i18next'

export type LanguageItemProps = {
  code: string
}

function LanguageItem({
  children, code, t
}: WithTranslation & React.PropsWithChildren<LanguageItemProps>) {
  return (
    <div className="mb-4 mx-4">
      <div className="h4">{t(`business-card-languages-${code}`)}</div>
      {children}
    </div>
  )
}

export default withTranslation()(LanguageItem)
