import CertificateIssuerStorage
  from '../../../scripts/certificates/CertificateIssuerStorage'
import { CertificateIssuer } from '../../../scripts/certificates/types'

describe('CertificateIssuerStorage', () => {
  test.each(['coursera', 'udemy'])(`should find %s successfully`, (i: string) => {
    const item: CertificateIssuer = new CertificateIssuerStorage().findByName(i)
    expect(item.name).toBe(i)
    expect(item.img).not.toBeFalsy()
  })

  test('should return new issuer in case it does not exist', () => {
    const item: CertificateIssuer =
      new CertificateIssuerStorage().findByName('test-name')
    expect(item.name).toBe('test-name')
    expect(item.img).not.toBeFalsy()
  })
})
