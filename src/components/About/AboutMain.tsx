/// <reference path='./AboutMain.d.ts' />
import { ReactElement } from 'react'
import * as React from 'react'
import { useTranslation } from 'react-i18next'
import * as imgPortraitSm from '../../assets/images/portrait-sm-light-blue.png'
import TotalExperience from '../../scripts/TotalExperience'
import SectionTitle from '../Controls/SectionTitle'
import { Col, Container, Row } from 'react-bootstrap'

export type AboutMeItem = {
  title: string,
  list?: AboutMeItem[]
}

export function renderList(children: AboutMeItem[] | string, level: number = 0): ReactElement<'ul'> | string {
  // For tests
  return typeof children === 'string' ? children : (
    <ul>
      {children.map(({ title, list }: AboutMeItem, index: number) => (
        <li key={`about-me-item-${level}-${index}`}>
          {title}
          {Array.isArray(list) ? renderList(list, level + 1) : <></>}
        </li>
      ))}
    </ul>
  )
}

export default function AboutMain() {
  const { t, i18n } = useTranslation()
  const totalExperience = new TotalExperience()

  const list = t(`about-me.list`, {
    returnObjects: true,
    totalExperience: totalExperience.humanize(i18n.language)
  })

  return (
    <Container id="about-me">
      <SectionTitle>{t('about-me.title')}</SectionTitle>
      <Row className="d-flex justify-content-center">
        <Col md className="about-photo d-flex justify-content-center">
          <img
            className="about-photo--portrait img-thumbnail"
            src={imgPortraitSm}
            alt="About me"
            loading="lazy"
          />
        </Col>
        <Col md={{ span: 8, offset: 2 }}>
          {renderList(list as AboutMeItem[])}
        </Col>
      </Row>
    </Container>
  )
}
