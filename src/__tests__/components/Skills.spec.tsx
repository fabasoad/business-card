/// <reference types="jest" />
import * as React from 'react'
import { shallow, ShallowWrapper } from 'enzyme'
import Skills from '../../components/Skills'
import { useTranslation } from '../__mocks__/react-i18next'
import { Technology } from '../../scripts/technologies/types'
import TechnologyStorage from '../../scripts/technologies/TechnologyStorage'

let tMock

beforeAll(() => {
  tMock = useTranslation().t
})

test('should render Skills correctly', () => {
  const findBySkillSpy: () => Array<Technology> = jest.fn(
    () => new Array<number>(1, 2).map(
      (n) => ({ name: `name-${n}`, title: `title-${n}`, img: `img-${n}`, isSkill: true })
    )
  )
  const technologyStorage = new TechnologyStorage(null)
  technologyStorage.findBySkill = findBySkillSpy
  const wrapper: ShallowWrapper = shallow(
    <Skills technologyStorage={technologyStorage} />
  )
  expect(wrapper).toMatchSnapshot()
  expect(tMock).toHaveBeenCalledTimes(1)
  expect(tMock).toHaveBeenCalledWith('business-card-skills-title')
  expect(findBySkillSpy).toHaveBeenCalledTimes(1)
  expect(findBySkillSpy).toHaveBeenCalledWith(true)
})
