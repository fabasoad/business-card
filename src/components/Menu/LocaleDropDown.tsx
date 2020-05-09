import * as React from 'react'
import { Dropdown } from 'react-bootstrap'
import FlagIconFactory from 'react-flag-icon-css'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { ThunkDispatch } from 'redux-thunk'

import SupportedLocales from '../../scripts/SupportedLocales'
import { Locale, AppActions } from '../../store/locale/types'
import { AppState } from '../../store/configureStore'
import { startSetLocale } from '../../store/locale/actions'

interface LocaleDropDownProps {
  getLocalesExceptOf: (code: string) => Locale[]
}

type Props = LocaleDropDownProps & LinkDispatchProps & LinkStateProps

export function LocaleDropDown(props: Props) {
  const handleClick = (locale: Locale): void => {
    props.startSetLocale(locale)
  }
  const FlagIcon = FlagIconFactory(React, { 'useCssModules': false })
  return (
    <Dropdown>
      <Dropdown.Toggle bsPrefix="nav-link dropdown-toggle" variant={null} id="btnLocale">
        <FlagIcon code={props.locale.code} />
        {props.locale.title}
      </Dropdown.Toggle>
      <Dropdown.Menu>
        {props.getLocalesExceptOf(props.locale.code).map((l) => {
          return (
            <Dropdown.Item onSelect={() => handleClick(l)} bsPrefix="nav-link" eventKey={l.code} key={l.code}>
              <FlagIcon code={l.code} />
              {l.title}
            </Dropdown.Item>
          )
        })}
      </Dropdown.Menu>
    </Dropdown>
  )
}

LocaleDropDown.defaultProps = {
  getLocalesExceptOf: SupportedLocales.getExceptOf
}

interface LinkStateProps {
  locale: Locale
}

interface LinkDispatchProps {
  startSetLocale: (locale: Locale) => void
}

const mapStateToProps = (
  state: AppState,
  ownProps: LocaleDropDownProps
): LinkStateProps => ({
  locale: state.locale
})

const mapDispatchToProps = (
  dispatch: ThunkDispatch<any, any, AppActions>,
  ownProps: LocaleDropDownProps
): LinkDispatchProps => ({
  startSetLocale: bindActionCreators(startSetLocale, dispatch)
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LocaleDropDown)
