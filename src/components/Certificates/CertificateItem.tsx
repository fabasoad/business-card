import * as React from 'react'
import { Card } from 'react-bootstrap'
import { CertificateIssuer } from '../../scripts/certificates/types'
import { Technology } from '../../scripts/technologies/types'
import { WithTranslation, withTranslation} from 'react-i18next'
import { getDateLocale } from '../../scripts/utils/DateUtils'

interface CertificateItemProps {
  id: string
  issueDate: Date
  issuer: CertificateIssuer
  technology: Technology
  i18nTitleKey: string
  url: string
}

function CertificateItem({
  issueDate, issuer, i18nTitleKey, url, t
}: WithTranslation & CertificateItemProps) {
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
            {t(i18nTitleKey)}
          </Card.Link>
        </Card.Text>
      </Card.Body>
      <Card.Footer>
        {getDateLocale(issueDate.getFullYear(), issueDate.getMonth())}
      </Card.Footer>
    </Card>
  )
}

export default withTranslation()(CertificateItem)
