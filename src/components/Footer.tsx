import * as React from 'react';
import { useTranslation } from 'react-i18next';

export default function Footer() {
  const { t, i18n } = useTranslation();
  return (
    <div id="footer">
      <div className="text-center" id="contact">
        <div className="container">
          <div className="section-title center">
            <h2>{t("business-card-contact-title")}</h2>
            <hr />
          </div>
          <div className="row">
            <div className="col">
              <i className="fa fa-map-marker-alt fa-2x"></i>
              <p>{t("business-card-contact-city")}</p>
            </div>
            <div className="col">
              <i className="fa fa-envelope fa-2x"></i>
              <p>fabasoad@gmail.com</p>
            </div>
            <hr />
            <div className="clearfix"></div>
          </div>
          <div className="d-flex justify-content-center">
            <div className="social">
              <ul>
                <li><a className="btn" target="_blank" href="https://twitter.com/fabasoad"><i className="fab fa-twitter fa-2x"></i></a></li>
                <li><a className="btn" target="_blank" href="https://github.com/fabasoad"><i className="fab fa-github fa-2x"></i></a></li>
                <li><a className="btn" target="_blank" href="https://www.linkedin.com/in/yevhenfabizhevskyi/"><i className="fab fa-linkedin fa-2x"></i></a></li>
              </ul>
            </div>
          </div>
          <div className="d-flex justify-content-center">
            <div className="social">
              <ul>
                <li><img src="https://img.shields.io/static/v1?label=made%20by&amp;message=fabasoad&amp;color=2c3e50&amp;style=for-the-badge&amp;logo=github" alt="Made by fabasoad" /></li>
                <li><a target="_blank" href="https://en.cryptobadges.io/donate/145HwyQAcv4vrzUumJhu7nWGAVBysX9jJH"><img src="https://en.cryptobadges.io/badge/micro/145HwyQAcv4vrzUumJhu7nWGAVBysX9jJH" alt="Donate with Bitcoin" /></a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}