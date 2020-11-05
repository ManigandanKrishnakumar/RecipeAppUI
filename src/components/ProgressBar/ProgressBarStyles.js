import {StyleSheet} from 'react-native';
import {COLORS} from '../../Styles/Colors';

const BORDER_RADIUS = 10;
const styles = StyleSheet.create({
  container: {
    height: 20,
    borderRadius: BORDER_RADIUS,
    backgroundColor: COLORS.highlightColorLight,
    width: '80%',
    maxWidth: 600,
    marginTop: 80,
    marginBottom: 20,
  },
  progress: {
    height: '100%',
    backgroundColor: COLORS.highlightColor,
    borderRadius: BORDER_RADIUS,
  },
  progressImage: {
    flex: 1,
    height: '100%',
    borderRadius: BORDER_RADIUS,
  },
});

export default styles;
