import * as React from 'react'
import { useTranslation } from 'react-i18next'
import { Container } from 'react-bootstrap'

import JobDescription from './JobDescription'
import JobPeriod from './JobPeriod'
import JobTechnologies from './JobTechnologies'
import JobTitle from './JobTitle'
import JobResponsibilities from './JobResponsibilities';

export default function ExperienceMain() {
  const { t } = useTranslation()
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
              fromMonth={10}
              fromYear={2021}
            />
            <div className="timeline-panel">
              <JobTitle
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
                  keys={['docker', 'gitlab', 'gitlabCi', 'typeScript', 'react', 'maven', 'java', 'quarkus', 'mongodb', 'intellijIdea', 'concourseCI', 'kubernetes', 'terraform', 'aws', 'gitHubActions']}
                />
              </div>
            </div>
          </li>
          <li>
            <JobPeriod
              fromMonth={6}
              fromYear={2021}
              toMonth={9}
              toYear={2021}
            />
            <div className="timeline-panel">
              <JobTitle
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
                  keys={['docker', 'gitlab', 'gitlabCi', 'typeScript', 'react', 'maven', 'java', 'quarkus', 'mongodb', 'vsCode', 'intellijIdea', 'concourseCI', 'kubernetes', 'helm', 'prometheus', 'grafana', 'terraform', 'aws']}
                />
              </div>
            </div>
          </li>
          <li className="timeline-inverted">
            <JobPeriod
              fromMonth={9}
              fromYear={2020}
              toMonth={5}
              toYear={2021}
            />
            <div className="timeline-panel">
              <JobTitle
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
                  keys={['docker', 'gitlab', 'gitlabCi', 'typeScript', 'react', 'maven', 'java', 'quarkus', 'mongodb', 'vsCode', 'intellijIdea', 'concourseCI', 'kubernetes', 'helm', 'prometheus', 'grafana']}
                />
              </div>
            </div>
          </li>
          <li>
            <JobPeriod
              fromMonth={5}
              fromYear={2020}
              toMonth={8}
              toYear={2020}
            />
            <div className="timeline-panel">
              <JobTitle
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
                  keys={['docker', 'gitlab', 'gitlabCi', 'typeScript', 'react', 'maven', 'java', 'quarkus', 'mongodb', 'vsCode', 'intellijIdea']}
                />
              </div>
            </div>
          </li>
          <li className="timeline-inverted">
            <JobPeriod
              fromMonth={7}
              fromYear={2019}
              toMonth={4}
              toYear={2020}
            />
            <div className="timeline-panel">
              <JobTitle
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
                  keys={['docker', 'travis', 'gitHubActions', 'bitrise', 'java', 'kafka', 'spring', 'intellijIdea']}
                />
              </div>
            </div>
          </li>
          <li>
            <JobPeriod
              fromMonth={9}
              fromYear={2018}
              toMonth={6}
              toYear={2019}
            />
            <div className="timeline-panel">
              <JobTitle
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
                  keys={[
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
              fromMonth={2}
              fromYear={2016}
              toMonth={9}
              toYear={2018}
            />
            <div className="timeline-panel">
              <JobTitle
                company="Lohika"
                title={t('business-card-experience-job-lohika-3-title')}
                location={t('business-card-location-odessa')}
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
                  keys={[
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
              fromMonth={5}
              fromYear={2013}
              toMonth={1}
              toYear={2016}
            />
            <div className="timeline-panel">
              <JobTitle
                company="Lohika"
                title={t('business-card-experience-job-lohika-2-title')}
                location={t('business-card-location-odessa')}
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
                  keys={[
                    'java', 'spring', 'maven', 'javaScript', 'angular', 'mssql',
                    'oracle', 'svn', 'git', 'intellijIdea', 'hpeAlm', 'jenkins'
                  ]}
                />
              </div>
            </div>
          </li>
          <li className="timeline-inverted">
            <JobPeriod
              fromMonth={10}
              fromYear={2011}
              toMonth={4}
              toYear={2013}
            />
            <div className="timeline-panel">
              <JobTitle
                company="Lohika"
                title={t('business-card-experience-job-lohika-1-title')}
                location={t('business-card-location-odessa')}
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
                  keys={['csharp', 'windowsForms', 'svn', 'visualStudio', 'hpeAlm', 'jenkins']}
                />
              </div>
            </div>
          </li>
          <li>
            <JobPeriod
              fromMonth={3}
              fromYear={2010}
              toMonth={9}
              toYear={2011}
            />
            <div className="timeline-panel">
              <JobTitle
                company="ARKA - Finance, Software, Services"
                title={t('business-card-experience-job-arka-title')}
                location={t('business-card-location-odessa')}
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
                  keys={[
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
