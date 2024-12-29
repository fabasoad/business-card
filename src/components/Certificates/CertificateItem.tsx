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
      <Card.Body className="d-flex flex-column">
        <div className="justify-content-center mt-2">
          <Card.Img src={issuer.img} />
        </div>
        <Card.Title>
          <Card.Link target="_blank" rel="noopener noreferrer" href={url}>
            {name}
          </Card.Link>
        </Card.Title>
        <Card.Subtitle>Issuer: {issuer.name}</Card.Subtitle>
      </Card.Body>
      <Card.Footer>
        {getDateLocale(issueDate.getFullYear(), issueDate.getMonth())}
      </Card.Footer>
    </Card>
  )
}
