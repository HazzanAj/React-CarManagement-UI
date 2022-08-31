import React from 'react';
import AddCompany from "./components/CompanyComponent/AddCompany";
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure( { adapter : new Adapter() });

describe( '< AddCompany/>', () => {
    it('renders five <TextInput/> components', () =>{
        const wrapper = shallow(<AddCompany/>);
        expect(wrapper.find('TextField')).toHaveLength(0)
        }

    )
})
