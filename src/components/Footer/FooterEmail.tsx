import * as React from 'react'
import { Col } from 'react-bootstrap'

export type FooterEmailProps = {
  email: string
}

export default function FooterEmail({ email }: FooterEmailProps) {
  return (
    <Col>
      <i className="fa fa-envelope fa-2x"></i>
      <p>
        <a target="_blank" rel="noreferrer" href={`mailto:${email}`}>
          {email}
        </a>
      </p>
    </Col>
  )
}
