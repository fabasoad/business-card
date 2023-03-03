import * as React from 'react'
import { Nav } from 'react-bootstrap'
import { withTranslation, WithTranslation } from 'react-i18next'

interface MenuItemProps {
  name: string
  setActiveNavLink: React.Dispatch<React.SetStateAction<string>>
}

function MenuItem({ name, setActiveNavLink, t }: WithTranslation & MenuItemProps) {
  return (
    <Nav.Link
      onClick={() => setActiveNavLink(`#${name}`)}
      eventKey={`#${name}`}
      href={`#${name}`}
    >
      {t<string>(`business-card-menu-${name}`)}
    </Nav.Link>
  )
}

export default withTranslation()(MenuItem)
