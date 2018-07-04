import React from 'react';
import ReactDOM from 'react-dom';
import SideBar from './SideBar.js';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <SideBar>
        <div>Test 1</div>
        <div>Test 2</div>
        <div>Test 3</div>
    </SideBar>,
   div);
  ReactDOM.unmountComponentAtNode(div);
});
