import * as React from 'react'

export default function SectionTitle({ children }: React.PropsWithChildren<{}>) {
  return (
    <div data-testid="SectionTitle">{children}</div>
  )
}
