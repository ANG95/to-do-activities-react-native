import { Platform } from 'react-native';
import Config from 'react-native-config';

export const { API_URL } = Config;

export const IS_IOS = Platform.OS === 'ios';
export const IS_ANDROID = Platform.OS === 'android';