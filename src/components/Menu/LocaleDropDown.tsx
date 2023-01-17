import * as React from 'react'
import { Dropdown } from 'react-bootstrap'
import FlagIconFactory from 'react-flag-icon-css'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { ThunkDispatch } from 'redux-thunk'
import SupportedLocales from '../../scripts/SupportedLocales'
import { AppState } from '../../store/configureStore'
import { startSetLocale } from '../../store/locale/actions'
import { AppActions, Locale } from '../../store/locale/types'

interface LocaleDropDownProps {
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
        <span className="locale-title">{props.locale.title}</span>
      </Dropdown.Toggle>
      <Dropdown.Menu>
        {SupportedLocales.getExceptOf(props.locale.code).map((l: Locale) => {
          return (
            <Dropdown.Item
              onClick={() => handleClick(l)}
              bsPrefix="nav-link"
              eventKey={l.code}
              key={`dropdown-item-${l.code}`}
            >
              <FlagIcon code={l.code} />
              <span className="locale-title">{l.title}</span>
            </Dropdown.Item>
          )
        })}
      </Dropdown.Menu>
    </Dropdown>
  )
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
