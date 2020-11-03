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
  const cisFindByNameSpy = jest.fn((k) => ({ name: `test-name-${k}`, img: `test-img-${k}` }))
  const cis = new CertificateIssuerStorage({ items: new Map<string, CertificateIssuer>() })
  cis.findByName = cisFindByNameSpy

  const tsFindByNameSpy = jest.fn((k) => ({ name: `test-name-${k}`, title: `test-title-${k}`, img: `test-img-${k}` }))
  const ts = new TechnologyStorage({ items: new Map<string, Technology>() })
  ts.findByName = tsFindByNameSpy

  const wrapper: ShallowWrapper = shallow(<CertificatesMain
    certificateIssuerStorage={cis}
    technologyStorage={ts}
  />)
  expect(wrapper).toMatchSnapshot()
  expect(tMock).toHaveBeenCalledTimes(1)
  expect(tMock).toHaveBeenCalledWith('business-card-certificates-title')
  expect(cisFindByNameSpy).toHaveBeenCalledTimes(4)
  new Array<string>('coursera', 'oracle', 'udemy').forEach((t) =>
    expect(cisFindByNameSpy).toHaveBeenCalledWith(t)
  )
  expect(tsFindByNameSpy).toHaveBeenCalledTimes(4)
  new Array<string>('python', 'java', 'react').forEach((t) =>
    expect(tsFindByNameSpy).toHaveBeenCalledWith(t)
  )
})
