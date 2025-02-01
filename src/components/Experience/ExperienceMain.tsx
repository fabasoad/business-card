import * as React from 'react'
import * as imgArkaFSS from '../../assets/images/companies/arka-fss.png'
import * as imgBitcoinCom from '../../assets/images/companies/bitcoin-com.png'
import * as imgLohika from '../../assets/images/companies/lohika.png'
import * as imgWbyT from '../../assets/images/companies/wbyt.png'
import { getDateLocale } from '../../scripts/utils/DateUtils'
import DateCircleBox from '../Controls/DateCircleBox'
import JobDescription from './JobDescription'
import JobResponsibilities from './JobResponsibilities'
import JobTechnologies from './JobTechnologies'
import JobTitle from './JobTitle'
import { Container, Row } from 'react-bootstrap'
import { useTranslation } from 'react-i18next'
import SectionTitle from '../Controls/SectionTitle';

export default function ExperienceMain() {
  const { t } = useTranslation()
  return (
    <div id="experience" className="light-component">
      <Container>
        <SectionTitle>{t('experience.title')}</SectionTitle>
        <Row>
          <ul className="experience-timeline">
            <li>
              <p className="experience-title">Woven by Toyota ({t('business-card-location-tokyo')})</p>
              <p className="experience-subtitle">{getDateLocale(2020, 4)} - {t('experience.present')}</p>
              <p className="experience-body">
                {t('experience.achievements')}:
                <ul>
                  <li>Created 3 main Application Security GitHub Actions for performing code scanning, SCA and SBOM analysis. They are used widely within the whole company. Currently, there are 1000+ invocations of those GitHub Actions per day.</li>
                  <li>Designed authN/authZ system that is used as a core Auth system within the whole department (11 teams).</li>
                  <li>Built a team of 6 engineers. It includes reviewing candidates, hiring process, mentoring and helping with personal growth.</li>
                  <li>As a Security Champion in a team I've configured Application Security best practices on 50+ repositories (frontend, backend, IaC, etc.).</li>
                  <li>Configured Keycloak as authN/authZ system for the backend.</li>
                  <li>Leading backend project in Go from E2E.</li>
                </ul>
              </p>
              <p className="experience-techstack">
                {t('experience.tech-stack.title')}: Java, Go, TypeScript, React, Terraform, AWS, GitLab CI, Concourse CI, GitHub Actions, shell scripting, Python, Kubernetes, MongoDB, Keycloak, Azure AD, GitHub, Application Security.
              </p>
            </li>
            <li>
              <p className="experience-title">Bitcoin.com ({t('business-card-location-tokyo')})</p>
              <p className="experience-subtitle">{getDateLocale(2018, 8)} - {getDateLocale(2020, 3)}</p>
              <p className="experience-body">
                {t('experience.achievements')}:
                <ul>
                  <li>Increased unit tests code coverage on a Java backend project from 0% to 80%.</li>
                  <li>Restored legacy Android application. Upgraded it to the latest version, redesigned, added additional features and published a new release.</li>
                  <li>Configured Travis CI for the backend application from scratch.</li>
                  <li>Configured Bitrise for legacy Android application from scratch.</li>
                  <li>Configured GitHub Actions for the web application from scratch.</li>
                </ul>
              </p>
              <p className="experience-techstack">
                {t('experience.tech-stack.title')}: Java, JavaScript, GitHub Actions, Python, Redis, Kafka, Travis CI, Bitrise, GitHub.
              </p>
            </li>
            <li>
              <p className="experience-title">Lohika ({t('business-card-location-odesa')})</p>
              <p className="experience-subtitle">{getDateLocale(2011, 9)} - {getDateLocale(2018, 8)}</p>
              <p className="experience-body">
                Lohika is an outsourcing company, where I was working as an off-shore contractor for various companies but mostly for Hewlett Packard Enterprise. I developed RIA, backend, mobile and various web applications.
              </p>
              <p className="experience-techstack">
                {t('experience.tech-stack.title')}: C#/WinForms/Xamarin/.NET Core, Java, JavaScript, Angular, Oracle, MSSQL, Redis, Kubernetes, GitHub, Docker, Prometheus, ELK, Helm, Delphi.
              </p>
            </li>
            <li>
              <p className="experience-title">ARKA - Finance, Software, Services ({t('business-card-location-odesa')})</p>
              <p className="experience-subtitle">{getDateLocale(2010, 2)} - {getDateLocale(2011, 8)}</p>
              <p className="experience-body">
                Developing investing application as an internal project. Also, developing various web applications for external customers mostly from Germany.
              </p>
              <p className="experience-techstack">
                {t('experience.tech-stack.title')}: C#/Silverlight, JavaScript, PHP, MySQL.
              </p>
            </li>
          </ul>
        </Row>
      </Container>
    </div>
  )
}
