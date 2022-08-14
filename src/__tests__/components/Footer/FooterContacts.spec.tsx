/// <reference types="jest" />
import * as React from 'react'
import { shallow } from 'enzyme'
import FooterContacts from '../../../components/Footer/FooterContacts'

test('should render FooterContacts correctly', () =>
  expect(shallow(<FooterContacts />)).toMatchSnapshot()
)
