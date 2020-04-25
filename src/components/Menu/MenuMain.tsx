import * as React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

import LocaleDropDown from './LocaleDropDown';
import MenuItem from './MenuItem';

export default function MenuMain(props) {
  const { t } = useTranslation();

  const [expanded, setExpanded] = React.useState<boolean>(false);
  const [activeNavLink, setActiveNavLink] = React.useState<string>(document.location.hash);

  document.querySelectorAll('*').forEach(el => {
    el.addEventListener('click', e => {
      const findParent = (element : HTMLElement, elementToCompare : HTMLElement) : HTMLElement => {
        if (element === elementToCompare) {
          return element;
        }
        if (element.parentElement == null) {
          return null;
        }
        return findParent(element.parentElement, elementToCompare);
      };
      const element = e.target as HTMLElement;
      const isNotNav = element.getAttribute('id') != 'nav';
      const isNotParentOfNav = findParent(document.getElementById('nav'), element) == null;
      const isNavIsNotParent = findParent(element, document.getElementById('nav')) == null;
      
      if (isNotNav && isNotParentOfNav && isNavIsNotParent) {
        setExpanded(false);
      }
    });
  });

  return (
    <div className="affix-top" id="nav">
      <Navbar expanded={expanded} onToggle={setExpanded} collapseOnSelect={true} expand="md" className="navbar-custom">
        <Navbar.Brand href="#header">{t('business-card-author-name')}</Navbar.Brand>
        <Navbar.Toggle className="navbar-dark" aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav activeKey={activeNavLink} className="mr-auto">
            <MenuItem setActiveNavLink={setActiveNavLink} name={'about'} />
            <MenuItem setActiveNavLink={setActiveNavLink} name={'skills'} />
            <MenuItem setActiveNavLink={setActiveNavLink} name={'experience'} />
            <MenuItem setActiveNavLink={setActiveNavLink} name={'education'} />
            <MenuItem setActiveNavLink={setActiveNavLink} name={'portfolio'} />
            <MenuItem setActiveNavLink={setActiveNavLink} name={'resume'} />
            <MenuItem setActiveNavLink={setActiveNavLink} name={'contact'} />
          </Nav>
          <Nav>
            <LocaleDropDown setLocale={props.setLocale} getLocale={props.getLocale} />
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}