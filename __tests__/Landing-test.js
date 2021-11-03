/**
 * @format
 */

import 'react-native';
import React from 'react';

// Note: test renderer must be required after react-native.
import {render} from 'react-native-testing-library';
import TestNavigator from '../src/navigation/TestNavigator';
import Landing from '../src/screens/Landing';
import {Provider} from 'react-redux';
import configureStore from '../src/helpers/store';

const store = configureStore();

it('should render correctly', () => {
  const {toJSON} = render(
    <Provider store={store}>
      <TestNavigator component={Landing} />
    </Provider>,
  );
  expect(toJSON()).toMatchSnapshot();
});
