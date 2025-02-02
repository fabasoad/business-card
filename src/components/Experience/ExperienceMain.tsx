import * as React from 'react'
import { useTranslation } from 'react-i18next'
import * as imgArkaFSS from '../../assets/images/companies/arka-fss.png'
import * as imgBitcoinCom from '../../assets/images/companies/bitcoin-com.png'
import * as imgLohika from '../../assets/images/companies/lohika.png'
import * as imgWbyT from '../../assets/images/companies/wbyt.png'
import { Container, Row } from 'react-bootstrap'
import SectionTitle from '../Controls/SectionTitle'
import ExperienceItem from './ExperienceItem'

export default function ExperienceMain() {
  const { t } = useTranslation()

  return (
    <div id="experience" className="light-component">
      <Container>
        <SectionTitle>{t('experience.title')}</SectionTitle>
        <Row>
          <ul className="timeline">
            <li>
              <ExperienceItem
                companyKey="woven-by-toyota"
                companyName="Woven by Toyota"
                location="chuo"
                techStack="Java, Go, TypeScript, React, Terraform, AWS, GitLab CI, Concourse CI, GitHub Actions, shell scripting, Python, Kubernetes, MongoDB, Keycloak, Azure AD, GitHub, Application Security."
                img={imgWbyT}
                fromYear={2020}
                fromMonthIndex={4}
              />
            </li>
            <li>
              <ExperienceItem
                companyKey="bitcoin-com"
                companyName="Bitcoin.com"
                location="shibuya"
                techStack="Java, JavaScript, GitHub Actions, Python, Redis, Kafka, Travis CI, Bitrise, GitHub."
                img={imgBitcoinCom}
                fromYear={2018}
                fromMonthIndex={8}
                toYear={2020}
                toMonthIndex={3}
              />
            </li>
            <li>
              <ExperienceItem
                companyKey="lohika"
                companyName="Lohika"
                location="odesa"
                techStack="C#/WinForms/Xamarin/.NET Core, Java, JavaScript, Angular, Oracle, MSSQL, Redis, Kubernetes, GitHub, Docker, Prometheus, ELK, Helm, Delphi."
                img={imgLohika}
                fromYear={2011}
                fromMonthIndex={9}
                toYear={2018}
                toMonthIndex={8}
              />
            </li>
            <li>
              <ExperienceItem
                companyKey="arka"
                companyName="ARKA - Finance, Software, Services"
                location="odesa"
                techStack="C#/Silverlight, JavaScript, PHP, MySQL."
                img={imgArkaFSS}
                fromYear={2010}
                fromMonthIndex={2}
                toYear={2011}
                toMonthIndex={8}
              />
            </li>
          </ul>
        </Row>
      </Container>
    </div>
  )
}
