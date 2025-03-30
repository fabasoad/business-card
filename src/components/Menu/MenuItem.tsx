import * as React from 'react'
import { Nav } from 'react-bootstrap'
import { useTranslation } from 'react-i18next'

export type MenuItemProps = {
  name: string
  setActiveNavLink: React.Dispatch<React.SetStateAction<string>>
}

export default function MenuItem({ name, setActiveNavLink }: MenuItemProps) {
  const { t } = useTranslation()
  return (
    <Nav.Link
      onClick={() => setActiveNavLink(`#${name}`)}
      eventKey={`#${name}`}
      href={`#${name}`}
    >
      {t(`${name}.title`)}
    </Nav.Link>
  )
}
