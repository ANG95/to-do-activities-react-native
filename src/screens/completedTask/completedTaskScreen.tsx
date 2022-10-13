import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { FloatButton } from '../../components/floatButton/floatButtonComponent';
import { Routes } from '../../navigation/routeNames';
import { NavigationPropsType } from '../../interfaces/appInterfaces';

export const CompletedTaskScreen = ({ navigation }: NavigationPropsType) => {
  return (
    <View style={styles.container}>
      <Text>CompletedTaskScreen</Text>
      <FloatButton onPress={() => navigation.navigate(Routes.AddTaskScreen)} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})
