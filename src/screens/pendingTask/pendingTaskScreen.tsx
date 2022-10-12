import { FlatList, Text, View } from 'react-native';
import React, { useContext } from 'react'
import { FloatButton, Header, Container, Task } from '../../components';
import { styles } from './styles';
import { ActivitiesContext } from '../../context/activitiesContext';

export const PendingTaskScreen = () => {
  const { tasks } = useContext(ActivitiesContext);
  const renderItem = ({ item }: any) => (
    <Task description={item.fact} />
  );
  return (
    <Container>
      <Header goBack={() => console.log('pressed')} />
      <View style={styles.pendingContainer}>
        <Text>HomeScreen</Text>
        <FlatList
          data={tasks}
          renderItem={renderItem}
          keyExtractor={item => item.length}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
        />
      </View>
      <FloatButton />
    </Container>
  )
}