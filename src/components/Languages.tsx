import * as React from 'react';
import { useTranslation } from 'react-i18next';
import FlagIconFactory from 'react-flag-icon-css';

export default function Languages() {
  const FlagIcon = FlagIconFactory(React, { 'useCssModules': false });
  const { t } = useTranslation();
  return (
    <div id="languages">
      <div className="section-title text-center center">
        <h2>{t('business-card-languages-title')}</h2>
        <hr />
      </div>
      <div className="container">
        <div className="row">
          <div className="language-list col text-center">
            <div className="m-4">
              <FlagIcon code="jp" size="5x" />
              <a target="_blank" href="https://drive.google.com/file/d/1wDeulFdf9-8DBa_k0F8tiRUtdlG7mh3L/view?usp=sharing" className="h4 mt-2">JLPT N5</a>
            </div>
            <div className="m-4">
              <FlagIcon code="gb" size="5x" />
              <a target="_blank" href="https://drive.google.com/file/d/1nzM9WQqR7PQpHKDiWvkRYtcNbnRW8-OB/view?usp=sharing" className="h4 mt-2">TOEIC 825</a>
            </div>
            <div className="m-4">
              <FlagIcon code="ru" size="5x" />
              <span className="h4 mt-2">{t('business-card-languages-native')}</span>
            </div>
            <div className="m-4">
              <FlagIcon code="ua" size="5x" />
              <span className="h4 mt-2">{t('business-card-languages-native')}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}