import { scale } from 'react-native-size-matters';

const pallette = {
	white: '#fff',
	black: '#000',
	grey: 'rgba(34,34,34,0.8)',
	lightGrey: 'rgba(100,100,100,0.35)',
	lighterGrey: 'rgba(100,100,100, 0.1)',
	blue: '#4a80f5',
};

export const colours = {
	common: {
		background: pallette.white,
		shadowDefault: pallette.black,
		text: pallette.grey,
		textCommon: pallette.black,
	},
	textInput: {
		disabledText: pallette.lightGrey,
		disabledBackground: pallette.lighterGrey,
		activeBackground: pallette.lightGrey,
	},
	divider: {
		backgroundColor: pallette.lightGrey,
	},
	resultItem: {
		iconBackground: pallette.blue,
		iconTint: pallette.white,
	},
	map: {
		directionStroke: pallette.blue,
	},
	rideItem: {
		selectedBorderColor: pallette.black,
		borderColor: pallette.white,
	},
	bottomSheet: {
		footerRightIconBackground: pallette.lighterGrey,
		footerLeftIconBackground: pallette.black,
		leftIconColor: pallette.white,
	},
	actionButton: {
		backgroundColor: pallette.black,
		fontColor: pallette.white,
	},
};

export const shadow = {
	primary: {
		shadowColor: colours.common.shadowDefault,
		shadowOffset: {
			width: 0,
			height: scale(2),
		},
		shadowOpacity: 0.8,
		shadowRadius: scale(7.5),
		elevation: 10,
	},
};
