import { Text, View } from 'react-native';
import React, { useContext } from 'react'
import { FloatButton, Header, Container } from '../../components';
import { styles } from './styles';
import { ActivitiesContext } from '../../context/activitiesContext';
import { Routes } from '../../navigation/routeNames';
import { NavigationPropsType } from '../../interfaces/appInterfaces';
import { RenderTasks } from './components/renderTasks';

const PENDING_STATUS ='pending'

export const PendingTaskScreen = ({ navigation:{navigate} }: NavigationPropsType) => {
  const { tasks } = useContext(ActivitiesContext);
  const updateData = tasks.filter((item) => item.status === PENDING_STATUS);
  return (
    <Container>
      <Header />
      <View style={styles.pendingContainer}>
        <Text style={styles.title}>ACTIVIDADES PENDIENTES {updateData.length}</Text>
        <RenderTasks data={updateData}/>
      </View>
      <FloatButton onPress={() => navigate(Routes.AddTaskScreen)} />
    </Container>
  )
}