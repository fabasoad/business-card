import * as React from 'react'
import type { CertificateItemProps } from '../CertificateItem'

export default function CertificateItem({ certificate }: CertificateItemProps) {
  return (
    <div data-testid={`CertificateItem-${certificate.id}`}></div>
  )
}
