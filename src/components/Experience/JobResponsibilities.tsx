import * as React from 'react'
import { useTranslation } from 'react-i18next'

interface JobResponsibilitiesProps {
  count: number
  i18nKeyPrefix: string
}

const JobResponsibilities: React.FunctionComponent<JobResponsibilitiesProps> =
  ({ count, i18nKeyPrefix }) => {
    const { t } = useTranslation()
    return (
      <>
        <h5>{t('business-card-experience-responsibilities-title')}</h5>
        <ul>
          {Array(count).fill(i18nKeyPrefix)
            .map((p, i) => `${p}-${i + 1}`)
            .map((key) => (<li key={key}>{t(key)}</li>))}
        </ul>
      </>
    )
  }

export default JobResponsibilities
