import * as React from 'react'
import { Image, Toast } from 'react-bootstrap'
import DateLocale from '../controls/DateLocale'
import { Technology } from '../../scripts/technologies/types'

interface CertificateIssuer {
  name: string
  img: any
}

interface CertificateIssueDate {
  month: number
  year: number
}

interface CertificateItemProps {
  id: string
  issueDate: CertificateIssueDate
  issuer: CertificateIssuer
  technology: Technology
  title: any
  url: string
}

export default function CertificateItem(props: CertificateItemProps) {
  return (
    <Toast className="mb-4 mx-2 w-100">
      <Toast.Header closeButton={false}>
        <Image src={props.issuer.img} className="mr-2" rounded />
        <strong className="mr-auto">{props.issuer.name}</strong>
        <small>{props.id}</small>
        <Image className="ml-2" src={props.technology.img} />
      </Toast.Header>
      <Toast.Body className="text-center">
        <a target="_blank" rel="noopener noreferrer" href={props.url}>{props.title}</a>
      </Toast.Body>
      <Toast.Header className="float-right" closeButton={false}>
        <DateLocale month={props.issueDate.month} year={props.issueDate.year} />
      </Toast.Header>
    </Toast>
  )
}