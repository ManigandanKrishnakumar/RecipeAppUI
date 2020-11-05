import {StyleSheet} from 'react-native';
import {COLORS} from '../../Styles/Colors';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  label: {
    fontSize: 15,
  },
  value: {
    color: COLORS.highlightColor,
    fontSize: 15,
  },
});

export default styles;
