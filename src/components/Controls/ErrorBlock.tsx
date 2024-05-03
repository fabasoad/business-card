import * as React from 'react'
import { Container, Row } from 'react-bootstrap'

type ErrorProps = {
  title: string
}

export default function ErrorBlock({ children, title }: React.PropsWithChildren<ErrorProps>) {
  return (
    <div className="error">
      <Container>
        <Row>{title}</Row>
        <Row>{children}</Row>
      </Container>
    </div>
  )
}
