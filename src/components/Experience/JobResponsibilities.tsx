import * as React from 'react'
import { useTranslation } from 'react-i18next'

interface JobResponsibilitiesProps {
  i18nKeyPrefix: string
}

const JobResponsibilities: React.FunctionComponent<JobResponsibilitiesProps> =
  ({ i18nKeyPrefix }) => {
    const { i18n, t } = useTranslation()
    const respList = []
    const key = (x) => `${i18nKeyPrefix}-${x}`
    for (let i = 1; i18n.exists(key(i)); i++) {
      const subList = []
      const subKey = (x: number) => `${key(i)}-${x}`
      for (let j = 1; i18n.exists(subKey(j)); j++) {
        subList.push(<li key={subKey(j)}>{t(subKey(j))}</li>)
      }
      respList
        .push(<li key={key(i)}>{t(key(i))}{subList.length > 0 && <ul>{subList}</ul>}</li>)
    }
    return (
      <>
        {respList.length > 0 &&
          <>
            <h5>{t('business-card-experience-responsibilities-title')}</h5>
            <ul className="responsibilities">{respList}</ul>
          </>
        }
      </>
    )
  }

export default JobResponsibilities
