import * as React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { type WithTranslation, withTranslation } from 'react-i18next'
import SectionTitle from '../Controls/SectionTitle'
import LanguageLinkItem from './LanguageLinkItem'
import LanguageTextItem from './LanguageTextItem'

function LanguagesMain({ t }: WithTranslation) {
  return (
    <div id="languages" className="light-component">
      <SectionTitle>{t('business-card-languages-title')}</SectionTitle>
      <Container>
        <Row>
          <Col className="language-list text-center">
            <LanguageLinkItem
              code="jp"
              text="JLPT N4"
              url="https://drive.google.com/file/d/1QHRRPXiYuOKMmNPeqRf6GQQtyGdBkhQ5/view?usp=sharing"
            />
            <LanguageLinkItem
              code="gb"
              text="TOEIC 825"
              url="https://drive.google.com/file/d/1nzM9WQqR7PQpHKDiWvkRYtcNbnRW8-OB/view?usp=sharing"
            />
            <LanguageTextItem
              code="ua"
              text={t('business-card-languages-native')}
            />
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default withTranslation()(LanguagesMain)
