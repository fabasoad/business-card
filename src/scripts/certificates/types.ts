export interface CertificateIssuer {
  name: string
  img?: any
}

export interface CertificateIssuerProvider {
  items: Map<string, CertificateIssuer>
}
