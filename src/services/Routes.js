import React from "react";

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ContactUs } from "../screens/contact_us/ContactUs";
import { Home } from "../screens/home/Home";
import CatalogList from "../screens/catalog/CatalogList";
import CatalogDetails from "../screens/catalog/CatalogDetails";

const Stack = createNativeStackNavigator();

export const RouteNavigator = () => (
  <Stack.Navigator initialRouteName="Home" >
    <Stack.Screen name="Home" component={Home} />
    <Stack.Screen name="ContactUs" component={ContactUs} />
    <Stack.Screen name="CatalogList" component={CatalogList} options={{ headerShown: false }}/>
    <Stack.Screen name="CatalogDetails" component={CatalogDetails} options={{ headerShown: false }}/>
  </Stack.Navigator>
)