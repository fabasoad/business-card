import * as React from 'react'
import { Container } from 'react-bootstrap'

export default function Error({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="error">
      <Container>
        {children}
      </Container>
    </div>
  )
}
