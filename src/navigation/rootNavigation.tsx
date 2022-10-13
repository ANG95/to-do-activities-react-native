import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import styles from '../components/mainTab/styles';
import { CompletedTaskScreen, PendingTaskScreen } from '../screens';
import { Routes } from './routeNames';
import { IconTabs } from '../components/mainTab/iconTabComponent';
import { StackNavigation } from './stackNavigation';

const { Navigator, Screen } = createBottomTabNavigator();

export function RootNavigator() {
  return (
    <Navigator
      initialRouteName={Routes.PendingTaskScreen}
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: styles.containerNav,
        headerShown: false,
        tabBarHideOnKeyboard: true,
      }}>
      <Screen
        name={Routes.StackNavigation}
        component={StackNavigation}
        options={{
          tabBarIcon: function RenderIcon({ focused }) {
            return (
              <IconTabs
                tx="PENDIENTES"
                icon="pendingTask"
                focused={focused}
              />
            );
          },
        }}
      />
      <Screen
        name={Routes.CompletedTaskScreen}
        component={CompletedTaskScreen}
        options={{
          tabBarIcon: function RenderIcon({ focused }) {
            return (
              <IconTabs
                tx="COMPLETADAS"
                icon="completedTask"
                focused={focused}
              />
            );
          },
        }}
      />
    </Navigator>
  );
}
