/* eslint-disable prettier/prettier */

/*
    This file manages all the routes of this application.
    Any new screen should be added to this file.
*/

import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

//... Screens
import Landing from '../screens/Landing';
import navigationConstants from '../constants/navigationConstants';
import Login from '../screens/Login';
import Details from '../screens/Details';
import { NavigationContainer } from '@react-navigation/native';
const Stack = createStackNavigator();

const NavigationStack = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
                headerShown={false}
                initialRouteName={navigationConstants.LOGIN.screenName}
            >
                <Stack.Screen
                    name={navigationConstants.LOGIN.screenName}
                    component={Login}
                    options={{ animationEnabled: true }}
                />
                <Stack.Screen
                    name={navigationConstants.LANDING.screenName}
                    component={Landing}
                    options={{ animationEnabled: true }}
                />
                <Stack.Screen
                    name={navigationConstants.DETAILS.screenName}
                    component={Details}
                    options={{ animationEnabled: true }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default NavigationStack;
