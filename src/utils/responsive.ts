import { Dimensions } from 'react-native';

const SCREEN_WIDTH: number = Dimensions.get('screen').width;
const SCREEN_HEIGHT: number = Dimensions.get('screen').height;

const guidelineBaseWidth: number = 350;
const guidelineBaseHeight: number = 680;

const scale = (size: number) => (SCREEN_WIDTH / guidelineBaseWidth) * size;

const verticalScale = (size: number): number => {
  const relation = SCREEN_HEIGHT / guidelineBaseHeight;
  return Math.min(1.2, relation) * size;
};

const moderateScale = (size: number, factor: number = 0.5): number => {
  return size + (scale(size) - size) * factor;
};

const NAVIGATION_BAR_HEIGHT = verticalScale(78);

export { scale, verticalScale, moderateScale, NAVIGATION_BAR_HEIGHT, SCREEN_WIDTH, SCREEN_HEIGHT };
