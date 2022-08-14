/// <reference types="jest" />
import * as React from 'react'
import { shallow } from 'enzyme'
import FooterEmail from '../../../components/Footer/FooterEmail'

test('should render FooterEmail correctly', () =>
  expect(shallow(<FooterEmail />)).toMatchSnapshot()
)
