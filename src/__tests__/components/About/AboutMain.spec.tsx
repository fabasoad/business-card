/// <reference types="jest" />
import * as React from 'react'
import { shallow } from 'enzyme'
import i18next from '../../__mocks__/i18next'
import { Locale } from '../../../store/locale/types'
import SupportedLocales from '../../../scripts/SupportedLocales'
import { AboutMain } from '../../../components/About/AboutMain'

test('should render AboutMain correctly', () => {
  const totalHumanize = (code: string) => `total-${code}`
  const totalHumanizeSpy = jest.fn(totalHumanize)

  const locale: Locale = SupportedLocales.default
  const wrapper = shallow(<AboutMain locale={locale} calc={{
    totalHumanize: totalHumanizeSpy
  }} />)

  expect(wrapper).toMatchSnapshot()

  expect(totalHumanizeSpy).toHaveBeenCalledTimes(1)
  expect(totalHumanizeSpy).toHaveBeenCalledWith(locale.code)

  expect(i18next.t).toBeCalledTimes(18)
  expect(i18next.t).toHaveBeenCalledWith(
    expect.stringMatching(/^business-card-about-me-title$/)
  )
  expect(i18next.t).toHaveBeenCalledWith(
    expect.stringMatching(/^business-card-about-me-general-list-item-1$/),
    expect.objectContaining({
      totalExperience: totalHumanize(locale.code)
    })
  )
  for (let i = 2; i <= 6; i++) {
    expect(i18next.t).toHaveBeenCalledWith(
      expect.stringMatching(
        new RegExp(`^business-card-about-me-general-list-item-${i}$`)
      )
    )
  }
})
