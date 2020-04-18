import * as React from 'react';
import { useTranslation } from 'react-i18next';

export default function AchievementList(props) {
  const { t } = useTranslation();
  return (
    <>
      {Array(props.count).fill(props.prefix)
        .map((p, i) => `${p}-${i + 1}`)
        .map(key => (<p key={key}>{t(key)}</p>))}
    </>
  );
}