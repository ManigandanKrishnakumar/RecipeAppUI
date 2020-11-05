import {StyleSheet} from 'react-native';
import {COLORS} from '../../Styles/Colors';

const BORDER_RADIUS = 15;

const styles = StyleSheet.create({
  container: {
    height: 50,
    backgroundColor: COLORS.greyLight,
    borderRadius: BORDER_RADIUS,
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    flex: 1,
    padding: 15,
  },
  iconContainer: {
    height: '100%',
    width: 50,
    backgroundColor: COLORS.highlightColor,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: BORDER_RADIUS,
  },
});

export default styles;
