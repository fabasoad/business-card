import * as React from 'react'
import { Col } from 'react-bootstrap'

export default function FooterEmail() {
  return (
    <Col>
      <i className="fa fa-envelope fa-2x"></i>
      <p>
        <a target="_blank" rel="noreferrer" href="mailto:fabasoad@gmail.com">
          fabasoad@gmail.com
        </a>
      </p>
    </Col>
  )
}
