import {StyleSheet} from 'react-native';
import {COLORS} from '../../Styles/Colors';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 10,
  },
  icon: {
    color: COLORS.highlightColor,
    fontSize: 20,
  },
  time: {
    color: COLORS.grey,
    marginRight: 5,
  },
});

export default styles;
