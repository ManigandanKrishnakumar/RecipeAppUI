import {StyleSheet} from 'react-native';
import {COLORS} from '../../Styles/Colors';

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingTop: 20,
    flexDirection: 'row',
    flexWrap: 'wrap',
    maxWidth: 600,
    alignSelf: 'center',
    justifyContent: 'space-between',
  },
  title: {
    color: COLORS.grey,
  },
});

export default styles;
