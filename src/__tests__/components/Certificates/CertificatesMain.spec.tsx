/// <reference types="jest" />
import * as React from 'react'
import { shallow, ShallowWrapper } from 'enzyme'
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

test('should render CertificatesMain correctly', () => {
  const certificateIssuerStorageFindByNameSpy = jest.fn(k => ({ name: `test-name-${k}`, img: `test-img-${k}` }))
  const certificateIssuerStorage = new CertificateIssuerStorage({ items: new Map<string, CertificateIssuer>() })
  certificateIssuerStorage.findByName = certificateIssuerStorageFindByNameSpy

  const technologyStorageFindByNameSpy = jest.fn(k => ({ name: `test-name-${k}`, img: `test-img-${k}` }))
  const technologyStorage = new TechnologyStorage({ items: new Map<string, Technology>() })
  technologyStorage.findByName = technologyStorageFindByNameSpy

  const wrapper: ShallowWrapper = shallow(<CertificatesMain
    certificateIssuerStorage={certificateIssuerStorage}
    technologyStorage={technologyStorage}
  />)
  expect(wrapper).toMatchSnapshot()
  expect(tMock).toHaveBeenCalledTimes(1)
  expect(tMock).toHaveBeenCalledWith('business-card-certificates-title')
  expect(certificateIssuerStorageFindByNameSpy).toHaveBeenCalledTimes(3)
  new Array<string>('coursera', 'udemy').forEach(t =>
    expect(certificateIssuerStorageFindByNameSpy).toHaveBeenCalledWith(t)
  )
  expect(technologyStorageFindByNameSpy).toHaveBeenCalledTimes(3)
  new Array<string>('python', 'java', 'react').forEach(t =>
    expect(technologyStorageFindByNameSpy).toHaveBeenCalledWith(t)
  )
})

afterEach(() => {
  jest.clearAllMocks()
})