import * as React from 'react'
import FlagIconFactory from 'react-flag-icon-css'
import SupportedLocales from '../../scripts/i18n/SupportedLocales'
import { Dropdown } from 'react-bootstrap'
import { withTranslation, WithTranslation } from 'react-i18next'
import { Locale } from '../../scripts/i18n/types'
import i18nService from '../../scripts/i18n/I18nService'

function LocaleDropDown({ i18n }: WithTranslation) {
  const FlagIcon = FlagIconFactory(React, { 'useCssModules': false })
  return (
    <Dropdown>
      <Dropdown.Toggle bsPrefix="nav-link dropdown-toggle" variant={null} id="btnLocale">
        <FlagIcon code={i18n.language} />
        <span className="locale-title">{SupportedLocales.getOrDefault(i18n.language).title}</span>
      </Dropdown.Toggle>
      <Dropdown.Menu>
        {SupportedLocales.getExceptOf(i18n.language).map((l: Locale) => {
          return (
            <Dropdown.Item
              onClick={() => i18nService.set(l)}
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

export default withTranslation()(LocaleDropDown)
