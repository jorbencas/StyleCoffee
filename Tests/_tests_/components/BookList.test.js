import React from 'react';
import {shallow, render} from 'enzyme';
import { BooksListPage } from '../../../src/Client/Components/Books/BooksListPage';

it('renders no bookswhen store is empty', () => {
    const wrapper = shallow(<BooksListPage books={[]}/>)
    expect(wrapper.find(".itembook").length).toBe(0);
});