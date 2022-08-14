/// <reference types="jest" />
import * as React from 'react'
import { render } from '@testing-library/react'
import CertificatesMain from '../../../components/Certificates/CertificatesMain'
import { useTranslation } from '../../__mocks__/react-i18next'
import CertificateIssuerStorage from '../../../scripts/certificates/CertificateIssuerStorage'
import TechnologyStorage from '../../../scripts/technologies/TechnologyStorage'
import { CertificateIssuer } from '../../../scripts/certificates/types'
import { Technology } from '../../../scripts/technologies/types'

let tMock

beforeAll(() => {
  tMock = useTranslation().t
})

test.skip('should render CertificatesMain correctly', () => {
  const cisFindByNameSpy = jest.fn((k) => ({ name: `test-name-${k}`, img: `test-img-${k}` }))
  const cis = new CertificateIssuerStorage({ items: new Map<string, CertificateIssuer>() })
  cis.findByName = cisFindByNameSpy

  const tsFindByNameSpy = jest.fn((k) => ({ name: `test-name-${k}`, title: `test-title-${k}`, img: `test-img-${k}` }))
  const ts = new TechnologyStorage({ items: new Map<string, Technology>() })
  ts.findByName = tsFindByNameSpy

  const { container } = render(<CertificatesMain
    certificateIssuerStorage={cis}
    technologyStorage={ts}
  />)
  expect(container.firstChild).toMatchSnapshot()
  expect(tMock).toHaveBeenCalledTimes(1)
  expect(tMock).toHaveBeenCalledWith('business-card-certificates-title')
  expect(cisFindByNameSpy).toHaveBeenCalledTimes(5)
  new Array<string>('coursera', 'oracle', 'udemy', 'hacker-rank').forEach((t: string) =>
    expect(cisFindByNameSpy).toHaveBeenCalledWith(t)
  )
  expect(tsFindByNameSpy).toHaveBeenCalledTimes(5)
  new Array<string>('python', 'java', 'react', 'algorithms').forEach((t: string) =>
    expect(tsFindByNameSpy).toHaveBeenCalledWith(t)
  )
})
