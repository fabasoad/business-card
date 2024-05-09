import * as React from 'react'
import { Card } from 'react-bootstrap'
import { CertificateIssuer } from '../../scripts/certificates/types'
import { Technology } from '../../scripts/technologies/types'
import { getDateLocale } from '../../scripts/utils/DateUtils'

interface CertificateItemProps {
  id: string
  issueDate: Date
  issuer: CertificateIssuer
  technology: Technology
  name: string
  url: string
}

export default function CertificateItem({
  issueDate, issuer, name, url
}: CertificateItemProps) {
  return (
    <Card>
      <Card.Header>
        {issuer.img &&
          <Card.Img src={issuer.img} className="me-2" />}
        {issuer.name}
      </Card.Header>
      <Card.Body>
        <Card.Text>
          <Card.Link target="_blank" rel="noopener noreferrer" href={url}>
            {name}
          </Card.Link>
        </Card.Text>
      </Card.Body>
      <Card.Footer>
        {getDateLocale(issueDate.getFullYear(), issueDate.getMonth())}
      </Card.Footer>
    </Card>
  )
}
