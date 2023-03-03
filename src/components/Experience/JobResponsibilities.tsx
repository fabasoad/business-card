import * as React from 'react'
import { withTranslation, WithTranslation } from 'react-i18next'

type JobResponsibilitiesProps = {
  i18nKeyPrefix: string
}

type Props = WithTranslation & JobResponsibilitiesProps

function JobResponsibilities({ i18nKeyPrefix, i18n, t }: Props) {
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
        <div className="job-responsibilities">
          <h5>{t('business-card-experience-responsibilities-title')}</h5>
          <ul className="responsibilities">{respList}</ul>
        </div>
      }
    </>
  )
}

export default withTranslation()(JobResponsibilities)
