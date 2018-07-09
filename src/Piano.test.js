import React from 'react';
import ReactDOM from 'react-dom';
import Piano from './Piano';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Piano />, div);
});
