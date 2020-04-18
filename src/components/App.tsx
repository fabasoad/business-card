import * as React from 'react';
import { useTranslation } from 'react-i18next';

import AboutMe from './AboutMe';
import BackToTopButton from './BackToTopButton';
import Education from './Education';
import Experience from './Experience';
import Footer from './Footer';
import Header from './Header';
import Menu from './Menu';
import Portfolio from './Portfolio';
import Resume from './Resume';
import Skills from './Skills';

export default function App(props) {
  const { t, i18n } = useTranslation();

  const [locale, setLocaleInternal] = React.useState(props.locale);
  const getLocale = () => locale;
  const setLocale = (locale) => {
    setLocaleInternal(locale);
    i18n.changeLanguage(locale.code);
  };

  return (
    <div>
      <BackToTopButton />
      <Header />
      <Menu getLocale={getLocale} setLocale={setLocale} />
      <AboutMe getLocale={getLocale} />
      <Resume />
      <Skills />
      <Experience />
      <Education />
      <Portfolio />
      <Footer />
    </div>
  );
}