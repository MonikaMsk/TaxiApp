import {scale} from 'react-native-size-matters';

const pallette = {
  white: '#fff',
  black: '#000',
  gray: 'rgba(34,34,34,0.8)',
  lightGray: 'rgba(100,100,100,0.35)',
  lighterGray: 'rgba(100,100,100, 0.1)',
  blue: '#4a80f5',
};

export const colours = {
  common: {
    background: pallette.white,
    shadowDefault: pallette.black,
    text: pallette.gray,
    textCommon: pallette.black,
  },
  textInput: {
    disabledText: pallette.lightGray,
    disabledBackground: pallette.lighterGray,
    activeBackground: pallette.lightGray,
  },
  divider: {
    backgroundColor: pallette.lightGray,
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
