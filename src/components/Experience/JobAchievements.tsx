import * as React from 'react'
import { useTranslation } from 'react-i18next'

interface JobAchievementsProps {
  count: number
  i18nKeyPrefix: string
}

export default function JobAchievements(props: JobAchievementsProps) {
  const { t } = useTranslation()
  return (
    <>
      <h5>{t('business-card-experience-achievements-title')}</h5>
      {Array(props.count).fill(props.i18nKeyPrefix)
        .map((p, i) => `${p}-${i + 1}`)
        .map((key) => (<p key={key}>{t(key)}</p>))}
    </>
  )
}
