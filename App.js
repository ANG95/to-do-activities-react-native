import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { ActivitiesProvider } from './src/context/activitiesContext';
import { RootNavigator } from './src/navigation/rootNavigation';

const AppState = ({ children } ) => {
  return (
    <ActivitiesProvider>
       { children }
    </ActivitiesProvider>
  )
}

const App = () => {
  return (
    <NavigationContainer>
      <AppState>
        <RootNavigator />
      </AppState>
    </NavigationContainer>
  )
}


export default App;
