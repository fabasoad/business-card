import * as React from 'react'
import { Trans, withTranslation, WithTranslation } from 'react-i18next'

interface JobDescriptionProps {
  count: number
  i18nKeyPrefix: string
  withTitle?: boolean
}

function JobDescription(
  { t, count, i18nKeyPrefix, withTitle }: WithTranslation & JobDescriptionProps
) {
  return (
    <div className="job-description">
      {withTitle && <h5>{t('business-card-experience-description-title')}</h5>}
      {Array(count).fill(i18nKeyPrefix)
        .map((p, i) => `${p}-${i + 1}`)
        .map((key) => (<Trans key={key} parent="div" t={t}>{key}</Trans>))}
    </div>
  )
}

JobDescription.defaultProps = {
  withTitle: true
}

export default withTranslation()(JobDescription)
