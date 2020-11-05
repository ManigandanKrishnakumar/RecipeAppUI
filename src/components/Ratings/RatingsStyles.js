import {StyleSheet} from 'react-native';
import {COLORS} from '../../Styles/Colors';

const styles = StyleSheet.create({
  container: {},
  ratingContainer: {
    flexDirection: 'row',
  },
  rateIcon: {
    color: COLORS.highlightColorMedium,
    fontSize: 15,
  },
  highlightRate: {
    color: COLORS.highlightColor,
  },
  rateText: {
    color: COLORS.highlightColor,
    marginLeft: 5,
  },
});

export default styles;
