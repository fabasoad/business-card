import * as React from 'react'
import FooterContacts from './FooterContacts'
import FooterInfo from './FooterInfo'
import FooterSocial from './FooterSocial'
import SectionTitle from '../Controls/SectionTitle'
import { useTranslation } from 'react-i18next'

export default function FooterMain() {
  const { t } = useTranslation()
  return (
    <div id="contacts" className="footer text-center">
      <SectionTitle>{t('contacts.title')}</SectionTitle>
      <FooterContacts />
      <FooterSocial />
      <FooterInfo />
    </div>
  )
}
