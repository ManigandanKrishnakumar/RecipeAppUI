import {StyleSheet} from 'react-native';
import {COLORS} from '../../Styles/Colors';
import {STYLES} from '../../Styles/StyleValues';

const FONT_SIZE = 12;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: COLORS.greyLight,
    padding: 12,
    borderRadius: STYLES.BORDER_RADIUS_1,
  },
  label: {
    fontSize: FONT_SIZE,
  },
  valueContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  value: {
    fontSize: FONT_SIZE,
    color: COLORS.highlightColor,
  },
  icon: {
    fontSize: 15,
    color: COLORS.highlightColor,
  },
});

export default styles;
