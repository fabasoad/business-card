import '@testing-library/jest-dom'
import * as React from 'react'
import Section from '../../../components/Controls/Section'
import StringUtils from '../../../scripts/utils/StringUtils'
import { render } from '@testing-library/react'

jest.mock('../../../components/Controls/SectionTitle')

describe('Section', () => {
  test('should render Section correctly', () => {
    const id = 'test-id'
    const content = StringUtils.random(10)
    const { container } = render(<Section id={id}>{content}</Section>)
    expect(
      container.querySelector(`div#${id}.section > div[data-testid="SectionTitle"]`)
    ).toHaveTextContent(`${id}.title`)
    expect(
      container.querySelector(`div#${id}.section > div.container`)
    ).toHaveTextContent(content)
  })
})
