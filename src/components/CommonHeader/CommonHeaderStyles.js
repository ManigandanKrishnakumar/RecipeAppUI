import {StyleSheet} from 'react-native';
import {COLORS} from '../../Styles/Colors';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 50,
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  startSlot: {
    flex: 1,
  },
  middleSlot: {
    flex: 2,
    textTransform: 'uppercase',
    textAlign: 'center',
    fontWeight: 'bold',
    color: COLORS.highlightColor,
  },
  endSlot: {
    flex: 1,
    alignItems: 'flex-end',
  },
  isLoadingHeader: {
    backgroundColor: COLORS.highlightColorLight,
  },
});

export default styles;
