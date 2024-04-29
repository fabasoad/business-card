import * as React from 'react'
import { type WithTranslation, withTranslation } from 'react-i18next'
import AboutMain from './About/AboutMain'
import BackToTopButton from './BackToTopButton'
import Badges from './Badges'
import CertificatesMain from './Certificates/CertificatesMain'
import type { AutoloadProps } from './Controls/AutoloadProps'
import EducationMain from './Education/EducationMain'
import ExperienceMain from './Experience/ExperienceMain'
import FooterMain from './Footer/FooterMain'
import Header from './Header'
import LanguagesMain from './Languages/LanguagesMain'
import MenuMain from './Menu/MenuMain'
import PortfolioMain from './Portfolio/PortfolioMain'
import Resume from './Resume'
import Skills from './Skills'
import StatsMain from './Stats/StatsMain'

const defaultProps = {
  autoload: true
}

export function App(props: WithTranslation & AutoloadProps) {
  const { autoload, i18n } = {...defaultProps, ...props}
  return (
    <div
      className={`font-regular font-${i18n.language === 'jp' ? '' : 'non-'}jp`}
    >
      <BackToTopButton />
      <Header />
      <MenuMain />
      <AboutMain />
      <StatsMain autoload={autoload} />
      <Resume />
      <Skills />
      <ExperienceMain />
      <EducationMain />
      <CertificatesMain />
      <LanguagesMain />
      <PortfolioMain />
      <Badges />
      <FooterMain />
    </div>
  )
}

export default withTranslation()(App)
