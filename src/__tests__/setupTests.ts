import * as Enzyme from 'enzyme'
import * as Adapter from '@wojtekmaj/enzyme-adapter-react-17'

Enzyme.configure({
  adapter: new Adapter()
})
