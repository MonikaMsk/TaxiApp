import {scale} from 'react-native-size-matters';

const pallette = {
 white: '#fff',
 black: '#000',
}

export const colours = {
 common: {
    background: pallette.white,
    shadowDefault: pallette.black,
 }
};


export const shadow = {
  primary: {
    shadowColor: colours.common.shadowDefault,
    shadowOffset: {
      width: 0,
      height: scale(-2),
    },
    shadowOpacity: 0.8,
    shadowRadius: scale(7.5),
    elevation: 10,
  },
};
