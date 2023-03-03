import * as React from 'react'
import FooterContacts from './FooterContacts'
import FooterInfo from './FooterInfo'
import FooterSocial from './FooterSocial'
import SectionTitle from '../Controls/SectionTitle'
import { withTranslation, WithTranslation } from 'react-i18next'

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
