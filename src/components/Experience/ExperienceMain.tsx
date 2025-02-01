import * as React from 'react'
import * as imgArkaFSS from '../../assets/images/companies/arka-fss.png'
import * as imgBitcoinCom from '../../assets/images/companies/bitcoin-com.png'
import * as imgLohika from '../../assets/images/companies/lohika.png'
import * as imgWbyT from '../../assets/images/companies/wbyt.png'
import i18nService, {
  I18nServiceCallbackTypes
} from '../../scripts/i18n/I18nService'
import { getDateLocale } from '../../scripts/utils/DateUtils'
import { Container, Row } from 'react-bootstrap'
import { useTranslation } from 'react-i18next'
import SectionTitle from '../Controls/SectionTitle';

export default function ExperienceMain() {
  const getClazzName = (code: string) =>
    `font-${code === 'jp' ? '' : 'non-'}jp`

  const { t, i18n } = useTranslation()
  const [clazz, setClazz] = React.useState<string>(getClazzName(i18n.language))

  i18nService.registerCallback(
    I18nServiceCallbackTypes.ON_CHANGED,
    (code: string) => setClazz(getClazzName(code))
  )

  return (
    <div id="experience" className="light-component">
      <Container>
        <SectionTitle>{t('experience.title')}</SectionTitle>
        <Row>
          <ul className="timeline">
            <li>
              <p className={`timeline__title ${clazz}`}>
                <img src={imgWbyT}  alt="Woven by Toyota" />
                Woven by Toyota ({t('locations.chuo')})
              </p>
              <p className="timeline__subtitle">{getDateLocale(2020, 4)} - {t('experience.present')}</p>
              <div className="timeline__body">
                <div className={`timeline__body__achievements ${clazz}`}>{t('experience.achievements')}</div>
                <ul>
                  <li>Created 3 main Application Security GitHub Actions for performing code scanning, SCA and SBOM analysis. They are used widely within the whole company. Currently, there are 1000+ invocations of those GitHub Actions per day.</li>
                  <li>Designed authN/authZ system that is used as a core Auth system within the whole department (11 teams).</li>
                  <li>Built a team of 6 engineers. It includes reviewing candidates, hiring process, mentoring and helping with personal growth.</li>
                  <li>As a Security Champion in a team I've configured Application Security best practices on 50+ repositories (frontend, backend, IaC, etc.).</li>
                  <li>Configured Keycloak as authN/authZ system for the backend.</li>
                  <li>Leading backend project in Go from E2E.</li>
                </ul>
              </div>
              <div className="timeline__tech-stack">
                <div className={`timeline__tech-stack__title ${clazz}`}>{t('experience.tech-stack.title')}</div>
                Java, Go, TypeScript, React, Terraform, AWS, GitLab CI, Concourse CI, GitHub Actions, shell scripting, Python, Kubernetes, MongoDB, Keycloak, Azure AD, GitHub, Application Security.
              </div>
            </li>
            <li>
              <p className={`timeline__title ${clazz}`}>
                <img src={imgBitcoinCom}  alt="Bitcoin.com" />
                Bitcoin.com ({t('locations.shibuya')})
              </p>
              <p className="timeline__subtitle">{getDateLocale(2018, 8)} - {getDateLocale(2020, 3)}</p>
              <div className="timeline__body">
                <div className={`timeline__body__achievements ${clazz}`}>{t('experience.achievements')}</div>
                <ul>
                  <li>Increased unit tests code coverage on a Java backend project from 0% to 80%.</li>
                  <li>Restored legacy Android application. Upgraded it to the latest version, redesigned, added additional features and published a new release.</li>
                  <li>Configured Travis CI for the backend application from scratch.</li>
                  <li>Configured Bitrise for legacy Android application from scratch.</li>
                  <li>Configured GitHub Actions for the web application from scratch.</li>
                </ul>
              </div>
              <div className="timeline__tech-stack">
                <div className={`timeline__tech-stack__title ${clazz}`}>{t('experience.tech-stack.title')}</div>
                Java, JavaScript, GitHub Actions, Python, Redis, Kafka, Travis CI, Bitrise, GitHub.
              </div>
            </li>
            <li>
              <p className={`timeline__title ${clazz}`}>
                <img src={imgLohika}  alt="Lohika" />
                Lohika ({t('locations.odesa')})
              </p>
              <p className="timeline__subtitle">{getDateLocale(2011, 9)} - {getDateLocale(2018, 8)}</p>
              <div className="timeline__body">
                Lohika is an outsourcing company, where I was working as an off-shore contractor for various companies but mostly for Hewlett Packard Enterprise. I developed RIA, backend, mobile and various web applications.
              </div>
              <div className="timeline__tech-stack">
                <div className={`timeline__tech-stack__title ${clazz}`}>{t('experience.tech-stack.title')}</div>
                C#/WinForms/Xamarin/.NET Core, Java, JavaScript, Angular, Oracle, MSSQL, Redis, Kubernetes, GitHub, Docker, Prometheus, ELK, Helm, Delphi.
              </div>
            </li>
            <li>
              <p className={`timeline__title ${clazz}`}>
                <img src={imgArkaFSS}  alt="ARKA - Finance, Software, Services" />
                ARKA - Finance, Software, Services ({t('locations.odesa')})
              </p>
              <p className="timeline__subtitle">{getDateLocale(2010, 2)} - {getDateLocale(2011, 8)}</p>
              <div className="timeline__body">
                Developing investing application as an internal project. Also, developing various web applications for external customers mostly from Germany.
              </div>
              <div className="timeline__tech-stack">
                <div className={`timeline__tech-stack__title ${clazz}`}>{t('experience.tech-stack.title')}</div>
                C#/Silverlight, JavaScript, PHP, MySQL.
              </div>
            </li>
          </ul>
        </Row>
      </Container>
    </div>
  )
}
