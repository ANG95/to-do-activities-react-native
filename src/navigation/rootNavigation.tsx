import React from 'react';
import { PendingTaskScreen } from '../screens/pendingTask/pendingTaskScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CompletedTask from './../../assets/svg/completedTask.svg';
import PendingTask from './../../assets/svg/pendingTask.svg';
import CompletedTaskScreen from '../screens/completedTask/completedTaskScreen';

const Tab = createBottomTabNavigator();

export const RootNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          if (route.name === 'PendingTaskScreen') {
            return <PendingTask height={size} width={size} fill={color} />;
          } else if (route.name === 'CompletedTaskScreen') {
            return <CompletedTask height={size} width={size} fill={color} />;
          }
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
        headerShown: false,
      })}
    >
      <Tab.Screen
        options={{ title: 'PENDIENTES' }}
        name="PendingTaskScreen"
        component={PendingTaskScreen}
      />
      <Tab.Screen
        options={{ title: 'COMPLETADAS' }}
        name="CompletedTaskScreen"
        component={CompletedTaskScreen}
      />
    </Tab.Navigator>
  );
}