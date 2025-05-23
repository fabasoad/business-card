import * as React from 'react'
import { Nav, Navbar } from 'react-bootstrap'
import { useTranslation } from 'react-i18next'
import LocaleDropDown from './LocaleDropDown'
import MenuItem from './MenuItem'
import ThemeDropDown from './ThemeDropDown'

export default function MenuMain() {
  const { t } = useTranslation()

  const [expanded, setExpanded] = React.useState<boolean>(false)
  const [activeNavLink, setActiveNavLink] = React.useState<string>(document.location.hash)

  document.querySelectorAll('*').forEach((el) => {
    el.addEventListener('click', (e) => {
      const findParent = (el1: HTMLElement, el2: HTMLElement): HTMLElement => {
        if (el1 === el2) {
          return el1
        }
        if (el1.parentElement == null) {
          return null
        }
        return findParent(el1.parentElement, el2)
      }
      const element = e.target as HTMLElement
      const isNotNav = element.getAttribute('id') != 'nav'
      const isNotParentOfNav = findParent(document.getElementById('nav'), element) == null
      const isNavIsNotParent = findParent(element, document.getElementById('nav')) == null

      if (isNotNav && isNotParentOfNav && isNavIsNotParent) {
        setExpanded(false)
      }
    })
  })

  return (
    <div className="affix-top" id="nav">
      <Navbar expanded={expanded} onToggle={setExpanded} collapseOnSelect={true} expand="md" className="navbar-custom">
        <Navbar.Brand href="#header" className="ms-3">{t('author.full-name')}</Navbar.Brand>
        <Navbar.Toggle className="navbar-dark" aria-controls="basic-navbar-nav" />
        <Navbar.Collapse role={undefined} id="basic-navbar-nav">
          <Nav activeKey={activeNavLink}>
            <MenuItem setActiveNavLink={setActiveNavLink} name={'about-me'} />
            <MenuItem setActiveNavLink={setActiveNavLink} name={'skills'} />
            <MenuItem setActiveNavLink={setActiveNavLink} name={'experience'} />
            <MenuItem setActiveNavLink={setActiveNavLink} name={'education'} />
            <MenuItem setActiveNavLink={setActiveNavLink} name={'resume'} />
            <MenuItem setActiveNavLink={setActiveNavLink} name={'contacts'} />
          </Nav>
          <Nav className="me-2">
            <ThemeDropDown />
            <LocaleDropDown />
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  )
}
