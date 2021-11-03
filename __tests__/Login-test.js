/**
 * @format
 */

import 'react-native';
import React from 'react';

// Note: test renderer must be required after react-native.
import {render} from 'react-native-testing-library';
import Login from '../src/screens/Login';
import TestNavigator from '../src/navigation/TestNavigator';

it('should render correctly', () => {
  const {toJSON} = render(<TestNavigator component={Login} />);
  expect(toJSON()).toMatchSnapshot();
});
