import * as React from 'react'
import { Image, Toast } from 'react-bootstrap'
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
    <Toast className="mb-4 mx-2 w-100">
      <Toast.Header closeButton={false}>
        {props.issuer.img &&
          <Image src={props.issuer.img} className="mr-2" rounded />}
        <strong className="mr-2">{props.issuer.name}</strong>
        <DateLocale className="mr-auto" month={props.issueDate.getMonth() + 1} year={props.issueDate.getFullYear()} />
        <small>{props.id}</small>
        <Image className="ml-2" src={props.technology.img} />
      </Toast.Header>
      <Toast.Body className="text-center">
        <a target="_blank" rel="noopener noreferrer" href={props.url}>
          {t(props.i18nTitleKey)}
        </a>
      </Toast.Body>
    </Toast>
  )
}
