/// <reference types="jest" />
import * as React from 'react'
import { shallow, ShallowWrapper } from 'enzyme'
import { App } from '../../components/App'

new Array<string>('jp', 'gb').forEach((l) =>
  test(`should render App with ${l} locale correctly`, () => {
    const wrapper: ShallowWrapper = shallow(
      <App locale={{ code: l, title: '' }} />
    )
    expect(wrapper).toMatchSnapshot()
  })
)
