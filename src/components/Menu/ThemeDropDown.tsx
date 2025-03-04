import * as React from 'react'
import { Dropdown } from 'react-bootstrap'
import { useTranslation } from 'react-i18next'
import useLocalStorage from 'use-local-storage'

export default function ThemeDropDown() {
  const { t } = useTranslation()
  const [theme, setTheme] = useLocalStorage(
    'theme',
    window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
  )
  const switchTheme = (theme: string) => {
    setTheme(theme)
    document.querySelector('html').setAttribute('data-theme', theme)
  }

  return (
    <Dropdown>
      <Dropdown.Toggle bsPrefix="nav-link dropdown-toggle" variant={null}>
        <i className="fa fa-solid fa-circle-half-stroke"></i>
        {t(`themes.${theme}`)}
      </Dropdown.Toggle>
      <Dropdown.Menu>
        {['dark', 'light'].filter(v => v !== theme).map(v => {
          return (
            <Dropdown.Item
              onClick={() => switchTheme(v)}
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
