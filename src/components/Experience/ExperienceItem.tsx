import * as React from 'react'
import i18nService, {
  I18nServiceCallbackTypes
} from '../../scripts/i18n/I18nService'
import { getDateLocale, humanize } from '../../scripts/utils/DateUtils'
import { useTranslation } from 'react-i18next'

type ExperienceBodyItem = string | string[]

type ExperienceItemProps = {
  companyKey: string,
  companyName: string,
  location: string,
  techStack: string,
  img: any,
  fromYear: number,
  fromMonthIndex: number,
  toYear?: number,
  toMonthIndex?: number
}

export default function ExperienceItem({
  companyKey, companyName, location, techStack, img, fromYear, fromMonthIndex, toYear, toMonthIndex
}: ExperienceItemProps) {
  const getClazzName = (code: string) =>
    `font-${code === 'jp' ? '' : 'non-'}jp`

  const { t, i18n } = useTranslation()
  const [clazz, setClazz] = React.useState<string>(getClazzName(i18n.language))

  i18nService.registerCallback(
    I18nServiceCallbackTypes.ON_CHANGED,
    (code: string) => setClazz(getClazzName(code))
  )

  const renderExperienceBody =
    (k: string, body: ExperienceBodyItem) => {
      // For tests
      return typeof body === 'string' ? body : (
        <>
          <div className={`timeline__body__achievements ${clazz}`}>
            {t('experience.achievements')}
          </div>
          <ul>
            {
              body.map((bodyItem: string, index: number) => (
                <li key={`${k}-${index}`}>{bodyItem}</li>
              ))
            }
          </ul>
        </>
      )
    }

  let toDate: Date
  let toDateLocale: string
  if (toYear != undefined) {
    toDate = new Date(toYear, toMonthIndex === undefined ? 0 : toMonthIndex)
    toDateLocale = getDateLocale(fromYear, toMonthIndex)
  } else {
    toDate = new Date()
    toDateLocale = t('experience.present')
  }

  return (
    <>
      <p className={`timeline__title ${clazz}`}>
        <img src={img} alt={companyName} />
        {companyName} ({t(`locations.${location}`)})
      </p>
      <p className="timeline__subtitle">
        {getDateLocale(fromYear, fromMonthIndex)} - {toDateLocale}{t('comma')}{humanize(new Date(fromYear, fromMonthIndex), toDate, i18n.language)}
      </p>
      <div className="timeline__body">
        {renderExperienceBody(companyKey, t(`experience.body.${companyKey}`, { returnObjects: true }) as ExperienceBodyItem)}
      </div>
      <div className="timeline__tech-stack">
        <div className={`timeline__tech-stack__title ${clazz}`}>{t('experience.tech-stack')}</div>
        <div>{techStack}</div>
      </div>
    </>
  )
}
