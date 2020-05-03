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
}

interface LocaleDropDownState {  
}

type Props = LocaleDropDownProps & LinkDispatchProps & LinkStateProps

export class LocaleDropDown extends React.Component<Props, LocaleDropDownState> {

  handleClick(locale: Locale) {
    this.props.startSetLocale(locale)
  }
  
  render() {
    const FlagIcon = FlagIconFactory(React, { 'useCssModules': false })
    return (
      <Dropdown>
        <Dropdown.Toggle bsPrefix="nav-link dropdown-toggle" variant={null} id="btnLocale">
          <FlagIcon code={this.props.locale.code} />
          {this.props.locale.title}
        </Dropdown.Toggle>
        <Dropdown.Menu>
          {SupportedLocales.getExceptOf(this.props.locale.code).map(l => {
            return (
              <Dropdown.Item onSelect={() => this.handleClick(l)} bsPrefix="nav-link" eventKey={l.code} key={l.code}>
                <FlagIcon code={l.code} />
                {l.title}
              </Dropdown.Item>
            )
          })}
        </Dropdown.Menu>
      </Dropdown>
    )
  }
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