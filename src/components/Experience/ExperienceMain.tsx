import * as React from 'react'
import * as imgArkaFSS from '../../assets/images/companies/arka-fss.png'
import * as imgBitcoinCom from '../../assets/images/companies/bitcoin-com.png'
import * as imgLohika from '../../assets/images/companies/lohika.png'
import * as imgWovenPlanet from '../../assets/images/companies/woven-planet.png'
import JobDescription from './JobDescription'
import JobPeriod from './JobPeriod'
import JobResponsibilities from './JobResponsibilities'
import JobTechnologies from './JobTechnologies'
import JobTitle from './JobTitle'
import { Container } from 'react-bootstrap'
import { withTranslation, WithTranslation } from 'react-i18next'

function ExperienceMain({ t }: WithTranslation) {
  return (
    <div id="experience" className="light-component">
      <Container>
        <div className="section-title text-center">
          <h2>{t('business-card-experience-title')}</h2>
          <hr />
        </div>
        <ul className="timeline">
          <li className="timeline-inverted">
            <JobPeriod
              fromMonthIndex={9}
              fromYear={2021}
            />
            <div className="timeline-panel">
              <JobTitle
                logo={imgWovenPlanet}
                company="Woven Planet"
                title={t('business-card-experience-job-woven-planet-4-title')}
                location={t('business-card-location-tokyo')}
              />
              <div className="timeline-body">
                <JobDescription
                  count={1}
                  i18nKeyPrefix="business-card-experience-job-woven-planet-4-description"
                />
                <JobResponsibilities
                  i18nKeyPrefix="business-card-experience-job-woven-planet-4-responsibilities"
                />
                <JobTechnologies
                  keyPrefix="woven-planet-4"
                  names={['docker', 'gitlab', 'gitlabCi', 'typeScript', 'react', 'maven', 'java', 'quarkus', 'mongodb', 'intellijIdea', 'concourseCI', 'kubernetes', 'terraform', 'aws', 'gitHubActions']}
                />
              </div>
            </div>
          </li>
          <li>
            <JobPeriod
              fromMonthIndex={5}
              fromYear={2021}
              toMonthIndex={8}
              toYear={2021}
            />
            <div className="timeline-panel">
              <JobTitle
                logo={imgWovenPlanet}
                company="Woven Planet"
                title={t('business-card-experience-job-woven-planet-3-title')}
                location={t('business-card-location-tokyo')}
              />
              <div className="timeline-body">
                <JobDescription
                  count={1}
                  i18nKeyPrefix="business-card-experience-job-woven-planet-3-description"
                />
                <JobResponsibilities
                  i18nKeyPrefix="business-card-experience-job-woven-planet-3-responsibilities"
                />
                <JobTechnologies
                  keyPrefix="woven-planet-3"
                  names={['docker', 'gitlab', 'gitlabCi', 'typeScript', 'react', 'maven', 'java', 'quarkus', 'mongodb', 'vsCode', 'intellijIdea', 'concourseCI', 'kubernetes', 'helm', 'prometheus', 'grafana', 'terraform', 'aws']}
                />
              </div>
            </div>
          </li>
          <li className="timeline-inverted">
            <JobPeriod
              fromMonthIndex={8}
              fromYear={2020}
              toMonthIndex={4}
              toYear={2021}
            />
            <div className="timeline-panel">
              <JobTitle
                logo={imgWovenPlanet}
                company="Woven Planet"
                title={t('business-card-experience-job-woven-planet-2-title')}
                location={t('business-card-location-tokyo')}
              />
              <div className="timeline-body">
                <JobDescription
                  count={1}
                  i18nKeyPrefix="business-card-experience-job-woven-planet-2-description"
                />
                <JobResponsibilities
                  i18nKeyPrefix="business-card-experience-job-woven-planet-2-responsibilities"
                />
                <JobTechnologies
                  keyPrefix="woven-planet-2"
                  names={['docker', 'gitlab', 'gitlabCi', 'typeScript', 'react', 'maven', 'java', 'quarkus', 'mongodb', 'vsCode', 'intellijIdea', 'concourseCI', 'kubernetes', 'helm', 'prometheus', 'grafana']}
                />
              </div>
            </div>
          </li>
          <li>
            <JobPeriod
              fromMonthIndex={4}
              fromYear={2020}
              toMonthIndex={7}
              toYear={2020}
            />
            <div className="timeline-panel">
              <JobTitle
                logo={imgWovenPlanet}
                company="Woven Planet"
                title={t('business-card-experience-job-woven-planet-1-title')}
                location={t('business-card-location-tokyo')}
              />
              <div className="timeline-body">
                <JobDescription
                  count={1}
                  i18nKeyPrefix="business-card-experience-job-woven-planet-1-description"
                />
                <JobResponsibilities
                  i18nKeyPrefix="business-card-experience-job-woven-planet-1-responsibilities"
                />
                <JobTechnologies
                  keyPrefix="woven-planet-1"
                  names={['docker', 'gitlab', 'gitlabCi', 'typeScript', 'react', 'maven', 'java', 'quarkus', 'mongodb', 'vsCode', 'intellijIdea']}
                />
              </div>
            </div>
          </li>
          <li className="timeline-inverted">
            <JobPeriod
              fromMonthIndex={6}
              fromYear={2019}
              toMonthIndex={3}
              toYear={2020}
            />
            <div className="timeline-panel">
              <JobTitle
                logo={imgBitcoinCom}
                company="Bitcoin.com"
                title={t('business-card-experience-job-bitcoin-com-2-title')}
                location={t('business-card-location-tokyo')}
              />
              <div className="timeline-body">
                <JobDescription
                  count={1}
                  i18nKeyPrefix="business-card-experience-job-bitcoin-com-2-description"
                />
                <JobResponsibilities
                  i18nKeyPrefix="business-card-experience-job-bitcoin-com-2-responsibilities"
                />
                <JobTechnologies
                  keyPrefix="bitcoin-com-2"
                  names={['docker', 'travis', 'gitHubActions', 'bitrise', 'java', 'kafka', 'spring', 'intellijIdea']}
                />
              </div>
            </div>
          </li>
          <li>
            <JobPeriod
              fromMonthIndex={8}
              fromYear={2018}
              toMonthIndex={5}
              toYear={2019}
            />
            <div className="timeline-panel">
              <JobTitle
                logo={imgBitcoinCom}
                company="Bitcoin.com"
                title={t('business-card-experience-job-bitcoin-com-1-title')}
                location={t('business-card-location-tokyo')}
              />
              <div className="timeline-body">
                <JobDescription
                  count={1}
                  i18nKeyPrefix="business-card-experience-job-bitcoin-com-1-description"
                />
                <JobResponsibilities
                  i18nKeyPrefix="business-card-experience-job-bitcoin-com-1-responsibilities"
                />
                <JobTechnologies
                  keyPrefix="bitcoin-com-1"
                  names={[
                    'maven', 'java', 'tomcat', 'lombok', 'junit', 'python',
                    'javaScript', 'jQuery', 'bootstrap', 'mariaDb', 'redis',
                    'git', 'intellijIdea', 'vsCode', 'jira'
                  ]}
                />
              </div>
            </div>
          </li>
          <li className="timeline-inverted">
            <JobPeriod
              fromMonthIndex={1}
              fromYear={2016}
              toMonthIndex={8}
              toYear={2018}
            />
            <div className="timeline-panel">
              <JobTitle
                logo={imgLohika}
                company="Lohika"
                title={t('business-card-experience-job-lohika-3-title')}
                location={t('business-card-location-odesa')}
              />
              <div className="timeline-body">
                <JobDescription
                  count={1}
                  i18nKeyPrefix="business-card-experience-job-lohika-3-description"
                />
                <JobResponsibilities
                  i18nKeyPrefix="business-card-experience-job-lohika-3-responsibilities"
                />
                <JobTechnologies
                  keyPrefix="lohika-3"
                  names={[
                    'csharp', 'xamarin', 'prism', 'dotNetCore', 'kubernetes', 'helm', 'jira',
                    'elasticsearch', 'jenkins', 'kibana', 'fluentBit', 'fluentD', 'docker',
                    'git', 'gitHub', 'prometheus', 'visualStudio', 'grafana', 'teamCity'
                  ]}
                />
              </div>
            </div>
          </li>
          <li>
            <JobPeriod
              fromMonthIndex={4}
              fromYear={2013}
              toMonthIndex={0}
              toYear={2016}
            />
            <div className="timeline-panel">
              <JobTitle
                logo={imgLohika}
                company="Lohika"
                title={t('business-card-experience-job-lohika-2-title')}
                location={t('business-card-location-odesa')}
              />
              <div className="timeline-body">
                <JobDescription
                  count={1}
                  i18nKeyPrefix="business-card-experience-job-lohika-2-description"
                />
                <JobResponsibilities
                  i18nKeyPrefix="business-card-experience-job-lohika-2-responsibilities"
                />
                <JobTechnologies
                  keyPrefix="lohika-2"
                  names={[
                    'java', 'spring', 'maven', 'javaScript', 'angular', 'mssql',
                    'oracle', 'svn', 'git', 'intellijIdea', 'hpeAlm', 'jenkins'
                  ]}
                />
              </div>
            </div>
          </li>
          <li className="timeline-inverted">
            <JobPeriod
              fromMonthIndex={9}
              fromYear={2011}
              toMonthIndex={3}
              toYear={2013}
            />
            <div className="timeline-panel">
              <JobTitle
                logo={imgLohika}
                company="Lohika"
                title={t('business-card-experience-job-lohika-1-title')}
                location={t('business-card-location-odesa')}
              />
              <div className="timeline-body">
                <JobDescription
                  count={1}
                  i18nKeyPrefix="business-card-experience-job-lohika-1-description"
                />
                <JobResponsibilities
                  i18nKeyPrefix="business-card-experience-job-lohika-1-responsibilities"
                />
                <JobTechnologies
                  keyPrefix="lohika-1"
                  names={['csharp', 'windowsForms', 'svn', 'visualStudio', 'hpeAlm', 'jenkins']}
                />
              </div>
            </div>
          </li>
          <li>
            <JobPeriod
              fromMonthIndex={2}
              fromYear={2010}
              toMonthIndex={8}
              toYear={2011}
            />
            <div className="timeline-panel">
              <JobTitle
                logo={imgArkaFSS}
                company="ARKA - Finance, Software, Services"
                title={t('business-card-experience-job-arka-title')}
                location={t('business-card-location-odesa')}
              />
              <div className="timeline-body">
                <JobDescription
                  count={1}
                  i18nKeyPrefix="business-card-experience-job-arka-description"
                />
                <JobResponsibilities
                  i18nKeyPrefix="business-card-experience-job-arka-responsibilities"
                />
                <JobTechnologies
                  keyPrefix="arka"
                  names={[
                    'php', 'codeigniter', 'vBulletin', 'oxidEShop', 'smarty', 'javaScript', 'jQuery',
                    'csharp', 'silverlight', 'mysql', 'svn', 'visualStudio', 'netBeans', 'redmine'
                  ]}
                />
              </div>
            </div>
          </li>
        </ul>
      </Container>
    </div>
  )
}

export default withTranslation()(ExperienceMain)
