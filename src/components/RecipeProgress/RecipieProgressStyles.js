import {StyleSheet} from 'react-native';
import {COLORS} from '../../Styles/Colors';

const styles = StyleSheet.create({
  container: {},
  imageContainer: {
    height: 400,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  progressContainer: {
    alignItems: 'center',
  },
  message: {
    fontSize: 22,
    color: COLORS.highlightColor,
    fontWeight: '600',
    marginVertical: 20,
  },
  pleaseWaitMessage: {
    fontSize: 15,
    color: COLORS.grey,
  },
});

export default styles;
