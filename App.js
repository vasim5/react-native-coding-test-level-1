import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { RouteNavigator } from './src/services/Routes';
import { Provider } from 'react-redux'
import store from './src/redux';

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <RouteNavigator />
        <StatusBar style="auto" />
      </NavigationContainer>
    </Provider>
  );
}
