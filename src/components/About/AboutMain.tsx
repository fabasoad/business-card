/// <reference path='./AboutMain.d.ts' />
import * as React from 'react'
import { Trans, useTranslation } from 'react-i18next'
import { connect } from 'react-redux'
import { ThunkDispatch } from 'redux-thunk'
import * as imgAboutMe from '../../assets/images/about_me.jpg'
import * as img1z0808Badge from '../../assets/images/badges/oracle-1z0-808.png'
import TotalExperience, {
  ITotalExperience
} from '../../scripts/TotalExperience'
import { AppState } from '../../store/configureStore'
import { AppActions, Locale } from '../../store/locale/types'
import SectionTitle from '../Controls/SectionTitle'

interface AboutMeProps {
  totalExperience?: ITotalExperience
}

type Props = AboutMeProps & LinkDispatchProps & LinkStateProps

export function AboutMain({ totalExperience, locale }: Props) {
  const generalListItem1Keys = {
    totalExperience: totalExperience.humanize(locale.code)
  }
  const { t } = useTranslation()
  return (
    <div id="about">
      <div className="container">
        <SectionTitle>{t('business-card-about-me-title')}</SectionTitle>
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
          <div className="col-md-8 col-md-offset-2">
            <ul className="mt-3">
              <li>
                {t(
                  'business-card-about-me-general-list-item-1',
                  generalListItem1Keys
                )}
              </li>
              <li>{t('business-card-about-me-general-list-item-2')}</li>
              <li>{t('business-card-about-me-general-list-item-3')}</li>
              <li>{t('business-card-about-me-general-list-item-4')}</li>
              <li>{t('business-card-about-me-general-list-item-5')}</li>
              <li>{t('business-card-about-me-general-list-item-6')}</li>
              <li>{t('business-card-about-me-general-list-item-7')}</li>
              <li>{t('business-card-about-me-general-list-item-8')}</li>
              <li>{t('business-card-about-me-general-list-item-9')}</li>
              <li>{t('business-card-about-me-general-list-item-10')}</li>
              <li>{t('business-card-about-me-general-list-item-11')}</li>
              <li>{t('business-card-about-me-general-list-item-12')}</li>
              <li>
                {t('business-card-about-me-general-list-item-13')}
                <ul>
                  <li>{t('business-card-about-me-general-list-item-14')}</li>
                  <li>
                    <Trans i18nKey="business-card-about-me-general-list-item-15">
                      Developed and released <a href="https://github.com/marketplace?type=actions&query=fabasoad+" target="_blank" rel="noreferrer">25+ GitHub Actions to the marketplace</a>
                    </Trans>
                  </li>
                  <li>{t('business-card-about-me-general-list-item-16')}</li>
                </ul>
              </li>
              <li>{t('business-card-about-me-general-list-item-17')}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

AboutMain.defaultProps = {
  totalExperience: new TotalExperience()
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
