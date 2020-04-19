import * as React from 'react';
import { Dropdown } from 'react-bootstrap';
import FlagIconFactory from 'react-flag-icon-css';

import SupportedLocales from '../../scripts/SupportedLocales';

export default function LocaleDropDown(props) {
  const FlagIcon = FlagIconFactory(React, { 'useCssModules': false });

  const handleClick = (selectedLocale) => {
    props.setLocale(SupportedLocales.getOrDefault(selectedLocale));
  };
  
  return (
    <Dropdown>
      <Dropdown.Toggle bsPrefix="nav-link dropdown-toggle" variant={null} id="btnLocale">
        <FlagIcon code={props.getLocale().code} />
        {props.getLocale().title}
      </Dropdown.Toggle>
      <Dropdown.Menu>
         {SupportedLocales.getExceptOf(props.getLocale().code).map(l => {
           return (
            <Dropdown.Item onSelect={handleClick} bsPrefix="nav-link" eventKey={l.code} key={l.code}>
              <FlagIcon code={l.code} />
              {l.title}
            </Dropdown.Item>
           );
         })}
      </Dropdown.Menu>
    </Dropdown>
  );
}