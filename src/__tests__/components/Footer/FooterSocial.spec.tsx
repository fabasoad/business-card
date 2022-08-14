/// <reference types="jest" />
import * as React from 'react'
import { shallow } from 'enzyme'
import FooterSocial from '../../../components/Footer/FooterSocial'

test('should render FooterSocial correctly', () =>
  expect(shallow(<FooterSocial />)).toMatchSnapshot()
)
