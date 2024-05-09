import * as React from 'react'
import FooterContacts from './FooterContacts'
import FooterInfo from './FooterInfo'
import FooterSocial from './FooterSocial'
import SectionTitle from '../Controls/SectionTitle'
import { useTranslation } from 'react-i18next'

export default function FooterMain() {
  const { t } = useTranslation()
  return (
    <div className="footer">
      <div id="contact" className="container text-center">
        <SectionTitle>{t('business-card-contact-title')}</SectionTitle>
        <FooterContacts />
        <FooterSocial />
        <FooterInfo />
      </div>
    </div>
  )
}
