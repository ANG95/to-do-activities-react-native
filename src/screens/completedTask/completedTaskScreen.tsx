import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { FloatButton } from '../../components/floatButton/floatButtonComponent';

export const CompletedTaskScreen = () => {
  return (
    <View style={styles.container}>
      <Text>CompletedTaskScreen</Text>
      <FloatButton />
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex: 1
  }
})
