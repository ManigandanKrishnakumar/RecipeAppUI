import {StyleSheet} from 'react-native';
import {COLORS} from '../../Styles/Colors';

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },
  list: {
    marginTop: 25,
  },
  heading: {
    marginStart: 0,
  },
  addButton: {
    padding: 20,
    marginTop: 20,
    borderWidth: 1,
    borderColor: COLORS.highlightColor,
    borderStyle: 'dashed',
    borderRadius: 20,
  },
  addButtonText: {
    textAlign: 'center',
    color: COLORS.highlightColor,
    fontWeight: '600',
  },
});

export default styles;
