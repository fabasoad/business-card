import * as React from 'react'
import { MenuItemProps } from '../MenuItem'

export default function MenuItem({ name, setActiveNavLink }: MenuItemProps) {
  return (
    <div data-testid={name}>{setActiveNavLink.name}</div>
  )
}
