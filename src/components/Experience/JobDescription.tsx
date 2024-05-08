import * as React from 'react'
import { Trans, useTranslation } from 'react-i18next'

interface JobDescriptionProps {
  count: number
  i18nKeyPrefix: string
  withTitle?: boolean
}

export default function JobDescription(
  { count, i18nKeyPrefix, withTitle = true }: JobDescriptionProps
) {
  const { t } = useTranslation()
  return (
    <div className="job-description">
      {withTitle && <h5>{t('business-card-experience-description-title')}</h5>}
      {Array(count).fill(i18nKeyPrefix)
        .map((p, i) => `${p}-${i + 1}`)
        .map((key) => (<Trans key={key} parent="div" t={t}>{key}</Trans>))}
    </div>
  )
}
