import * as React from 'react'
import Card from 'react-bootstrap/Card'
import { useTranslation } from 'react-i18next'
import DateLocale from '../controls/DateLocale'
import { Technology } from '../../scripts/technologies/types'
import { CertificateIssuer } from '../../scripts/certificates/types'

interface CertificateItemProps {
  id: string
  issueDate: Date
  issuer: CertificateIssuer
  technology: Technology
  i18nTitleKey: string
  url: string
}

export default function CertificateItem(props: CertificateItemProps) {
  const { t } = useTranslation()
  return (
    <Card>
      <Card.Header>
        {props.issuer.img &&
          <Card.Img src={props.issuer.img} className="me-2" />}
        {props.issuer.name}
      </Card.Header>
      <Card.Body>
        <Card.Text>
          <Card.Link target="_blank" rel="noopener noreferrer" href={props.url}>
            {t(props.i18nTitleKey)}
          </Card.Link>
        </Card.Text>
      </Card.Body>
      <Card.Footer>
        <DateLocale
          month={props.issueDate.getMonth() + 1}
          year={props.issueDate.getFullYear()}
        />
      </Card.Footer>
    </Card>
  )
}
