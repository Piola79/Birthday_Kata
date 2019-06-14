import React from 'react';
import { shallow } from 'enzyme';

import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
 
Enzyme.configure({ adapter: new Adapter() });

import Home from './Home'
import {SomeList} from './Home'

describe('Home Component', () => {
    it('renders without crashing', () => {
        const home = shallow(<Home />)
        expect(home.find(SomeList).length).toBe(1)
    })
})
describe('SomeList Component', () => {
    it('...', () => {
        let lista = ['Pepe', 'Ana'];
        const list = shallow(<SomeList lista={lista}/>)
        expect(list.find('li').length).toBe(2)
    })
})