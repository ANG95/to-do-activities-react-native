import { View, ListRenderItem, FlatList } from 'react-native'
import React, { useContext, useState } from 'react'
import { SearchBar, Task } from '../../../components';
import { ActivitiesContext } from '../../../context/activitiesContext';

interface RenderItem {
  key: string;
  created: string;
  fact: string;
  length: number | string,
  status: 'pending' | 'completed',
}

export function RenderTasks({ data }:any) {
  const { updateTaskActivity } = useContext(ActivitiesContext);

  const [searchPhrase, setSearchPhrase] = useState("");
  const [clicked, setClicked] = useState(false);
  const [taskSelected, setTaskSelected] = useState<RenderItem|{}>({})
  const [inputChangeText, setInputChangeText] = useState('')

  const selectEditable = (item: RenderItem)=>{
    setInputChangeText(item.fact)
    setTaskSelected(item)
  }

  const handleUpdateTask=()=>{
    setTaskSelected({})
    updateTaskActivity(taskSelected?.key, inputChangeText)
  }

  const renderItem: ListRenderItem<RenderItem> = ({ item }) => {
    const TaskComponent = (
    <Task
      id={item.key}
      description={item.fact}
      date={item.created}
      disabled={item.status === 'completed'}
      onSelect={()=>selectEditable(item)}
      onUpdate={()=>handleUpdateTask()}
      onChangeInput={(e)=>setInputChangeText(e)}
      inputChange={inputChangeText}
      selected={taskSelected }
    />
    )
    if (searchPhrase === "") {
      return TaskComponent;
    } else if (item.fact.toUpperCase().includes(searchPhrase.toUpperCase().trim().replace(/\s/g, ""))) {
      return TaskComponent
    } else {
      return <View />
    }
  }
  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={item => item.key}
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
      keyboardShouldPersistTaps="always"
      ListHeaderComponent={
        <SearchBar
          searchPhrase={searchPhrase}
          setSearchPhrase={setSearchPhrase}
          clicked={clicked}
          setClicked={setClicked}
        />}
    />
  )
}