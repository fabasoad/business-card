import * as React from 'react'
import { FooterEmailProps } from '../FooterEmail'

export default function FooterEmail({ email }: FooterEmailProps) {
  return (
    <div data-testid="FooterEmail">{email}</div>
  )
}
