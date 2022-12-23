import * as React from 'react'
import { useTranslation } from 'react-i18next'
import FooterContacts from './FooterContacts'
import FooterInfo from './FooterInfo'
import FooterSocial from './FooterSocial'

export default function FooterMain() {
  const { t } = useTranslation()
  return (
    <div className="footer">
      <div id="contact" className="container text-center">
        <div className="section-title center">
          <h2>{t('business-card-contact-title')}</h2>
          <hr />
        </div>
        <FooterContacts />
        <FooterSocial />
        <FooterInfo />
      </div>
    </div>
  )
}
