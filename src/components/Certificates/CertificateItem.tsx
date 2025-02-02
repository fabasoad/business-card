import * as React from 'react'
import { Card } from 'react-bootstrap'
import { useTranslation } from 'react-i18next'
import { Certificate } from '../../scripts/certificates/types'
import { getDateLocale } from '../../scripts/utils/DateUtils'

export type CertificateItemProps = {
  certificate: Certificate
}

export default function CertificateItem({ certificate }: CertificateItemProps) {
  const { t } = useTranslation()
  const { id, img, url, issuer, date } = certificate

  return (
    <Card>
      <Card.Body className="d-flex flex-column">
        <div className="justify-content-center mt-2">
          <Card.Img src={img} />
        </div>
        <Card.Title>
          <Card.Link target="_blank" rel="noopener noreferrer" href={url}>
            {t(`certificates.list.${id}`)}
          </Card.Link>
        </Card.Title>
        <Card.Subtitle>{t('by-issuer', { issuer })}</Card.Subtitle>
      </Card.Body>
      <Card.Footer>
        {getDateLocale(date.getFullYear(), date.getMonth())}
      </Card.Footer>
    </Card>
  )
}
