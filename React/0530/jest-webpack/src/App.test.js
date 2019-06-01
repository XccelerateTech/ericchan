import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {shallow} from 'enzyme';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

describe('<App />', ()=> {
  it('render a <App /> components', ()=>{
    const wrapper = shallow(<App />);
    expectExport(wrapper.find(header.App-header).length).toEqual(1);
  });
});