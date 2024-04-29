import * as React from 'react'
import { type WithTranslation, withTranslation } from 'react-i18next'
import SectionTitle from '../Controls/SectionTitle'
import FooterContacts from './FooterContacts'
import FooterInfo from './FooterInfo'
import FooterSocial from './FooterSocial'

function FooterMain({ t }: WithTranslation) {
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

export default withTranslation()(FooterMain)
