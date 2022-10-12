// import React from 'react';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import styles from '../components/mainTab/styles';
import { CompletedTaskScreen, PendingTaskScreen } from '../screens';
import { Routes } from './routeNames';
import { IconTabs } from '../components/mainTab/iconTabComponent';

const { Navigator, Screen } = createBottomTabNavigator();

export function RootNavigator() {
  return (
    <Navigator
      initialRouteName={Routes.CompletedTaskScreen}
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: styles.containerNav,
        headerShown: false,
      }}>
      <Screen
        name={Routes.CompletedTaskScreen}
        component={CompletedTaskScreen}
        options={{
          tabBarIcon: function RenderIcon(props) {
            return (
              <IconTabs
                tx="PENDIENTES"
                icon="pendingTask"
                focused={props.focused}
              />
            );
          },
        }}
      />
      <Screen
        name={Routes.PendingTaskScreen}
        component={PendingTaskScreen}
        options={{
          tabBarIcon: function RenderIcon(props) {
            return (
              <IconTabs
                tx="COMPLETADAS"
                icon="completedTask"
                focused={props.focused}
              />
            );
          },
        }}
      />

      {/* <Screen
        name={Routes.PendingTaskScreen}
        component={PendingTaskScreen}
        options={{
          tabBarIcon: function RenderIcon(props) {
            return (
              <IconTabs
                tx="tabsNavigation.HomeMenu"
                icon="menuIcon"
                focused={props.focused}
              />
            );
          },
        }}
      /> */}
    </Navigator>
  );
}
