/// <reference path='./AboutMe.d.ts' />
import * as React from 'react';
import { useTranslation } from 'react-i18next';
import * as moment from 'moment';

import imgAboutMe from "../assets/images/about_me.jpg";

export default function AboutMe(props) {
  const { t } = useTranslation();

  const now : moment.Moment = moment();

  const startWorkDate : moment.Moment = moment('2010-03-01', 'YYYY-MM-DD');
  const duration1 : moment.Duration = moment.duration(now.diff(startWorkDate));

  const agileWorkDate : moment.Moment = moment('2011-10-01', 'YYYY-MM-DD');
  const duration2 : moment.Duration = moment.duration(now.diff(agileWorkDate));

  const generalListItem1Keys = {
    "totalExperience": duration1.locale(props.getLocale().code).humanize(),
    "agileExperience": duration2.locale(props.getLocale().code).humanize()
  };

  return (
    <div id="about">
      <div className="container">
        <div className="section-title text-center center">
          <h2>{t('business-card-about-me-title')}</h2>
          <hr />
        </div>
        <div className="row d-flex justify-content-center">
          <div className="col-md-12 text-center">
            <img className="img-thumbnail" src={imgAboutMe} alt="About me" />
          </div>
          <div className="col-md-8 col-md-offset-2 text-center">
            <div className="about-text">
              <p>{t("business-card-about-me-general-title")}</p>
              <ul className="list-unstyled">
                <li>{t("business-card-about-me-general-list-item-1", generalListItem1Keys)}</li>
                <li>{t("business-card-about-me-general-list-item-2")}</li>
                <li>{t("business-card-about-me-general-list-item-3")}</li>
                <li>{t("business-card-about-me-general-list-item-4")}</li>
                <li>{t("business-card-about-me-general-list-item-5")}</li>
                <li>{t("business-card-about-me-general-list-item-6")}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}