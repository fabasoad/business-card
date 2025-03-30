import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import * as React from 'react'
import ThemeContext, {
  initTheme,
  updateThemeInHtml,
  updateThemeInLocalStorage
} from './Contexts/ThemeContext'
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
import Resume from './Resume'
import Skills from './Skills'
import StatsMain from './Stats/StatsMain'

export default function App() {
  const [theme, setTheme] = React.useState(initTheme())

  const switchTheme = (v: string) => {
    setTheme(v)
    updateThemeInHtml(v)
    updateThemeInLocalStorage(v)
  }

  return (
    <QueryClientProvider client={new QueryClient()}>
      <ThemeContext.Provider value={{ theme, setTheme: switchTheme }}>
        <div className="font-regular">
          <BackToTopButton />
          <Header />
          <MenuMain />
          <AboutMain />
          <StatsMain />
          <Resume />
          <Skills />
          <ExperienceMain />
          <EducationMain />
          <CertificatesMain />
          <LanguagesMain />
          <Badges />
          <FooterMain />
        </div>
      </ThemeContext.Provider>
    </QueryClientProvider>
  )
}
