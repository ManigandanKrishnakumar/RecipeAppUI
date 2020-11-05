import {StyleSheet} from 'react-native';
import {COLORS} from '../../Styles/Colors';
import {STYLES} from '../../Styles/StyleValues';

const styles = StyleSheet.create({
  container: {
    padding: 20,
    borderBottomWidth: 2,
    borderColor: COLORS.greyLight,
    alignItems: 'center',
  },
  firstContainer: {
    borderTopWidth: 2,
    borderTopLeftRadius: STYLES.BORDER_RADIUS_1,
    borderTopRightRadius: STYLES.BORDER_RADIUS_1,
  },
  text: {
    fontSize: 15,
  },
  selectedText: {
    color: COLORS.highlightColor,
    fontWeight: '600',
  },
});

export default styles;
