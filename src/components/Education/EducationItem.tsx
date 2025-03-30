import * as React from 'react'
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
  const { t, i18n } = useTranslation()

  return (
    <>
      <p className={`timeline__title`}>
        <img src={img} alt={universityName} loading="lazy" />
        {t(`education.university.${universityKey}.title`)} ({t(`locations.${location}`)})
      </p>
      <p className="timeline__subtitle">
        {toDateLocale(fromYear)} - {toDateLocale(toYear)}{t('comma')}{humanize(new Date(fromYear, 0), new Date(toYear, 0), i18n.language)}
      </p>
      <div className="timeline__body">
        {t(`education.university.${universityKey}.speciality`)}
      </div>
    </>
  )
}
