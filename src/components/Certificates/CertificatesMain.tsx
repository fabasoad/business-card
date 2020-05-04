/// <reference path='./CertificatesMain.d.ts' />
import * as React from 'react'
import { useTranslation } from 'react-i18next'
import CertificateItem from './CertificateItem'

import imgCoursera from '../../assets/images/certificates/coursera.png'
import imgUdemy from '../../assets/images/certificates/udemy.png'
import TechnologyStorage from '../../scripts/technologies/TechnologyStorage'

interface CertificatesMainProps {
  technologyStorage?: TechnologyStorage
}

export default function CertificatesMain(props: CertificatesMainProps) {
  const { t } = useTranslation()
  return (
    <div id="certificates" className="light-component">
      <div className="section-title text-center center">
        <h2>{t('business-card-certificates-title')}</h2>
        <hr />
      </div>
      <div className="row justify-content-center">
        <CertificateItem
          id="MWE43H8YDS"
          issueDate={{ month: 5, year: 2015 }}
          issuer={{ img: imgCoursera, name: "Coursera" }}
          technology={props.technologyStorage.findByName('python')}
          title={<div>Programming for everybody (Python)<div>&nbsp;</div></div>}
          url="https://www.coursera.org/account/accomplishments/verify/MWE43H8YDS"
        />
        <CertificateItem
          id="W5AB2PBZQNPY"
          issueDate={{ month: 3, year: 2018 }}
          issuer={{ img: imgCoursera, name: "Coursera" }}
          technology={props.technologyStorage.findByName('java')}
          title="Parallel, Concurrent, and Distributed Programming in Java Specialization"
          url="https://www.coursera.org/account/accomplishments/specialization/W5AB2PBZQNPY"
        />
        <CertificateItem
          id="UC-JGDVYKAQ"
          issueDate={{ month: 10, year: 2019 }}
          issuer={{ img: imgUdemy, name: "Udemy" }}
          technology={props.technologyStorage.findByName('react')}
          title="The Complete React Developer Course (w/ Hooks and Redux)"
          url="http://ude.my/UC-JGDVYKAQ"
        />
      </div>
    </div>
  )
}

CertificatesMain.defaultProps = {
  technologyStorage: new TechnologyStorage()
}