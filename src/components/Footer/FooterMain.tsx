import * as React from 'react';
import { useTranslation } from 'react-i18next';

import FooterEmail from './FooterEmail';
import FooterExtra from './FooterExtra';
import FooterInfo from './FooterInfo';
import FooterLocation from './FooterLocation';
import FooterSocial from './FooterSocial';

export default function FooterMain() {
  const { t } = useTranslation();
  return (
    <div id="footer">
      <div className="text-center" id="contact">
        <div className="container">
          <div className="section-title center">
            <h2>{t("business-card-contact-title")}</h2>
            <hr />
          </div>
          <div className="row">
            <FooterLocation />
            <FooterEmail />
            <hr />
            <div className="clearfix"></div>
          </div>
          <div className="d-flex justify-content-center">
            <FooterSocial />
          </div>
          <div className="d-flex justify-content-center">
            <FooterInfo />
          </div>
          <div className="d-flex justify-content-center">
            <FooterExtra />
          </div>
        </div>
      </div>
    </div>
  );
}