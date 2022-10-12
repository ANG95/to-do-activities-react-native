import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { FloatButton } from '../../components/floatButton/floatButtonComponent';

const CompletedTaskScreen = () => {
  return (
    <View style={styles.container}>
      <Text>CompletedTaskScreen</Text>
      <FloatButton />
    </View>
  )
}
export default CompletedTaskScreen;

const styles = StyleSheet.create({
  container:{
    flex: 1
  }
})