import {useSafeAreaInsets} from 'react-native-safe-area-context'
import { Dimensions } from 'react-native';

export const insets = useSafeAreaInsets();


export const LATITUDE_DELTA = 0.04
export const LONGITUDE_DELTA = 0.004


export const width = Dimensions.get('window').width;
export const height = Dimensions.get('window').height;