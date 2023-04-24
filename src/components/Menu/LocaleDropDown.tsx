import * as React from 'react'
import { BsGlobe } from 'react-icons/bs'
import SupportedLocales from '../../scripts/i18n/SupportedLocales'
import { Dropdown } from 'react-bootstrap'
import { withTranslation, WithTranslation } from 'react-i18next'
import { Locale } from '../../scripts/i18n/types'
import i18nService from '../../scripts/i18n/I18nService'

function LocaleDropDown({ i18n, t }: WithTranslation) {
  return (
    <Dropdown>
      <Dropdown.Toggle bsPrefix="nav-link dropdown-toggle" variant={null} id="btnLocale">
        <BsGlobe className="locale-icon" />
        {t(`business-card-languages-${SupportedLocales.getOrDefault(i18n.language).code}`)}
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
              {t(`business-card-languages-${l.code}`)}
            </Dropdown.Item>
          )
        })}
      </Dropdown.Menu>
    </Dropdown>
  )
}

export default withTranslation()(LocaleDropDown)
