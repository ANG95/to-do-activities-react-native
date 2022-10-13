import { FlatList, ListRenderItem, Text, View } from 'react-native';
import React, { useContext } from 'react'
import { FloatButton, Header, Container, Task } from '../../components';
import { styles } from './styles';
import { ActivitiesContext } from '../../context/activitiesContext';
import { Routes } from '../../navigation/routeNames';
import { NavigationPropsType } from '../../interfaces/appInterfaces';

interface RenderItem {
    key: string;
    created: string;
    fact: string;
    length: number | string,
    status: 'pending' | 'completed',
}

export const PendingTaskScreen = ({ navigation }: NavigationPropsType) => {
  const { tasks } = useContext(ActivitiesContext);
  const renderItem: ListRenderItem<RenderItem> = ({ item }) => (
    <Task description={item.fact} date={item.created} />
  );
  return (
    <Container>
      <Header />
      <View style={styles.pendingContainer}>
        <Text>HomeScreen</Text>
        <FlatList
          data={tasks}
          renderItem={renderItem}
          keyExtractor={item => item.key}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
        />
      </View>
      <FloatButton onPress={() => navigation.navigate(Routes.AddTaskScreen)} />
    </Container>
  )
}