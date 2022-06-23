/// <reference types="jest" />
import * as React from 'react'
import { shallow } from 'enzyme'
import { Locale } from '../../../store/locale/types'
import SupportedLocales from '../../../scripts/SupportedLocales'
import { AboutMain } from '../../../components/About/AboutMain'
import { useTranslation } from '../../__mocks__/react-i18next'

let tMock

beforeAll(() => {
  tMock = useTranslation().t
})

test('should render AboutMain correctly', () => {
  const totalHumanize = (code: string) => `total-${code}`
  const humanizeSpy = jest.fn(totalHumanize)

  const locale: Locale = SupportedLocales.default
  const wrapper = shallow(<AboutMain locale={locale} totalExperience={{
    humanize: humanizeSpy
  }} />)

  expect(wrapper).toMatchSnapshot()

  expect(humanizeSpy).toHaveBeenCalledTimes(1)
  expect(humanizeSpy).toHaveBeenCalledWith(locale.code)

  expect(tMock).toBeCalledTimes(17)
  expect(tMock).toHaveBeenCalledWith(
    expect.stringMatching(/^business-card-about-me-title$/)
  )
  expect(tMock).toHaveBeenCalledWith(
    expect.stringMatching(/^business-card-about-me-general-list-item-1$/),
    expect.objectContaining({
      totalExperience: totalHumanize(locale.code)
    })
  )
  for (let i = 2; i <= 6; i++) {
    expect(tMock).toHaveBeenCalledWith(
      expect.stringMatching(
        new RegExp(`^business-card-about-me-general-list-item-${i}$`)
      )
    )
  }
})
