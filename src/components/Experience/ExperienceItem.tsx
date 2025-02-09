import * as React from 'react'
import i18nService, {
  I18nServiceCallbackTypes
} from '../../scripts/i18n/I18nService'
import { humanize, toDateLocaleFromDate } from '../../scripts/utils/DateUtils'
import { useTranslation } from 'react-i18next'
import { Experience } from '../../scripts/experience/types'

type ExperienceBodyItem = string | string[]

export type ExperienceItemProps = {
  experience: Experience
}

export default function ExperienceItem({ experience }: ExperienceItemProps) {
  const { id, title, locationI18nKey, techStack, img, from, to } = experience
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

  const toDate = to === undefined
    ? t('experience.present')
    : toDateLocaleFromDate(to)
  return (
    <>
      <p className={`timeline__title ${clazz}`}>
        <img src={img} alt={title} />
        {title} ({t(`locations.${locationI18nKey}`)})
      </p>
      <p className="timeline__subtitle">
        {toDateLocaleFromDate(from)} - {toDate}{t('comma')}{humanize(from, to || new Date(), i18n.language)}
      </p>
      <div className="timeline__body">
        {renderExperienceBody(id, t(`experience.body.${id}`, { returnObjects: true }) as ExperienceBodyItem)}
      </div>
      <div className="timeline__tech-stack">
        <div className={`timeline__tech-stack__title ${clazz}`}>{t('experience.tech-stack')}</div>
        <div>{techStack.join(t('comma'))}</div>
      </div>
    </>
  )
}
