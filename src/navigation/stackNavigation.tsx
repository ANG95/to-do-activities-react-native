import React from 'react';
import { AddTaskScreen, CompletedTaskScreen, PendingTaskScreen } from '../screens';
import { Routes } from './routeNames';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const { Navigator, Screen } = createNativeStackNavigator();

export function StackNavigation() {
  return (
    <Navigator 
      initialRouteName={Routes.CompletedTaskScreen}
      screenOptions={{
        headerShown: false,
      }}
    >
      <Screen name={Routes.PendingTaskScreen} component={PendingTaskScreen} />
      <Screen name={Routes.AddTaskScreen} component={AddTaskScreen} />
    </Navigator>
  );
}