import {StyleSheet} from 'react-native';
import {COLORS} from '../../Styles/Colors';

const styles = StyleSheet.create({
  container: {
    height: 110,
    width: '30.3%',
    padding: 10,
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'flex-end',
    backgroundColor: '#FFF',
  },
  iconContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: COLORS.grey,
  },
});

export default styles;
