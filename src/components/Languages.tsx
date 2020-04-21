import * as React from 'react';
import { useTranslation } from 'react-i18next';
import FlagIconFactory from 'react-flag-icon-css';

export default function Languages() {
  const FlagIcon = FlagIconFactory(React, { 'useCssModules': false });
  const { t } = useTranslation();
  return (
    <div id="languages" className="light-component">
      <div className="section-title text-center center">
        <h2>{t('business-card-languages-title')}</h2>
        <hr />
      </div>
      <div className="container">
        <div className="row">
          <div className="language-list col text-center">
            <div className="m-4">
              <FlagIcon className="mx-auto" code="jp" size="4x" />
              <a className="h5 mt-2" target="_blank" href="https://drive.google.com/file/d/1wDeulFdf9-8DBa_k0F8tiRUtdlG7mh3L/view?usp=sharing">JLPT N5</a>
            </div>
            <div className="m-4">
              <FlagIcon className="mx-auto" code="gb" size="4x" />
              <a className="h5 mt-2" target="_blank" href="https://drive.google.com/file/d/1nzM9WQqR7PQpHKDiWvkRYtcNbnRW8-OB/view?usp=sharing">TOEIC 825</a>
            </div>
            <div className="m-4">
              <FlagIcon className="mx-auto" code="ru" size="4x" />
              <span className="h5 mt-2">{t('business-card-languages-native')}</span>
            </div>
            <div className="m-4">
              <FlagIcon className="mx-auto" code="ua" size="4x" />
              <span className="h5 mt-2">{t('business-card-languages-native')}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}