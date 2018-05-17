import React from 'react';
import App  from '../../src/Client/Components/App'; //my root-test lives in components/__tests__/, so this is how I require in my components.
import {shallow, render} from 'enzyme';
import { Provider } from 'react-redux';

it('renders without crashing', () => {
  /*const app = render(<App/>);
  expect(app).toMatchSnapshot();*/
});