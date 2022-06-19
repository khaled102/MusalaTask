import * as React from 'react';
import renderer from 'react-test-renderer';
import {HomeScreen} from '../containers';

it('renders correctly', () => {
  const homeRender = renderer.create(<HomeScreen />);
  expect(homeRender).toMatchSnapshot();
});
