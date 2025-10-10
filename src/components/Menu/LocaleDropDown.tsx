import * as React from 'react'
import SupportedLocales from '../../scripts/i18n/SupportedLocales'
import { Dropdown } from 'react-bootstrap'
import { useTranslation } from 'react-i18next'
import type { Locale } from '../../scripts/i18n/types'
import i18nService from '../../scripts/i18n/I18nService'

export default function LocaleDropDown() {
  const { i18n, t } = useTranslation()
  return (
    <Dropdown>
      <Dropdown.Toggle bsPrefix="nav-link dropdown-toggle" variant={null}>
        <i className="fa fa-globe"></i>
        {t(`languages.codes.${SupportedLocales.getOrDefault(i18n.language).code}`)}
      </Dropdown.Toggle>
      <Dropdown.Menu>
        {SupportedLocales.getExceptOf(i18n.language).map((l: Locale) => {
          return (
            <Dropdown.Item
              onClick={() => i18nService.set(l)}
              bsPrefix="nav-link"
              eventKey={l.code}
              key={`dropdown-item-locale-${l.code}`}
            >
              {t(`languages.codes.${l.code}`, { lng: l.code })}
            </Dropdown.Item>
          )
        })}
      </Dropdown.Menu>
    </Dropdown>
  )
}
