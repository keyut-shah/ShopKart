import React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SignupScreen from './Screens/SignUp/SignupScreen';

import SignInScreen from './Screens/Signin/SigninScreen';
import ForgotPasswordScreen from './Screens/ForgotPassword/ForgotPasswordScreen';
import VerifyCodeScreen from './Screens/VerifyCode/VeifyCodeScreen';
import NewPasswordScreen from './Screens/NewPassword/NewPasswordScreen';
import ProfileScreen from './Screens/Profile/ProfileScreen';
import BottomTab from './BottomTab';
import ProductDetailsScreen from './Screens/ProductDetail/ProductDetail';
import AddtoCartScreen from './Screens/AddtoCart/AddtoCartScreen';
import AddressListScreen from './Screens/Address/AddressListScreen';
import CouponCode from './Screens/AddtoCart/CouponCode';

import AddAddressScreen from './Screens/Address/AddAddressScreen';
import SettingScreen from './Screens/Setting/SettingScren';
import PasswordManagerScreen from './Screens/PassowordManager/PasswordManagerScreen';
import HelpCenterScreen from './Screens/HelpCenter/HelpCenterScreen';
import PrivacyScreen from './Screens/Privacy/PrivacyScreen';
import SerachScreen from './Screens/Search/SearchScreen';
const Stack = createNativeStackNavigator();

const MainRouteConfig = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{headerShown: false}}
        initialRouteName={SignInScreen}>
        <Stack.Screen
          headerShown="false"
          name="HomeTab"
          component={BottomTab}
        />

        <Stack.Screen name="SignInScreen" component={SignInScreen} />
        <Stack.Screen
          name="SignupScreen"
          component={SignupScreen}
          options={{
            gestureEnabled: false,
            animation: 'slide_from_right',
            animationDuration: 5000,
          }}
        />
        <Stack.Screen
          name="ForgotPasswordScreen"
          component={ForgotPasswordScreen}
          options={{
            gestureEnabled: false,
            animation: 'slide_from_right',
            animationDuration: 5000,
          }}
        />
        <Stack.Screen
          name="VerifyCodeScreen"
          component={VerifyCodeScreen}
          options={{
            gestureEnabled: false,
            animation: 'slide_from_right',
            animationDuration: 5000,
          }}
        />

        <Stack.Screen
          name="NewPasswordScreen"
          component={NewPasswordScreen}
          options={{
            gestureEnabled: false,
            animation: 'slide_from_right',
            animationDuration: 5000,
          }}
        />
        <Stack.Screen
          name="ProfileScreen"
          component={ProfileScreen}
          options={{
            gestureEnabled: false,
            animation: 'slide_from_right',
            animationDuration: 5000,
          }}
        />
        <Stack.Screen
          name="ProductDetailsScreen"
          component={ProductDetailsScreen}
          options={{
            gestureEnabled: false,
            animation: 'slide_from_right',
            animationDuration: 5000,
          }}
        />
        <Stack.Screen
          name="AddtoCartScreen"
          component={AddtoCartScreen}
          options={{
            gestureEnabled: false,
            animation: 'slide_from_right',
            animationDuration: 5000,
          }}
        />
        <Stack.Screen
          name="AddressListScreen"
          component={AddressListScreen}
          options={{
            gestureEnabled: false,
            animation: 'slide_from_right',
            animationDuration: 5000,
          }}
        />

        <Stack.Screen
          name="CouponCode"
          component={CouponCode}
          options={{
            gestureEnabled: false,
            animation: 'slide_from_right',
            animationDuration: 5000,
          }}
        />

        <Stack.Screen
          name="AddAddressScreen"
          component={AddAddressScreen}
          options={{
            gestureEnabled: false,
            animation: 'slide_from_right',
            animationDuration: 5000,
          }}
        />

        <Stack.Screen
          name="SettingScreen"
          component={SettingScreen}
          options={{
            gestureEnabled: false,
            animation: 'slide_from_right',
            animationDuration: 5000,
          }}
        />

        <Stack.Screen
          name="PasswordManagerScreen"
          component={PasswordManagerScreen}
          options={{
            gestureEnabled: false,
            animation: 'slide_from_right',
            animationDuration: 5000,
          }}
        />
        <Stack.Screen
          name="HelpCenterScreen"
          component={HelpCenterScreen}
          options={{
            gestureEnabled: false,
            animation: 'slide_from_right',
            animationDuration: 5000,
          }}
        />

        <Stack.Screen
          name="PrivacyScreen"
          component={PrivacyScreen}
          options={{
            gestureEnabled: false,
            animation: 'slide_from_right',
            animationDuration: 5000,
          }}
        />
                <Stack.Screen
          name="SerachScreen"
          component={SerachScreen}
          options={{
            gestureEnabled: false,
            animation: 'slide_from_right',
            animationDuration: 5000,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainRouteConfig;
