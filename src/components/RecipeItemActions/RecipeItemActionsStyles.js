import {StyleSheet} from 'react-native';
import {COLORS} from '../../Styles/Colors';
import {STYLES} from '../../Styles/StyleValues';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  actionButton: {
    padding: 10,
    backgroundColor: COLORS.highlightColorLight,
    borderRadius: STYLES.BORDER_RADIUS_1,
  },
  checkText: {
    color: COLORS.highlightColor,
    textAlign: 'center',
    fontWeight: '400',
  },
  icon: {
    color: COLORS.highlightColor,
    fontSize: 15,
  },
  checkButton: {
    flex: 1,
  },
  iconButton: {
    marginLeft: 10,
  },
});

export default styles;
