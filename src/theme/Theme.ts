import {scale} from 'react-native-size-matters';

const pallette = {
  white: '#fff',
  black: '#000',
  gray: 'rgba(34,34,34,0.8)',
};

export const colours = {
  common: {
    background: pallette.white,
    shadowDefault: pallette.black,
    text: pallette.gray,
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
