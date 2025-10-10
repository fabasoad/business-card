import * as React from 'react'
import type { FooterEmailProps } from '../FooterEmail'

export default function FooterEmail({ email }: FooterEmailProps) {
  return (
    <div data-testid="FooterEmail">{email}</div>
  )
}
