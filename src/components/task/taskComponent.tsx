import { TouchableOpacity, Image, View, Text } from 'react-native'
import React from 'react'
import { styles } from './styles'
import { SvgIcon } from '../svgIcon/svgIconComponent'
import { palette } from '../../../theme/palette.theme'
import { Card } from '../card/cardComponent'
import { GestureHandlerRootView, Swipeable } from "react-native-gesture-handler";
import { LeftRender } from './leftRender'
import { RightRender } from './rightRender'


interface TaskProps {
  description: string;
}

export const Task = ({ description }: TaskProps) => {
  return (
    <GestureHandlerRootView>
      <Swipeable
        onSwipeableLeftOpen={() => alert('Swiped Leftt')}
        onSwipeableRightOpen={() => alert('Swiped right')}
        renderLeftActions={(progress, dragx) => <LeftRender />}
        renderRightActions={(progress, dragx) => <RightRender />}
        overshootLeft={false}
        overshootRight={false}
      >
        <View style={styles.cardContainer}>
          <Card>
            <View style={styles.container}>
              <View>
                <SvgIcon
                  icon="check"
                  widthScale={20}
                  heightScale={20}
                  color={palette.success}
                />
              </View>
              <Text style={styles.taskDescription}>{description}</Text>
            </View>
            <Text style={styles.dateText}>12/10/2022 12:20</Text>
          </Card>
        </View>
      </Swipeable>
    </GestureHandlerRootView>
  )
}