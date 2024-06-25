/// <reference path='./CertificateIssuerStorage.d.ts' />
import * as imgCoursera from '../../assets/images/certificate-issuers/coursera.png'
import * as imgGitHub from '../../assets/images/certificate-issuers/github.png'
import * as imgOracle from '../../assets/images/certificate-issuers/oracle.png'
import * as imgPracticalDevSecOps from '../../assets/images/certificate-issuers/practical-devsecops.png'
import * as imgUdemy from '../../assets/images/certificate-issuers/udemy.png'
import * as imgHackerRank from '../../assets/images/certificate-issuers/hacker-rank.png'
import { CertificateIssuerProvider, CertificateIssuer } from './types'

export default class CertificateIssuerStorage {
  private readonly provider: CertificateIssuerProvider

  constructor(provider: CertificateIssuerProvider = {
    items: new Map<string, CertificateIssuer>([
      ['coursera', { name: 'coursera', img: imgCoursera }],
      ['github', { name: 'GitHub', img: imgGitHub }],
      ['hacker-rank', { name: 'hackerRank', img: imgHackerRank }],
      ['oracle', { name: 'oracle', img: imgOracle }],
      ['practical-devsecops', { name: 'Practical DevSecOps', img: imgPracticalDevSecOps }],
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
