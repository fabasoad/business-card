import * as React from 'react';
import { useTranslation } from 'react-i18next';

import AboutMe from './AboutMe';
import BackToTopButton from './BackToTopButton';
import EducationMain from './Education/EducationMain';
import ExperienceMain from './Experience/ExperienceMain';
import FooterMain from './Footer/FooterMain';
import Header from './Header';
import MenuMain from './Menu/MenuMain';
import Portfolio from './Portfolio';
import Resume from './Resume';
import Skills from './Skills';

export default function App(props) {
  const { t, i18n } = useTranslation();

  const updateTitle = () => {
    document.title = t("business-card-title");
  };

  const [locale, setLocaleInternal] = React.useState(props.locale);
  const getLocale = () => locale;
  const setLocale = (locale) => {
    setLocaleInternal(locale);
    i18n.changeLanguage(locale.code, updateTitle);
  };

  React.useEffect(updateTitle, []);

  return (
    <div>
      <BackToTopButton />
      <Header />
      <MenuMain getLocale={getLocale} setLocale={setLocale} />
      <AboutMe getLocale={getLocale} />
      <Resume />
      <Skills />
      <ExperienceMain />
      <EducationMain />
      <Portfolio />
      <FooterMain />
    </div>
  );
}