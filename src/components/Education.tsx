import * as React from 'react';
import { useTranslation } from 'react-i18next';

export default function Education() {
  const { t, i18n } = useTranslation();

  return (
    <div className="text-center" id="education">
      <div className="container">
        <div className="section-title center">
          <h2>{t("business-card-education-title")}</h2>
          <hr />
        </div>
        <div className="row">
          <div className="col-lg-12">
            <ul className="timeline">
              <li>
                <div className="timeline-image">
                  <h4>2010<br />-<br />2009</h4>
                </div>
                <div className="timeline-panel">
                  <div className="timeline-heading">
                    <h4>{t("business-card-education-university-title")}</h4>
                    <h4 className="subheading">{t("business-card-education-university-master")}</h4>
                  </div>
                  <div className="timeline-body">
                    <p>{t("business-card-education-university-speciality")}</p>
                  </div>
                </div>
              </li>
              <li className="timeline-inverted">
                <div className="timeline-image">
                  <h4>2009<br />-<br />2005</h4>
                </div>
                <div className="timeline-panel">
                  <div className="timeline-heading">
                    <h4>{t("business-card-education-university-title")}</h4>
                    <h4 className="subheading">{t("business-card-education-university-bachelor")}</h4>
                  </div>
                  <div className="timeline-body">
                    <p>{t("business-card-education-university-speciality")}</p>
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