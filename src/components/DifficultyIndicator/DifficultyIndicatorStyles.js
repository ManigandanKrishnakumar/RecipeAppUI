import {StyleSheet} from 'react-native';
import {COLORS} from '../../Styles/Colors';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  difficultyText: {
    color: COLORS.grey,
    marginLeft: 5,
  },
});

export const starStyles = StyleSheet.create({
  container: {
    width: 25,
  },
  rowOne: {
    alignItems: 'center',
  },
  icon: {
    color: COLORS.highlightColorMedium,
  },
  selectedIcon: {
    color: COLORS.highlightColor,
  },
  rowTwo: {
    flexDirection: 'row',
  },
});

export default styles;
