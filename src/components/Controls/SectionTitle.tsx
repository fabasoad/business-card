import * as React from 'react'

interface SectionTitleProps {
  children: string
}

export default function SectionTitle({ children }: SectionTitleProps) {
  return (
    <div className="section-title text-center center">
      <h2>{children}</h2>
      <hr />
    </div>
  )
}
