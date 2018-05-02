import React from 'react';
import {shallow, render} from 'enzyme';
import Contact from '../../../src/Client/Components/common/Contact';

it('renders no bookswhen store is empty', () => {
    const wrapper = shallow(<Contact/>)
    expect(wrapper).toMatchSnapshot();
});