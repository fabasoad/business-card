import * as React from 'react';
import { useTranslation } from 'react-i18next';

import LocaleDropDown from './LocaleDropDown';

export default function Menu(props) {
  const { t, i18n } = useTranslation();

  return (
    <div className="affix-top" id="nav">
      <nav className="navbar navbar-expand-md navbar-custom">
        <a className="navbar-brand" href="#header">{t('business-card-author-name')}</a>
        <button className="navbar-toggler" id="dfnlas1u0" type="button" data-toggle="collapse" data-target=".navbar-container" aria-expanded="false"><i className="fa fa-bars"></i></button>
        <div
          className="navbar-container collapse navbar-collapse justify-content-between" aria-labelledby="dfnlas1u0">
          <ul className="navbar-nav">
            <li className="nav-item" data-toggle="collapse" data-target=".navbar-container.show">
              <a className="nav-link" href="#about">{t('business-card-menu-about-me')}</a>
            </li>
            <li className="nav-item" data-toggle="collapse" data-target=".navbar-container.show">
              <a className="nav-link" href="#experience">{t('business-card-menu-experience')}</a>
            </li>
            <li className="nav-item" data-toggle="collapse" data-target=".navbar-container.show">
              <a className="nav-link" href="#education">{t('business-card-menu-education')}</a>
            </li>
            <li className="nav-item" data-toggle="collapse" data-target=".navbar-container.show">
              <a className="nav-link" href="#portfolio">{t('business-card-menu-portfolio')}</a>
            </li>
            <li className="nav-item" data-toggle="collapse" data-target=".navbar-container.show">
              <a className="nav-link" href="#resume">{t('business-card-menu-resume')}</a>
            </li>
            <li className="nav-item" data-toggle="collapse" data-target=".navbar-container.show">
              <a className="nav-link" href="#contact">{t('business-card-menu-contact')}</a>
            </li>
          </ul>
          <ul className="navbar-nav">
            <li className="nav-item dropdown">
              <LocaleDropDown setLocale={props.setLocale} getLocale={props.getLocale} />
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}