import { ActivityIndicator, Keyboard, Text, View } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { styles } from './styles';
import { Button, Card, Container, Header, TextInput } from '../../components';
import { UseSubmitForm } from './hooks/useSubmitForm';
import { ActivitiesContext } from '../../context/activitiesContext';
import { CURRENT_DATE, UuID } from '../../utils/functions';
import { NavigationPropsType } from '../../interfaces/appInterfaces';
import { Routes } from '../../navigation/routeNames';
import { palette } from '../../../theme/palette.theme';
import { color } from '../../../theme/color.theme';

export const AddTaskScreen = ({ navigation: { navigate } }: NavigationPropsType) => {
  const [fetchData, loading, responseData] = UseSubmitForm('/facts?limit=')
  const [input, setInput] = useState({ one: '', random: '' })
  const { saveActivities, tasks } = useContext(ActivitiesContext);

  const handleInput = (name: string, value: string | number) => {
    setInput({
      ...input,
      [name]: value
    })
  };
  useEffect(() => { }, [loading, responseData]);

  const handleSaveActivity = () => {
    handleInput('one', '')
    Keyboard.dismiss()
    saveActivities([
      {
        key: UuID(),
        created: CURRENT_DATE,
        fact: input.one,
        length: input.one.length,
        status: 'pending',
      },
    ])
    navigate(Routes.PendingTaskScreen)
  }
  return (
    <Container>
      <Header />
      <View style={styles.container}>
        <Text style={styles.headerTitle}>AGREGAR NUEVA ACTIVIDAD</Text>

        <Text style={styles.sectionText}>AGREGAR UNA ACTIVIDAD</Text>
        <Card>
          <TextInput
            value={input.one}
            keyboardType="default"
            onChangeText={(e) => handleInput('one', e)}
            placeholder='Ejem: Realizar compras'
          />
          <Button
            label="AGREGAR"
            onPress={() => handleSaveActivity()}
            disabled={!input.one}
          />
        </Card>
        <Text style={styles.sectionText}>AGREGAR ACTIVIDADES CON FRASES ALEATORIAS</Text>
        <Card>
          <View style={styles.randomInputContainer}>
            {
              loading ? 
              <ActivityIndicator animating size='large' color={color.primary} /> :
                <>
                  <TextInput
                    value={input.random}
                    keyboardType="number-pad"
                    onChangeText={(e) => handleInput('random', e)}
                    style={styles.textInput}
                    placeholder='Ejem: 5'
                  />
                  <Button
                    label="AGREGAR RANDOM"
                    onPress={() => {
                      fetchData(input.random, navigate)
                      handleInput('random', '')
                    }}
                    disabled={!input.random}
                  />
                </>
            }
          </View>
        </Card>
      </View>
    </Container>
  )
}