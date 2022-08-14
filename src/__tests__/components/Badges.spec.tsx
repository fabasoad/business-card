/// <reference types="jest" />
import { shallow } from 'enzyme'
import * as React from 'react'
import Badges from '../../components/Badges'

test('should render Badges correctly', () =>
  expect(shallow(<Badges />)).toMatchSnapshot()
)
