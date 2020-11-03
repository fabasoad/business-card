import * as React from 'react'
import { useTranslation } from 'react-i18next'

import JobAchievements from './JobAchievements'
import JobDescription from './JobDescription'
import JobPeriod from './JobPeriod'
import JobTechnologies from './JobTechnologies'
import JobTitle from './JobTitle'

export default function ExperienceMain() {
  const { t } = useTranslation()
  return (
    <div id="experience" className="light-component">
      <div className="container">
        <div className="section-title text-center">
          <h2>{t('business-card-experience-title')}</h2>
          <hr />
        </div>
        <ul className="timeline">
          <li className="timeline-inverted">
            <JobPeriod
              fromMonth={9}
              fromYear={2020}
            />
            <div className="timeline-panel">
              <JobTitle
                company="TRI-AD"
                title={t('business-card-experience-job-tri-ad-2-title')}
              />
              <div className="timeline-body">
                <JobDescription
                  count={1}
                  i18nKeyPrefix="business-card-experience-job-tri-ad-2-description"
                />
                <JobTechnologies
                  keys={['concourseCI', 'kubernetes', 'prometheus', 'grafana']}
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
                company="TRI-AD"
                title={t('business-card-experience-job-tri-ad-1-title')}
              />
              <div className="timeline-body">
                <JobDescription
                  count={1}
                  i18nKeyPrefix="business-card-experience-job-tri-ad-1-description"
                />
                <JobTechnologies
                  keys={['docker', 'gitlab', 'gitlabCi', 'typeScript', 'react', 'maven', 'java', 'quarkus', 'vsCode', 'intellijIdea']}
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
              />
              <div className="timeline-body">
                <JobDescription
                  count={1}
                  i18nKeyPrefix="business-card-experience-job-bitcoin-com-2-description"
                />
                <JobAchievements
                  count={2}
                  i18nKeyPrefix="business-card-experience-job-bitcoin-com-2-achievements"
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
              />
              <div className="timeline-body">
                <JobDescription
                  count={1}
                  i18nKeyPrefix="business-card-experience-job-bitcoin-com-1-description"
                />
                <JobAchievements
                  count={1}
                  i18nKeyPrefix="business-card-experience-job-bitcoin-com-1-achievements"
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
              />
              <div className="timeline-body">
                <JobDescription
                  count={2}
                  i18nKeyPrefix="business-card-experience-job-lohika-3-prysm-description"
                />
                <JobAchievements
                  count={2}
                  i18nKeyPrefix="business-card-experience-job-lohika-3-prysm-achievements"
                />
                <JobTechnologies
                  keys={['csharp', 'xamarin', 'prism', 'git', 'jira', 'teamCity', 'visualStudio']}
                />
                <p>&nbsp;</p>
                <JobDescription
                  count={2}
                  i18nKeyPrefix="business-card-experience-job-lohika-3-earnin-description"
                  withTitle={false}
                />
                <JobAchievements
                  count={6}
                  i18nKeyPrefix="business-card-experience-job-lohika-3-earnin-achievements"
                />
                <JobTechnologies
                  keys={[
                    'csharp', 'dotNetCore', 'kubernetes', 'helm', 'docker',
                    'elasticsearch', 'jenkins', 'kibana', 'fluentBit', 'fluentD',
                    'git', 'gitHub', 'prometheus', 'visualStudio', 'grafana'
                  ]}
                />
                <p>&nbsp;</p>
                <JobDescription
                  count={1}
                  i18nKeyPrefix="business-card-experience-job-lohika-3-general-description"
                  withTitle={false}
                />
                <JobAchievements
                  count={3}
                  i18nKeyPrefix="business-card-experience-job-lohika-3-general-achievements"
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
              />
              <div className="timeline-body">
                <JobDescription
                  count={1}
                  i18nKeyPrefix="business-card-experience-job-lohika-2-description"
                />
                <JobAchievements
                  count={4}
                  i18nKeyPrefix="business-card-experience-job-lohika-2-achievements"
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
              />
              <div className="timeline-body">
                <JobDescription
                  count={1}
                  i18nKeyPrefix="business-card-experience-job-lohika-1-description"
                />
                <JobAchievements
                  count={3}
                  i18nKeyPrefix="business-card-experience-job-lohika-1-achievements"
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
              />
              <div className="timeline-body">
                <JobDescription
                  count={1}
                  i18nKeyPrefix="business-card-experience-job-arka-description"
                />
                <JobAchievements
                  count={3}
                  i18nKeyPrefix="business-card-experience-job-arka-achievements"
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
      </div>
    </div>
  )
}
