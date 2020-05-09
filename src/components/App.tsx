import * as React from 'react'
import { connect } from 'react-redux'
import { ThunkDispatch } from 'redux-thunk'

import AboutMain from './About/AboutMain'
import BackToTopButton from './BackToTopButton'
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
import { Locale, AppActions } from '../store/locale/types'
import { AppState } from '../store/configureStore'

interface AppProps {
}

type Props = AppProps & LinkDispatchProps & LinkStateProps

export function App(props: Props) {
  return (
    <div className={`font-regular font-${props.locale.code === 'jp' ? '' : 'non-'}jp`}>
      <BackToTopButton />
      <Header />
      <MenuMain />
      <AboutMain />
      <Resume />
      <Skills />
      <ExperienceMain />
      <EducationMain />
      <CertificatesMain />
      <LanguagesMain />
      <PortfolioMain />
      <FooterMain />
    </div>
  )
}

interface LinkStateProps {
  locale: Locale
}

interface LinkDispatchProps {
}

const mapStateToProps = (
  state: AppState,
  ownProps: AppProps
): LinkStateProps => ({
  locale: state.locale
})

const mapDispatchToProps = (
  dispatch: ThunkDispatch<any, any, AppActions>,
  ownProps: AppProps
): LinkDispatchProps => ({
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
