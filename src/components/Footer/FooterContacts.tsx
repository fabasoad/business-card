import * as React from 'react'
import { Row } from 'react-bootstrap'

import FooterEmail from './FooterEmail'
import FooterLocation from './FooterLocation'

export default function FooterContacts() {
  return (
    <Row className="footer-contacts">
      <FooterLocation />
      <FooterEmail email="fabasoad@gmail.com" />
    </Row>
  )
}
