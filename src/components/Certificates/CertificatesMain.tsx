/// <reference path='./CertificatesMain.d.ts' />
import * as React from 'react'
import { useTranslation } from 'react-i18next'
import CertificateItem from './CertificateItem'

import imgCoursera from '../../assets/images/certificates/coursera.png'
import imgUdemy from '../../assets/images/certificates/udemy.png'
import DateLocale from '../controls/DateLocale'

export default function CertificatesMain() {
  const { t } = useTranslation()
  return (
    <div id="certificates" className="light-component">
      <div className="section-title text-center center">
        <h2>{t('business-card-certificates-title')}</h2>
        <hr />
      </div>
      <div className="row justify-content-center">
        <CertificateItem
          footer={<DateLocale month={5} year={2015} />}
          id="MWE43H8YDS"
          img={imgCoursera}
          issuer="Coursera"
          title={<div>Programming for everybody (Python)<div>&nbsp;</div></div>}
          url="https://www.coursera.org/account/accomplishments/verify/MWE43H8YDS"
        />
        <CertificateItem
          footer={<DateLocale month={3} year={2018} />}
          id="W5AB2PBZQNPY"
          img={imgCoursera}
          issuer="Coursera"
          title="Parallel, Concurrent, and Distributed Programming in Java Specialization"
          url="https://www.coursera.org/account/accomplishments/specialization/W5AB2PBZQNPY"
        />
        <CertificateItem
          footer={<DateLocale month={10} year={2019} />}
          id="UC-JGDVYKAQ"
          img={imgUdemy}
          issuer="Udemy"
          title="The Complete React Developer Course (w/ Hooks and Redux)"
          url="http://ude.my/UC-JGDVYKAQ"
        />
      </div>
    </div>
  )
}