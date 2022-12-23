import * as React from 'react'

import FooterEmail from './FooterEmail'
import FooterLocation from './FooterLocation'

export default function FooterContacts() {
  return (
    <div className="footer-contacts">
      <FooterLocation />
      <FooterEmail />
    </div>
  )
}
