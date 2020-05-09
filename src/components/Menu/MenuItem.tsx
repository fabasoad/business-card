import * as React from 'react'
import { Nav } from 'react-bootstrap'
import { useTranslation } from 'react-i18next'

interface MenuItemProps {
  name: string
  setActiveNavLink: React.Dispatch<React.SetStateAction<string>>
}

export default function MenuItem(props: MenuItemProps) {
  const { t } = useTranslation()
  return (
    <Nav.Link
      onClick={() => props.setActiveNavLink(`#${props.name}`)}
      eventKey={`#${props.name}`}
      href={`#${props.name}`}
    >
      {t(`business-card-menu-${props.name}`)}
    </Nav.Link>
  )
}
