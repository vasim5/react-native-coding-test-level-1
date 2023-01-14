import React from "react";

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ContactUs } from "../screens/contact_us/ContactUs";
import { Home } from "../screens/home/Home";


const Stack = createNativeStackNavigator();

export const RouteNavigator = () => (
  <Stack.Navigator initialRouteName="Home">
    <Stack.Screen name="Home" component={Home} />
    <Stack.Screen name="ContactUs" component={ContactUs} />
  </Stack.Navigator>
)