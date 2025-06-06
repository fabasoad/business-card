import * as React from 'react'
import Section from '../Controls/Section'
import LanguageLinkItem from './LanguageLinkItem'
import LanguageTextItem from './LanguageTextItem'
import { Col, Row } from 'react-bootstrap'
import { useTranslation } from 'react-i18next'

export default function LanguagesMain() {
  const { t } = useTranslation()
  return (
    <Section id="languages">
      <Row>
        <Col className="language-list text-center">
          <LanguageLinkItem code="jp" text="JLPT N4" url="https://drive.google.com/file/d/1QHRRPXiYuOKMmNPeqRf6GQQtyGdBkhQ5/view?usp=sharing" />
          <LanguageTextItem code="gb" text={t('languages.fluent')} />
          <LanguageTextItem code="ua" text={t('languages.native')} />
        </Col>
      </Row>
    </Section>
  )
}
