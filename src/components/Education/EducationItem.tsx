import * as React from 'react'
import i18nService, {
  I18nServiceCallbackTypes
} from '../../scripts/i18n/I18nService'
import { toDateLocale, humanize } from '../../scripts/utils/DateUtils'
import { useTranslation} from 'react-i18next'

export type EducationItemProps = {
  universityKey: string,
  universityName: string,
  location: string,
  img: any,
  fromYear: number,
  toYear: number
}

export default function EducationItem({
  universityKey, universityName, location, img, fromYear, toYear
}: EducationItemProps) {
  const getClazzName = (code: string) =>
    `font-${code === 'jp' ? '' : 'non-'}jp`

  const { t, i18n } = useTranslation()
  const [clazz, setClazz] = React.useState<string>(getClazzName(i18n.language))

  i18nService.registerCallback(
    I18nServiceCallbackTypes.ON_CHANGED,
    (code: string) => setClazz(getClazzName(code))
  )

  return (
    <>
      <p className={`timeline__title ${clazz}`}>
        <img src={img} alt={universityName} />
        {t(`education.university.${universityKey}.title`)} ({t(`locations.${location}`)})
      </p>
      <p className="timeline__subtitle">
        {toDateLocale(fromYear)} - {toDateLocale(toYear)}{t('comma')}{humanize(new Date(fromYear), new Date(toYear), i18n.language)}
      </p>
      <div className="timeline__body">
        {t(`education.university.${universityKey}.speciality`)}
      </div>
    </>
  )
}
