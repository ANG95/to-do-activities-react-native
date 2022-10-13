import { TouchableOpacity, Image, View, Text } from 'react-native'
import React, { useContext } from 'react'
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
  onPress: () => void;
  disabled: boolean;
}

export const Task = ({ id, description, date, onPress, disabled }: TaskProps) => {
  const { updateActivity, deleteActivity } = useContext(ActivitiesContext);

  return (
    <GestureHandlerRootView>
      <Swipeable
        onSwipeableLeftOpen={() => updateActivity(id)}
        onSwipeableRightOpen={() => deleteActivity(id)}
        renderLeftActions={(progress, dragx) => !disabled && <LeftRender />}
        renderRightActions={(progress, dragx) => <RightRender />}
        overshootLeft={false}
        overshootRight={false}
      >
        <View style={styles.cardContainer}>
          <Card>
            <View style={styles.container}>
              <TouchableOpacity onPress={onPress} disabled={disabled}>
                <SvgIcon
                  icon={disabled ? 'checked' : "edit"}
                  widthScale={30}
                  heightScale={30}
                  color={palette.black}
                />
              </TouchableOpacity>
              <Text style={styles.taskDescription}>{description}</Text>
            </View>
            <Text style={styles.dateText}>{date}</Text>
          </Card>
        </View>
      </Swipeable>
    </GestureHandlerRootView>
  )
}