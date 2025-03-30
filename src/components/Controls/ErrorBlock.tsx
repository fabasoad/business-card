import * as React from 'react'
import { Container, Row } from 'react-bootstrap'

type ErrorProps = {
  title: string
}

export default function ErrorBlock({
  children, title
}: React.PropsWithChildren<ErrorProps>) {
  return (
    <div className="error">
      <Container className="text-center">
        <Row className="d-flex justify-content-center">{title}</Row>
        <Row className="d-flex justify-content-center">{children}</Row>
      </Container>
    </div>
  )
}
