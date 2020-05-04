import * as React from 'react'
import { Image, Toast } from 'react-bootstrap'
import DateLocale from '../controls/DateLocale'

interface CertificateItemProps {
  footer: any
  id: string
  img: any
  issuer: string
  title: any
  url: string
}

export default function CertificateItem(props: CertificateItemProps) {
  return (
    <Toast className="mb-4 mx-2 w-100">
      <Toast.Header closeButton={false}>
        <Image src={props.img} className="mr-2" rounded />
        <strong className="mr-auto">{props.issuer}</strong>
        <small>{props.id}</small>
      </Toast.Header>
      <Toast.Body className="text-center">
        <a target="_blank" href={props.url}>{props.title}</a>
      </Toast.Body>
      <Toast.Header className="float-right" closeButton={false}>{props.footer}</Toast.Header>
    </Toast>
  )
}