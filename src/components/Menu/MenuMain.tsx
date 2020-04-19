import * as React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

import LocaleDropDown from './LocaleDropDown';

export default function MenuMain(props) {
  const { t } = useTranslation();

  const [expanded, setExpanded] = React.useState(false);
  const [activeNavLink, setActiveNavLink] = React.useState(document.location.hash);

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
            <Nav.Link onClick={() => setActiveNavLink("#about")} eventKey={"#about"} href="#about">{t('business-card-menu-about-me')}</Nav.Link>
            <Nav.Link onClick={() => setActiveNavLink("#experience")} eventKey={"#experience"} href="#experience">{t('business-card-menu-experience')}</Nav.Link>
            <Nav.Link onClick={() => setActiveNavLink("#education")} eventKey={"#education"} href="#education">{t('business-card-menu-education')}</Nav.Link>
            <Nav.Link onClick={() => setActiveNavLink("#portfolio")} eventKey={"#portfolio"} href="#portfolio">{t('business-card-menu-portfolio')}</Nav.Link>
            <Nav.Link onClick={() => setActiveNavLink("#resume")} eventKey={"#resume"} href="#resume">{t('business-card-menu-resume')}</Nav.Link>
            <Nav.Link onClick={() => setActiveNavLink("#contact")} eventKey={"#contact"} href="#contact">{t('business-card-menu-contact')}</Nav.Link>
          </Nav>
          <Nav>
            <LocaleDropDown setLocale={props.setLocale} getLocale={props.getLocale} />
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}