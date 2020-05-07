/// <reference types="jest" />
import * as React from 'react'
import { shallow } from 'enzyme'
import FooterExtra from '../../../components/Footer/FooterExtra'

test('should render FooterExtra correctly', () =>
  expect(shallow(<FooterExtra />)).toMatchSnapshot()
)
