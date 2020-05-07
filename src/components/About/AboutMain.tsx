/// <reference path='./AboutMain.d.ts' />
import i18n from 'i18next'
import * as React from 'react'
import { connect } from 'react-redux'
import { ThunkDispatch } from 'redux-thunk'

import imgAboutMe from '../../assets/images/about_me.jpg'
import img1z0808Badge from '../../assets/images/badges/oracle-1z0-808.png'
import { Locale, AppActions } from '../../store/locale/types'
import { AppState } from '../../store/configureStore'
import ExperienceCalculations, {
  IExperienceCalculations
} from '../../scripts/ExperienceCalculations'

interface AboutMeProps {
  calc: IExperienceCalculations
}

type Props = AboutMeProps & LinkDispatchProps & LinkStateProps

export function AboutMain(props: Props) {
  const generalListItem1Keys = {
    totalExperience: props.calc.totalHumanize(props.locale.code),
    agileExperience: props.calc.agileHumanize(props.locale.code)
  }
  return (
    <div id="about">
      <div className="container">
        <div className="section-title text-center center">
          <h2>{i18n.t('business-card-about-me-title')}</h2>
          <hr />
        </div>
        <div className="row d-flex justify-content-center">
          <div className="about-photo col-md-12 d-flex justify-content-center">
            <img
              className="about-photo--portrait img-thumbnail"
              src={imgAboutMe}
              alt="About me"
            />
            <img
              className="about-photo--badge"
              src={img1z0808Badge}
              alt="Oracle 1Z0-808"
            />
          </div>
          <div className="col-md-8 col-md-offset-2 text-center">
            <div className="about-text">
              <ul className="list-unstyled mt-3">
                <li>
                  {i18n.t(
                    'business-card-about-me-general-list-item-1',
                    generalListItem1Keys
                  )}
                </li>
                <li>{i18n.t('business-card-about-me-general-list-item-2')}</li>
                <li>{i18n.t('business-card-about-me-general-list-item-3')}</li>
                <li>{i18n.t('business-card-about-me-general-list-item-4')}</li>
                <li>{i18n.t('business-card-about-me-general-list-item-5')}</li>
                <li>{i18n.t('business-card-about-me-general-list-item-6')}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

AboutMain.defaultProps = {
  calc: new ExperienceCalculations()
}

interface LinkStateProps {
  locale: Locale
}

interface LinkDispatchProps {
}

const mapStateToProps = (
  state: AppState,
  ownProps: AboutMeProps
): LinkStateProps => ({
  locale: state.locale
})

const mapDispatchToProps = (
  dispatch: ThunkDispatch<any, any, AppActions>,
  ownProps: AboutMeProps
): LinkDispatchProps => ({
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AboutMain)
