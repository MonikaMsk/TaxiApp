import { EdgeInsets, useSafeAreaInsets } from 'react-native-safe-area-context';
import { Dimensions } from 'react-native';
import { scale } from 'react-native-size-matters';
import { rideData } from 'components/BottomSheet/mockData';

export const insets = useSafeAreaInsets();

export const LATITUDE_DELTA = 0.004;
export const LONGITUDE_DELTA = 0.004;

export const width = Dimensions.get('window').width;
export const height = Dimensions.get('window').height;
export const screenHeight = Dimensions.get('screen').height;

export const snapPoints = (insets: EdgeInsets) => {
	const footerHeight = scale(120) + (insets.bottom || scale(10));
	const itemHeight = scale(85);
	const headerHeight = scale(50) + 24;

	return [footerHeight + itemHeight + headerHeight,
    footerHeight + headerHeight + rideData[0].data.length * itemHeight,
    height - insets.top
    ];
};

export const mapRideSheetIndexToMapPadding = [height * 0.2, height * 0.5, height * 0.5];
