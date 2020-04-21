import * as React from 'react';
import { useTranslation } from 'react-i18next';
import { v4 as uuidv4 } from 'uuid';

export default function JobTechnologies(props) {
  const { t } = useTranslation();
  return (
    <>
      <h5>{t("business-card-experience-technologies-title")}</h5>
      {Object.keys(props)
        .map(key => (
          <p key={uuidv4()}>
            <span className="mr-1">{t(`business-card-experience-technologies-${key}`)}</span>
            <span>{props[key]}</span>
          </p>
        ))}
    </>
  );
}