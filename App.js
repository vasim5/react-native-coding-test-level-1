import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { RouteNavigator } from './src/services/Routes';

export default function App() {
  return (
    <NavigationContainer>
      <RouteNavigator />
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}
