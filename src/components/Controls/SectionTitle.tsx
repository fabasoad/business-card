import * as React from 'react'

export default function SectionTitle({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="section-title text-center center">
      <h2>{children}</h2>
      <hr />
    </div>
  )
}
