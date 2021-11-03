/**
 * @format
 */

import 'react-native';
import React from 'react';

// Note: test renderer must be required after react-native.
import {render} from 'react-native-testing-library';
import TestNavigator from '../src/navigation/TestNavigator';
import Details from '../src/screens/Details';

it('should render correctly', () => {
  const {toJSON} = render(<TestNavigator component={Details} />);
  expect(toJSON()).toMatchSnapshot();
});
