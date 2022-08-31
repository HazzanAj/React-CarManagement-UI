import react from 'react'
import ReactDom from 'react-dom';
import App from './App';
import TestRenderer from 'react-test-renderer'
import AddCompany from "./components/CompanyComponent/AddCompany";
import AddCar from "./components/CarComponent/AddCar";

it('renders a snapshot', () => {

  const tree = TestRenderer.create(<AddCar/>).toJSON();
    expect(tree).toMatchSnapshot();

});

it('renders a snapshot', () => {

  const tree = TestRenderer.create(<AddCompany/>).toJSON();
  expect(tree).toMatchSnapshot();

});
