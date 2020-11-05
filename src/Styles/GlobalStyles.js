import {StyleSheet} from 'react-native';
import {COLORS} from './Colors';

const styles = StyleSheet.create({
  shadow_1: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 4,
  },
  shadow_2: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 4,
  },
  borderRadius_2: {
    borderRadius: 15,
  },
  heading: {
    marginStart: 20,
    fontWeight: '600',
    fontSize: 20,
  },
  searchIconWhite: {
    color: COLORS.mainBgColor,
    transform: [{scaleX: -1}],
    fontSize: 25,
  },
});

export default styles;
