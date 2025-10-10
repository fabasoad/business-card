import * as React from 'react'
import { Card } from 'react-bootstrap'
import { useTranslation } from 'react-i18next'
import type { Certificate } from '../../scripts/certificates/types'
import { toDateLocale } from '../../scripts/utils/DateUtils'

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
          <Card.Link target="_blank" rel="noopener noreferrer" href={url}>
            <Card.Img src={img} />
          </Card.Link>
        </div>
        <Card.Title title={t(`certificates.list.${id}`)}>
          {t(`certificates.list.${id}`)}
        </Card.Title>
        <Card.Subtitle title={t('by-issuer', { issuer })}>
          {t('by-issuer', { issuer })}
        </Card.Subtitle>
      </Card.Body>
      <Card.Footer>
        {toDateLocale(date.getFullYear(), date.getMonth())}
      </Card.Footer>
    </Card>
  )
}
