import { Text, View } from 'react-native'
import React, { useContext } from 'react'
import { FloatButton } from '../../components/floatButton/floatButtonComponent';
import { Routes } from '../../navigation/routeNames';
import { NavigationPropsType } from '../../interfaces/appInterfaces';
import { Container, Header } from '../../components';
import { RenderTasks } from '../pendingTask/components/renderTasks';
import { ActivitiesContext } from '../../context/activitiesContext';
import { styles } from './../pendingTask/styles';

const COMPLETED_STATUS = 'completed'

export const CompletedTaskScreen = ({ navigation }: NavigationPropsType) => {
  const { tasks } = useContext(ActivitiesContext);
  const updateData = tasks.filter((item) => item.status === COMPLETED_STATUS);
  return (
    <Container>
      <Header />
      <View style={styles.pendingContainer}>
        <Text style={styles.title}>ACTIVIDADES COMPLETADAS {updateData.length}</Text>
        <RenderTasks data={updateData} />
      </View>
      <FloatButton onPress={() => navigation.navigate(Routes.AddTaskScreen)} />
    </Container>
  )
}
