import * as React from 'react'
import { useTranslation } from 'react-i18next'

interface JobResponsibilitiesProps {
  i18nKeyPrefix: string
}

const JobResponsibilities: React.FunctionComponent<JobResponsibilitiesProps> =
  ({ i18nKeyPrefix }) => {
    const { i18n, t } = useTranslation()
    let i: number = 1
    const respList = []
    while (i18n.exists(`${i18nKeyPrefix}-${i}`)) {
      const key: string = `${i18nKeyPrefix}-${i}`
      let j: number = 1
      const subList = []
      while (i18n.exists(`${key}-${j}`)) {
        const subKey: string = `${key}-${j}`
        subList.push(<li key={subKey}>{t(subKey)}</li>)
        j++
      }
      respList.push(<li key={key}>{t(key)}{subList.length > 0 && <ul>{subList}</ul>}</li>)
      i++
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
