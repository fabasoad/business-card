import * as React from 'react'
import { Dropdown } from 'react-bootstrap'
import { useTranslation } from 'react-i18next'
import ThemeContext, { SUPPORTED_THEMES } from '../Contexts/ThemeContext'

export default function ThemeDropDown() {
  const { t } = useTranslation()
  const { theme, setTheme } = React.useContext(ThemeContext)

  return (
    <Dropdown>
      <Dropdown.Toggle bsPrefix="nav-link dropdown-toggle" variant={null}>
        <i className="fa fa-solid fa-circle-half-stroke"></i>
        {t(`themes.${theme}`)}
      </Dropdown.Toggle>
      <Dropdown.Menu>
        {SUPPORTED_THEMES.filter(v => v !== theme).map(v => {
          return (
            <Dropdown.Item
              onClick={() => setTheme(v)}
              bsPrefix="nav-link"
              eventKey={v}
              key={`dropdown-item-theme-${v}`}
            >
              {t(`themes.${v}`)}
            </Dropdown.Item>
          )
        })}
      </Dropdown.Menu>
    </Dropdown>
  )
}
