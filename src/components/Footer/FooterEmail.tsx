import * as React from 'react';
import { useTranslation } from 'react-i18next';

export default function FooterEmail() {
  const { t } = useTranslation();
  return (
    <div className="col">
      <i className="fa fa-envelope fa-2x"></i>
      <p>fabasoad@gmail.com</p>
    </div>
  );
}