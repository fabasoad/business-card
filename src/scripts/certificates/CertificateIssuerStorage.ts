/// <reference path='./CertificateIssuerStorage.d.ts' />
import * as imgCoursera from '../../assets/images/certificate-issuers/coursera.png'
import * as imgOracle from '../../assets/images/certificate-issuers/oracle.png'
import * as imgUdemy from '../../assets/images/certificate-issuers/udemy.png'
import * as imgHackerRank from '../../assets/images/certificate-issuers/hacker-rank.png'
import { CertificateIssuerProvider, CertificateIssuer } from './types'

export default class CertificateIssuerStorage {
  private readonly provider: CertificateIssuerProvider

  constructor(provider: CertificateIssuerProvider = {
    items: new Map<string, CertificateIssuer>([
      ['coursera', { name: 'coursera', img: imgCoursera }],
      ['hacker-rank', { name: 'hackerRank', img: imgHackerRank }],
      ['oracle', { name: 'oracle', img: imgOracle }],
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
