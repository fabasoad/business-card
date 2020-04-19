import * as React from 'react';
import { useTranslation } from 'react-i18next';

export default function JobAchievements({ count, i18nKeyPrefix }) {
  const { t } = useTranslation();
  return (
    <>
      <h5>{t("business-card-experience-achievements-title")}</h5>
      {Array(count).fill(i18nKeyPrefix)
        .map((p, i) => `${p}-${i + 1}`)
        .map(key => (<p key={key}>{t(key)}</p>))}
    </>
  );
}