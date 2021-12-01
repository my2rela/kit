import React from 'react';
import ReactDom from 'react-dom';
import { cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import renderer from 'react-test-renderer';

import KitAlert from '../KitAlert';

afterEach(cleanup);

const handleClose = () => {
  // Close function
};

it('renders good', () => {
  const div = document.createElement('div');

  ReactDom.render(<KitAlert type="success" isOpen onClose={handleClose}>test</KitAlert>, div);
});

it('as expected snapshot', () => {
  const tree = renderer.create(<KitAlert type="success" onClose={handleClose}>test</KitAlert>).toJSON();
  expect(tree).toMatchSnapshot();
});
