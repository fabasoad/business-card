import CertificateIssuerStorage
  from '../../../scripts/certificates/CertificateIssuerStorage'

new Array<string>('coursera', 'udemy').forEach((i) =>
  test(`should find ${i} successfully`, () => {
    const storage = new CertificateIssuerStorage()
    const item = storage.findByName(i)
    expect(item.name).toBe(i)
    expect(item.img).not.toBeFalsy()
  })
)

test('should return new issuer in case it does not exist', () => {
  const storage = new CertificateIssuerStorage()
  const item = storage.findByName('test-name')
  expect(item.name).toBe('test-name')
  expect(item.img).toBeFalsy()
})
