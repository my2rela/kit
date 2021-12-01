import React from 'react';
import ReactDom from 'react-dom';
import { cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import renderer from 'react-test-renderer';

import KitSelectField from '../KitSelectField';

const options = [
  {
    value: 1,
    text: 'one',
  },
  {
    value: 2,
    text: 'two',
  },
  {
    value: 3,
    text: 'three',
  },
];

const onchange = () => {
  // onChange callback
};

afterEach(cleanup);

it('renders good', () => {
  const div = document.createElement('div');

  ReactDom.render(<KitSelectField options={options} value={1} label="Test" onChange={onchange} />, div);
});

it('as expected snapshot', () => {
  const tree = renderer.create(<KitSelectField options={options} value={1} label="Test" onChange={onchange} />).toJSON();
  expect(tree).toMatchSnapshot();
});
