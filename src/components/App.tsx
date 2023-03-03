import * as React from 'react'
import AboutMain from './About/AboutMain'
import BackToTopButton from './BackToTopButton'
import Badges from './Badges'
import CertificatesMain from './Certificates/CertificatesMain'
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
import { AutoloadProps } from './Controls/AutoloadProps'
import { WithTranslation, withTranslation} from 'react-i18next'

export function App({ autoload, i18n }: WithTranslation & AutoloadProps) {
  return (
    <div className={`font-regular font-${i18n.language === 'jp' ? '' : 'non-'}jp`}>
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

App.defaultProps = {
  autoload: true
}

export default withTranslation()(App)
