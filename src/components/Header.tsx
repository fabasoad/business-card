import * as React from 'react';
import { Trans, useTranslation } from 'react-i18next';

export default function Header() {
  const { t } = useTranslation();
  return (
    <header className="header" id="header">
      <div className="header__text">
        <h1><Trans t={t}>business-card-header-title</Trans></h1>
        <p>{t("business-card-header-occupation")}</p>
        <a className="btn btn-primary btn-lg" href="#about">{t("business-card-header-about-me")}</a>
        <a className="btn btn-primary btn-lg" href="#portfolio">{t("business-card-header-portfolio")}</a>
      </div>
    </header>
  );
}