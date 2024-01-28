import { MapDirectionsResponse } from 'react-native-maps-directions';
import { RideItemPrice } from 'types/rideItem';

export const calculateRidePrice = (price: RideItemPrice, routeInfo?: MapDirectionsResponse) => {
	if (routeInfo) {
		const { distance, duration } = routeInfo;
		return `${(Math.round((price.perKm * distance + price.perMinute * duration) * 100) / 100).toFixed(2)}${price.currency}`;
	}

    return '';
};
