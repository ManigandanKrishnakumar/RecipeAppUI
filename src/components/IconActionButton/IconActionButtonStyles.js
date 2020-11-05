import {StyleSheet} from 'react-native';
import {COLORS} from '../../Styles/Colors';
const BORDER_RADIUS = 15;
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    maxWidth: 600,
    backgroundColor: COLORS.highlightColor,
    marginHorizontal: 20,
    height: 50,
    alignItems: 'center',
    borderRadius: BORDER_RADIUS,
    marginBottom: 10,
  },
  disabled: {
    backgroundColor: COLORS.grey,
  },
  iconContainer: {
    maxWidth: 40,
    backgroundColor: COLORS.highlightColorDark,
    height: '100%',
    minWidth: 50,
    borderRadius: BORDER_RADIUS,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    width: '80%',
    color: COLORS.mainBgColor,
    textAlign: 'center',
    fontWeight: '600',
  },
});

export default styles;
