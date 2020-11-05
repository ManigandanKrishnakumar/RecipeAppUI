import {StyleSheet} from 'react-native';
import {COLORS} from '../../Styles/Colors';

const styles = StyleSheet.create({
  container: {
    height: 30,
    width: 30,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.highlightColorLight,
    borderRadius: 10,
  },
  count: {
    color: COLORS.highlightColor,
    fontWeight: 'bold',
  },
});

export default styles;
