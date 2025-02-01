import * as React from 'react'
import * as imgOSAR from '../../assets/images/education/osar.png'
import i18nService, {
  I18nServiceCallback,
  I18nServiceCallbackTypes
} from '../../scripts/i18n/I18nService'
import { getDateLocale } from '../../scripts/utils/DateUtils'
import SectionTitle from '../Controls/SectionTitle'
import { Container, Row } from 'react-bootstrap'
import { useTranslation} from 'react-i18next'

export default function EducationMain() {
  const { t } = useTranslation()
  const [clazz, setClazz] = React.useState<string>('font-jp')

  const callback: I18nServiceCallback =
    (code: string) => setClazz(`font-${code === 'jp' ? '' : 'non-'}jp`)

  i18nService.registerCallback(I18nServiceCallbackTypes.ON_LOADED, callback)
  i18nService.registerCallback(I18nServiceCallbackTypes.ON_CHANGED, callback)

  return (
    <div id="education" className="light-component">
      <Container>
        <SectionTitle>{t('education.title')}</SectionTitle>
        <Row>
          <ul className="timeline">
            <li>
              <p className={`timeline__title ${clazz}`}>
                <img src={imgOSAR} alt="Odesa State Academy of Refrigeration" />
                {t('education.university.title')} ({t('locations.odesa')})
              </p>
              <p className="timeline__subtitle">{getDateLocale(2005)} - {getDateLocale(2010)}</p>
              <div className="timeline__body">
                {t('education.university.speciality')}
              </div>
            </li>
          </ul>
        </Row>
      </Container>
    </div>
  )
}
