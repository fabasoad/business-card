/// <reference types="jest" />
import * as React from 'react'
import { shallow } from 'enzyme'
import { AboutMe } from '../../components/AboutMe'
import SupportedLocales from '../../scripts/SupportedLocales'
import i18next from '../__mocks__/i18next'
import { Locale } from '../../store/locale/types'
import { IExperienceCalculations } from '../../scripts/ExperienceCalculations'

class ExperienceCalculationsStub implements IExperienceCalculations {
  totalHumanizeSpy: (code: string) => string
  agileHumanizeSpy: (code: string) => string
  
  constructor(
    totalHumanizeSpy: (code: string) => string,
    agileHumanizeSpy: (code: string) => string
  ) {
    this.totalHumanizeSpy = totalHumanizeSpy
    this.agileHumanizeSpy = agileHumanizeSpy
  }

  totalHumanize(code: string): string {
    return this.totalHumanizeSpy(code)
  }
  agileHumanize(code: string): string {
    return this.agileHumanizeSpy(code)
  }  
}

test('should render AboutMe correctly', () => {
  const totalHumanize = (code: string) => `total-${code}`
  const agileHumanize = (code: string) => `agile-${code}`
  const totalHumanizeSpy = jest.fn(totalHumanize)
  const agileHumanizeSpy = jest.fn(agileHumanize)
  const calc: IExperienceCalculations = new ExperienceCalculationsStub(
    totalHumanizeSpy, agileHumanizeSpy
  )

  const locale: Locale = SupportedLocales.default()
  const wrapper = shallow(<AboutMe locale={locale} calc={calc} />)

  expect(wrapper).toMatchSnapshot()

  expect(totalHumanizeSpy).toHaveBeenCalledTimes(1)
  expect(totalHumanizeSpy).toHaveBeenCalledWith(locale.code)
  expect(agileHumanizeSpy).toHaveBeenCalledTimes(1)
  expect(agileHumanizeSpy).toHaveBeenCalledWith(locale.code)

  expect(i18next.t).toBeCalledTimes(7)
  expect(i18next.t).toHaveBeenCalledWith(
    expect.stringMatching(/^business-card-about-me-title$/)
  )
  expect(i18next.t).toHaveBeenCalledWith(
    expect.stringMatching(/^business-card-about-me-general-list-item-1$/),
    expect.objectContaining({
      totalExperience: totalHumanize(locale.code),
      agileExperience: agileHumanize(locale.code)
    })
  )
  for (let i = 2; i <= 6; i++) {
    expect(i18next.t).toHaveBeenCalledWith(
      expect.stringMatching(new RegExp(`^business-card-about-me-general-list-item-${i}$`))
    )
  }
})