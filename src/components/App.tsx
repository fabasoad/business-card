import * as React from 'react';
import { useTranslation } from 'react-i18next';

import AboutMe from './AboutMe';
import BackToTopButton from './BackToTopButton';
import EducationMain from './Education/EducationMain';
import ExperienceMain from './Experience/ExperienceMain';
import FooterMain from './Footer/FooterMain';
import Header from './Header';
import Languages from './Languages';
import MenuMain from './Menu/MenuMain';
import Portfolio from './Portfolio';
import Resume from './Resume';
import Skills from './Skills';

import { Locale } from '../scripts/SupportedLocales';

export default function App(props) {
  const { t, i18n } = useTranslation();

  const onLanguageChange = () => {
    document.title = t("business-card-title");
    const [classFrom, classTo] = i18n.language === 'jp'
      ? ['font-non-jp', 'font-jp'] : ['font-jp', 'font-non-jp'];
    for (const el of document.getElementsByClassName(classFrom)) {
      el.classList.remove(classFrom);
      el.classList.add(classTo);
    }
  };

  const [locale, setLocaleInternal] = React.useState<Locale>(props.locale);
  const getLocale : () => Locale = () => locale;
  const setLocale = (locale : Locale) => {
    setLocaleInternal(locale);
    i18n.changeLanguage(locale.code, onLanguageChange);
  };

  React.useEffect(onLanguageChange, []);

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
      <Languages />
      <Portfolio />
      <FooterMain />
    </div>
  );
}