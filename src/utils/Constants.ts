import {useSafeAreaInsets} from 'react-native-safe-area-context'
import { Dimensions } from 'react-native';

export const insets = useSafeAreaInsets();


export const LATITUDE_DELTA = 0.004
export const LONGITUDE_DELTA = 0.004


export const width = Dimensions.get('window').width;
export const height = Dimensions.get('window').height;
export const screenHeight = Dimensions.get('screen').height;


export const snapPoints = ['20%', '50%', '94%']

export const mapRideSheetIndexToMapPadding = [height * 0.2,  height *0.5, height *0.5]