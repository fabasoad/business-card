/// <reference path='./CertificateIssuerStorage.d.ts' />
import imgCoursera from '../../assets/images/certificates/coursera.png'
import imgUdemy from '../../assets/images/certificates/udemy.png'
import { CertificateIssuerProvider, CertificateIssuer } from './types'

export default class CertificateIssuerStorage {

  provider: CertificateIssuerProvider

  constructor(provider: CertificateIssuerProvider = {
    items: new Map<string, CertificateIssuer>([
      ['coursera', { name: 'coursera', img: imgCoursera }],
      ['udemy', { name: 'udemy', img: imgUdemy }]
    ])
  }) {
    this.provider = provider
  }

  findByName(name: string): CertificateIssuer {
    return this.provider.items.has(name)
      ? this.provider.items.get(name)
      : { name }
  }
}