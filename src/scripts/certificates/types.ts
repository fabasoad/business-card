import type { Technology } from '../technologies/types'

export type CertificateBase = {
  id: string,
  issuer: string,
  url: string,
}

export type Certificate = CertificateBase & {
  date: Date,
  technology: Technology,
  img: any
}
