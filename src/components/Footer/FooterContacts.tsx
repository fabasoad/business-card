import * as React from 'react'

import FooterEmail from './FooterEmail'
import FooterLocation from './FooterLocation'

export default function FooterContacts() {
  return (
    <div className="row contacts">
      <FooterLocation />
      <FooterEmail />
    </div>
  )
}
