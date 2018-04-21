var React = require('react');
import ReactTestUtils from 'react-dom/test-utils'; // ES6
var expect = require('expect');
var App = require('../src/Client/Components/App'); //my root-test lives in components/__tests__/, so this is how I require in my components.

describe('root', function () {
  it('renders without problems', function () {
    var root = ReactTestUtils.renderIntoDocument( App);
    expect(App).toExist();
  });
});