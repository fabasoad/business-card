import * as React from 'react'
import SectionTitle from '../Controls/SectionTitle'
import { Container } from 'react-bootstrap'
import { useTranslation } from 'react-i18next'

export type SectionProps = {
  id: string
}

export default function Section({ id, children }: React.PropsWithChildren<SectionProps>) {
  const { t } = useTranslation()
  return (
    <div id={id} className="section">
      <SectionTitle>{t(`${id}.title`)}</SectionTitle>
      <Container>{children}</Container>
    </div>
  )
}
