import 'babel-polyfill'
import Adapter from 'enzyme-adapter-react-16'
import {configure} from 'enzyme'

const localStorageMock = {
    getItem: jest.fn(),
    setItem: jest.fn(),
    clear: jest.fn()
  };
  global.localStorage = localStorageMock

configure({adapter: new Adapter()})