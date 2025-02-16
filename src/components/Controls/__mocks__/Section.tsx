import * as React from 'react'
import { SectionProps } from '../Section'

export default function Section({ id, children }: React.PropsWithChildren<SectionProps>) {
  return (
    <div data-testid={`Section-${id}`}>{children}</div>
  )
}
