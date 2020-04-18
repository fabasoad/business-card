import * as React from 'react';
import { Trans, useTranslation } from 'react-i18next';

import AchievementList from './AchievementList';
import ExperienceTimeline from './ExperienceTimeline';

export default function ExperienceMain() {
  const { t } = useTranslation();
  return (
    <div className="text-center" id="experience">
      <div className="container">
        <div className="section-title center">
          <h2>{t("business-card-experience-title")}</h2>
          <hr />
        </div>
        <div className="row">
          <div className="col-lg-12">
            <ul className="timeline">
              <li>
                <ExperienceTimeline
                  fromMonth={t("business-card-month-7")}
                  fromYear={2019}
                  toMonth={t("business-card-month-4")}
                  toYear={2020}
                />
                <div className="timeline-panel">
                  <div className="timeline-heading">
                    <h4>Bitcoin.com</h4>
                    <h4 className="subheading">{t("business-card-experience-job-bitcoin-com-2-title")}</h4>
                  </div>
                  <div className="timeline-body">
                    <h5>{t("business-card-experience-description-title")}</h5>
                    <div>{t("business-card-experience-job-bitcoin-com-2-description")}</div>
                    <h5>{t("business-card-experience-achievements-title")}</h5>
                    <AchievementList count={2} prefix={'business-card-experience-job-bitcoin-com-2-achievements'} />
                    <h5>{t("business-card-experience-technologies-title")}</h5>
                    <p><span className="mr-1 colon-title">{t("business-card-experience-technologies-ci")}</span><span>Travis CI, GitHub Actions, Bitrise</span></p>
                    <p><span className="mr-1 colon-title">{t("business-card-experience-technologies-backend")}</span><span>Java 12, Kafka Streams, Spring Boot</span></p>
                  </div>
                </div>
              </li>
              <li className="timeline-inverted">
                <ExperienceTimeline
                  fromMonth={t("business-card-month-9")}
                  fromYear={2018}
                  toMonth={t("business-card-month-6")}
                  toYear={2019}
                />
                <div className="timeline-panel">
                  <div className="timeline-heading">
                    <h4>Bitcoin.com</h4>
                    <h4 className="subheading">{t("business-card-experience-job-bitcoin-com-1-title")}</h4>
                  </div>
                  <div className="timeline-body">
                    <h5>{t("business-card-experience-area-title")}</h5>
                    <p>{t("business-card-experience-job-bitcoin-com-area")}</p>
                    <h5>{t("business-card-experience-description-title")}</h5>
                    <Trans t={t}>business-card-experience-job-bitcoin-com-1-description</Trans>
                    <h5>{t("business-card-experience-achievements-title")}</h5>
                    <AchievementList count={1} prefix={'business-card-experience-job-bitcoin-com-1-achievements'} />
                    <h5>{t("business-card-experience-technologies-title")}</h5>
                    <p><span className="mr-1 colon-title">{t("business-card-experience-technologies-backend")}</span><span>Maven, Java 8 (Tomcat, Facelets, lombok, JUnit), Python</span></p>
                    <p><span className="mr-1 colon-title">{t("business-card-experience-technologies-frontend")}</span><span>JavaScript (jQuery), Bootstrap 4</span></p>
                    <p><span className="mr-1 colon-title">{t("business-card-experience-technologies-database")}</span><span>MariaDB, Redis</span></p>
                    <p><span className="mr-1 colon-title">{t("business-card-experience-technologies-scm")}</span><span>Git</span></p>
                    <p><span className="mr-1 colon-title">{t("business-card-experience-technologies-ide")}</span><span>Intellij IDEA, VS Code</span></p>
                    <p> <span className="mr-1 colon-title">{t("business-card-experience-technologies-bugtracker")}</span><span>Jira</span></p>
                  </div>
                </div>
              </li>
              <li>
                <ExperienceTimeline
                  fromMonth={t("business-card-month-2")}
                  fromYear={2016}
                  toMonth={t("business-card-month-9")}
                  toYear={2018}
                />
                <div className="timeline-panel">
                  <div className="timeline-heading">
                    <h4>Lohika</h4>
                    <h4 className="subheading">{t("business-card-experience-job-lohika-3-title")}</h4>
                  </div>
                  <div className="timeline-body">
                    <h5>{t("business-card-experience-description-title")}</h5>
                    <p>{t("business-card-experience-job-lohika-3-prysm-description-1")}</p>
                    <p>{t("business-card-experience-job-lohika-3-prysm-description-2")}</p>
                    <h5>{t("business-card-experience-achievements-title")}</h5>
                    <AchievementList count={2} prefix={'business-card-experience-job-lohika-3-prysm-achievements'} />
                    <h5>{t("business-card-experience-technologies-title")}</h5>
                    <p><span className="mr-1 colon-title">{t("business-card-experience-technologies-software-development")}</span><span>C#/.NET (Xamarin Forms, Prism)</span></p>
                    <p><span className="mr-1 colon-title">{t("business-card-experience-technologies-scm")}</span><span>Git</span></p>
                    <p><span className="mr-1 colon-title">{t("business-card-experience-technologies-bugtracker")}</span><span>Jira</span></p>
                    <p><span className="mr-1 colon-title">{t("business-card-experience-technologies-ci")}</span><span>TeamCity</span></p>
                    <p>&nbsp;</p>
                    <p>{t("business-card-experience-job-lohika-3-earnin-description-1")}</p>
                    <p>{t("business-card-experience-job-lohika-3-earnin-description-2")}</p>
                    <h5>{t("business-card-experience-achievements-title")}</h5>
                    <AchievementList count={6} prefix={'business-card-experience-job-lohika-3-earnin-achievements'} />
                    <h5>{t("business-card-experience-technologies-title")}</h5>
                    <p><span className="mr-1 colon-title">{t("business-card-experience-technologies-software-development")}</span><span>C#/.NET (.NET Core, Microsoft DI)</span></p>
                    <p><span className="mr-1 colon-title">{t("business-card-experience-technologies-infrastructure-development")}</span><span>Kubernetes, helm, Docker, fluent-bit, fluentd, Elasticsearch, Kibana, Prometheus, Grafana</span></p>
                    <p><span className="mr-1 colon-title">{t("business-card-experience-technologies-scm")}</span><span>Git</span></p>
                    <p><span className="mr-1 colon-title">{t("business-card-experience-technologies-ide")}</span><span>Visual Studio, VS Code</span></p>
                    <p><span className="mr-1 colon-title">{t("business-card-experience-technologies-bugtracker")}</span><span>GitHub Issues</span></p>
                    <p><span className="mr-1 colon-title">{t("business-card-experience-technologies-ci")}</span><span>Jenkins</span></p>
                    <p>&nbsp;</p>
                    <p>{t("business-card-experience-job-lohika-3-general-description")}</p>
                    <h5>{t("business-card-experience-achievements-title")}</h5>
                    <AchievementList count={3} prefix={'business-card-experience-job-lohika-3-general-achievements'} />
                  </div>
                </div>
              </li>
              <li className="timeline-inverted">
                <ExperienceTimeline
                  fromMonth={t("business-card-month-5")}
                  fromYear={2013}
                  toMonth={t("business-card-month-1")}
                  toYear={2016}
                />
                <div className="timeline-panel">
                  <div className="timeline-heading">
                    <h4>Lohika</h4>
                    <h4 className="subheading">{t("business-card-experience-job-lohika-2-title")}</h4>
                  </div>
                  <div className="timeline-body">
                    <h5>{t("business-card-experience-description-title")}</h5>
                    <p>{t("business-card-experience-job-lohika-2-description")}</p>
                    <h5>{t("business-card-experience-achievements-title")}</h5>
                    <AchievementList count={4} prefix={'business-card-experience-job-lohika-2-achievements'} />
                    <h5>{t("business-card-experience-technologies-title")}</h5>
                    <p><span className="mr-1 colon-title">{t("business-card-experience-technologies-backend")}</span><span>Java (Spring), Maven</span></p>
                    <p><span className="mr-1 colon-title">{t("business-card-experience-technologies-frontend")}</span><span>JavaScript (Angular)</span></p>
                    <p><span className="mr-1 colon-title">{t("business-card-experience-technologies-database")}</span><span>MSSQL, Oracle</span></p>
                    <p><span className="mr-1 colon-title">{t("business-card-experience-technologies-scm")}</span><span>SVN, Git</span></p>
                    <p><span className="mr-1 colon-title">{t("business-card-experience-technologies-ide")}</span><span>Intellij IDEA</span></p>
                    <p><span className="mr-1 colon-title">{t("business-card-experience-technologies-bugtracker")}</span><span>HPE ALM</span></p>
                    <p><span className="mr-1 colon-title">{t("business-card-experience-technologies-ci")}</span><span>Jenkins</span></p>
                  </div>
                </div>
              </li>
              <li>
                <ExperienceTimeline
                  fromMonth={t("business-card-month-10")}
                  fromYear={2011}
                  toMonth={t("business-card-month-4")}
                  toYear={2013}
                />
                <div className="timeline-panel">
                  <div className="timeline-heading">
                    <h4>Lohika</h4>
                    <h4 className="subheading">{t("business-card-experience-job-lohika-1-title")}</h4>
                  </div>
                  <div className="timeline-body">
                    <h5>{t("business-card-experience-description-title")}</h5>
                    <p>{t("business-card-experience-job-lohika-1-description")}</p>
                    <h5>{t("business-card-experience-achievements-title")}</h5>
                    <AchievementList count={3} prefix={'business-card-experience-job-lohika-1-achievements'} />
                    <h5>{t("business-card-experience-technologies-title")}</h5>
                    <p><span className="mr-1 colon-title">{t("business-card-experience-technologies-software-development")}</span><span>C#/.NET (Windows Forms)</span></p>
                    <p><span className="mr-1 colon-title">{t("business-card-experience-technologies-scm")}</span><span>SVN</span></p>
                    <p><span className="mr-1 colon-title">{t("business-card-experience-technologies-ide")}</span><span>Visual Studio</span></p>
                    <p><span className="mr-1 colon-title">{t("business-card-experience-technologies-bugtracker")}</span><span>HPE ALM</span></p>
                    <p><span className="mr-1 colon-title">{t("business-card-experience-technologies-ci")}</span><span>Jenkins</span></p>
                  </div>
                </div>
              </li>
              <li className="timeline-inverted">
                <ExperienceTimeline
                  fromMonth={t("business-card-month-3")}
                  fromYear={2010}
                  toMonth={t("business-card-month-9")}
                  toYear={2011}
                />
                <div className="timeline-panel">
                  <div className="timeline-heading">
                    <h4>ARKA - Finance, Software, Services</h4>
                    <h4 className="subheading">{t("business-card-experience-job-arka-title")}</h4>
                  </div>
                  <div className="timeline-body">
                    <h5>{t("business-card-experience-description-title")}</h5>
                    <p>{t("business-card-experience-job-arka-description")}</p>
                    <h5>{t("business-card-experience-achievements-title")}</h5>
                    <AchievementList count={3} prefix={'business-card-experience-job-arka-achievements'} />
                    <h5>{t("business-card-experience-technologies-title")}</h5>
                    <p><span className="mr-1 colon-title">{t("business-card-experience-technologies-backend")}</span><span>PHP, Codeigniter, vBulletin, OXID eShop, Smarty</span></p>
                    <p><span className="mr-1 colon-title">{t("business-card-experience-technologies-frontend")}</span><span>C#/.NET (Silverlight), JavaScript (jQuery)</span></p>
                    <p><span className="mr-1 colon-title">{t("business-card-experience-technologies-database")}</span><span>MySQL</span></p>
                    <p><span className="mr-1 colon-title">{t("business-card-experience-technologies-scm")}</span><span>SVN</span></p>
                    <p><span className="mr-1 colon-title">{t("business-card-experience-technologies-ide")}</span><span>Visual Studio 2010, NetBeans</span></p>
                    <p><span className="mr-1 colon-title">{t("business-card-experience-technologies-bugtracker")}</span><span>Redmine</span></p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}