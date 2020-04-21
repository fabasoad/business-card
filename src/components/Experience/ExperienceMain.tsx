import * as React from 'react';
import { Trans, useTranslation } from 'react-i18next';

import JobAchievements from './JobAchievements';
import JobDescription from './JobDescription';
import JobPeriod from './JobPeriod';
import JobTechnologies from './JobTechnologies';
import JobTitle from './JobTitle';

export default function ExperienceMain() {
  const { t } = useTranslation();
  return (
    <div id="experience" className="light-component">
      <div className="container">
        <div className="section-title text-center">
          <h2>{t("business-card-experience-title")}</h2>
          <hr />
        </div>
        <ul className="timeline">
          <li>
            <JobPeriod
              fromMonth={t("business-card-month-7")}
              fromYear={2019}
              toMonth={t("business-card-month-4")}
              toYear={2020}
            />
            <div className="timeline-panel">
              <JobTitle
                company={"Bitcoin.com"}
                title={t("business-card-experience-job-bitcoin-com-2-title")}
              />
              <div className="timeline-body">
                <JobDescription
                  count={1}
                  i18nKeyPrefix={"business-card-experience-job-bitcoin-com-2-description"}
                />
                <JobAchievements count={2} i18nKeyPrefix={'business-card-experience-job-bitcoin-com-2-achievements'} />
                <JobTechnologies
                  ci={'Travis CI, GitHub Actions, Bitrise'}
                  backend={'Java 12, Kafka Streams, Spring Boot'}
                />
              </div>
            </div>
          </li>
          <li className="timeline-inverted">
            <JobPeriod
              fromMonth={t("business-card-month-9")}
              fromYear={2018}
              toMonth={t("business-card-month-6")}
              toYear={2019}
            />
            <div className="timeline-panel">
              <JobTitle
                company={"Bitcoin.com"}
                title={t("business-card-experience-job-bitcoin-com-1-title")}
              />
              <div className="timeline-body">
                <h5>{t("business-card-experience-area-title")}</h5>
                <p>{t("business-card-experience-job-bitcoin-com-area")}</p>
                <JobDescription
                  count={1}
                  i18nKeyPrefix={"business-card-experience-job-bitcoin-com-1-description"}
                />
                <JobAchievements count={1} i18nKeyPrefix={'business-card-experience-job-bitcoin-com-1-achievements'} />
                <JobTechnologies
                  backend={'Maven, Java 8 (Tomcat, Facelets, lombok, JUnit), Python'}
                  frontend={'JavaScript, jQuery, Bootstrap'}
                  database={'MariaDB, Redis'}
                  scm={'Git'}
                  ide={'Intellij IDEA, VS Code'}
                  bugtracker={'Jira'}
                />
              </div>
            </div>
          </li>
          <li>
            <JobPeriod
              fromMonth={t("business-card-month-2")}
              fromYear={2016}
              toMonth={t("business-card-month-9")}
              toYear={2018}
            />
            <div className="timeline-panel">
              <JobTitle
                company={"Lohika"}
                title={t("business-card-experience-job-lohika-3-title")}
              />
              <div className="timeline-body">
                <JobDescription
                  count={2}
                  i18nKeyPrefix={"business-card-experience-job-lohika-3-prysm-description"}
                />
                <JobAchievements count={2} i18nKeyPrefix={'business-card-experience-job-lohika-3-prysm-achievements'} />
                <JobTechnologies
                  software-development={'C#/.NET (Xamarin Forms, Prism)'}
                  scm={'Git'}
                  bugtracker={'Jira'}
                  ci={'TeamCity'}
                />
                <p>&nbsp;</p>
                <JobDescription
                  count={2}
                  i18nKeyPrefix={"business-card-experience-job-lohika-3-earnin-description"}
                  withTitle={false}
                />
                <JobAchievements count={6} i18nKeyPrefix={'business-card-experience-job-lohika-3-earnin-achievements'} />
                <JobTechnologies
                  software-development={'C#/.NET (.NET Core, Microsoft DI)'}
                  infrastructure-development={'Kubernetes, helm, Docker, fluent-bit, fluentd, Elasticsearch, Kibana, Prometheus, Grafana'}
                  scm={'Git'}
                  ide={'Visual Studio, VS Code'}
                  bugtracker={'GitHub Issues'}
                  ci={'Jenkins'}
                />
                <p>&nbsp;</p>
                <JobDescription
                  count={1}
                  i18nKeyPrefix={"business-card-experience-job-lohika-3-general-description"}
                  withTitle={false}
                />
                <JobAchievements count={3} i18nKeyPrefix={'business-card-experience-job-lohika-3-general-achievements'} />
              </div>
            </div>
          </li>
          <li className="timeline-inverted">
            <JobPeriod
              fromMonth={t("business-card-month-5")}
              fromYear={2013}
              toMonth={t("business-card-month-1")}
              toYear={2016}
            />
            <div className="timeline-panel">
              <JobTitle
                company={"Lohika"}
                title={t("business-card-experience-job-lohika-2-title")}
              />
              <div className="timeline-body">
                <JobDescription
                  count={1}
                  i18nKeyPrefix={"business-card-experience-job-lohika-2-description"}
                />
                <JobAchievements count={4} i18nKeyPrefix={'business-card-experience-job-lohika-2-achievements'} />
                <JobTechnologies
                  backend={'Java (Spring), Maven'}
                  frontend={'JavaScript, Angular'}
                  database={'MSSQL, Oracle'}
                  scm={'SVN, Git'}
                  ide={'Intellij IDEA'}
                  bugtracker={'HPE ALM'}
                  ci={'Jenkins'}
                />
              </div>
            </div>
          </li>
          <li>
            <JobPeriod
              fromMonth={t("business-card-month-10")}
              fromYear={2011}
              toMonth={t("business-card-month-4")}
              toYear={2013}
            />
            <div className="timeline-panel">
              <JobTitle
                company={"Lohika"}
                title={t("business-card-experience-job-lohika-1-title")}
              />
              <div className="timeline-body">
                <JobDescription
                  count={1}
                  i18nKeyPrefix={"business-card-experience-job-lohika-1-description"}
                />
                <JobAchievements count={3} i18nKeyPrefix={'business-card-experience-job-lohika-1-achievements'} />
                <JobTechnologies
                  software-development={'C#/.NET (Windows Forms)'}
                  scm={'SVN'}
                  ide={'Visual Studio'}
                  bugtracker={'HPE ALM'}
                  ci={'Jenkins'}
                />
              </div>
            </div>
          </li>
          <li className="timeline-inverted">
            <JobPeriod
              fromMonth={t("business-card-month-3")}
              fromYear={2010}
              toMonth={t("business-card-month-9")}
              toYear={2011}
            />
            <div className="timeline-panel">
              <JobTitle
                company={"ARKA - Finance, Software, Services"}
                title={t("business-card-experience-job-arka-title")}
              />
              <div className="timeline-body">
                <JobDescription
                  count={1}
                  i18nKeyPrefix={"business-card-experience-job-arka-description"}
                />
                <JobAchievements count={3} i18nKeyPrefix={'business-card-experience-job-arka-achievements'} />
                <JobTechnologies
                  backend={'PHP, Codeigniter, vBulletin, OXID eShop, Smarty'}
                  frontend={'JavaScript, jQuery'}
                  software-development={'C#/.NET (Silverlight)'}
                  database={'MySQL'}
                  scm={'SVN'}
                  ide={'Visual Studio, NetBeans'}
                  bugtracker={'Redmine'}
                />
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}