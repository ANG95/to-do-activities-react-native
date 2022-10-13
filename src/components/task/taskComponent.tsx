import { TouchableOpacity, Image, View, Text, TextInput } from 'react-native'
import React, { useContext, useState } from 'react'
import { styles } from './styles'
import { SvgIcon } from '../svgIcon/svgIconComponent'
import { palette } from '../../../theme/palette.theme'
import { Card } from '../card/cardComponent'
import { GestureHandlerRootView, Swipeable } from "react-native-gesture-handler";
import { LeftRender } from './leftRender'
import { RightRender } from './rightRender'
import { ActivitiesContext } from '../../context/activitiesContext'

interface TaskProps {
  id: string;
  description: string;
  date: string;
  onSelect: () => void;
  onUpdate: () => void;
  onChangeInput: (e: string) => void;
  disabled: boolean;
  selected: any;
  inputChange: string;
}

export const Task = ({ id, description, date, onSelect, disabled, onUpdate,
  onChangeInput, selected, inputChange }: TaskProps) => {
  const { updateActivity, deleteActivity } = useContext(ActivitiesContext);
  const handleTaskUpdate = () => {
    onSelect()
  }
  return (
    <GestureHandlerRootView>
      <Swipeable
        onSwipeableLeftOpen={() => updateActivity(id)}
        onSwipeableRightOpen={() => deleteActivity(id)}
        renderLeftActions={() => !disabled && <LeftRender />}
        renderRightActions={() => <RightRender />}
        overshootLeft={false}
        overshootRight={false}
      >
        <View style={styles.cardContainer}>
          <Card>
            <View style={styles.container}>
              {
                selected.key != id ? (
                  <>
                    <TouchableOpacity
                      onPress={() => handleTaskUpdate()}
                      disabled={disabled}
                    >
                      <SvgIcon
                        icon={disabled ? 'checked' : "edit"}
                        widthScale={30}
                        heightScale={30}
                        color={palette.black}
                      />
                    </TouchableOpacity>
                    <Text style={styles.taskDescription}>{description}</Text>
                  </>
                )
                  : (
                    <>
                      <TouchableOpacity onPress={onUpdate}
                        disabled={disabled}>
                        <SvgIcon
                          icon="save"
                          widthScale={30}
                          heightScale={30}
                          color={palette.success}
                        />
                      </TouchableOpacity>
                      <TextInput
                        multiline
                        value={inputChange}
                        style={styles.taskDescriptionInput}
                        onChangeText={onChangeInput}
                      />
                    </>
                  )}
            </View>
            <Text style={styles.dateText}>{date}</Text>
          </Card>
        </View>
      </Swipeable >
    </GestureHandlerRootView >
  )
}