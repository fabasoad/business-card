import * as React from 'react'
import { Dropdown } from 'react-bootstrap'
import { useTranslation } from 'react-i18next'
import useLocalStorage from 'use-local-storage'

export default function ThemeDropDown() {
  const getSystemTheme = () =>
    window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'

  const { t } = useTranslation()
  const [theme, setTheme] = useLocalStorage('theme', getSystemTheme())
  const switchTheme = (th: string) => {
    setTheme(th)
    document.querySelector('html').setAttribute('data-theme', th)
  }

  const chosenTheme = theme
    ?? document.querySelector('html').getAttribute('data-theme')
    ?? getSystemTheme()
  return (
    <Dropdown>
      <Dropdown.Toggle bsPrefix="nav-link dropdown-toggle" variant={null}>
        <i className="fa fa-solid fa-circle-half-stroke"></i>
        {t(`themes.${chosenTheme}`)}
      </Dropdown.Toggle>
      <Dropdown.Menu>
        {['dark', 'light'].filter(v => v !== chosenTheme).map(v => {
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
