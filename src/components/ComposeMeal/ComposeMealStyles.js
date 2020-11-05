import {StyleSheet} from 'react-native';
import {COLORS} from '../../Styles/Colors';

const styles = StyleSheet.create({
  container: {
    height: 150,
    backgroundColor: COLORS.highlightColor,
    marginHorizontal: 20,
    marginVertical: 20,
    borderRadius: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textSection: {
    flex: 1,
    height: '100%',
    padding: 10,
    justifyContent: 'space-around',
  },
  bannerText: {
    fontSize: 24,
    color: COLORS.mainBgColor,
    textAlign: 'center',
    fontWeight: '600',
  },
  button: {
    padding: 10,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: COLORS.mainBgColor,
  },
  buttonText: {
    textAlign: 'center',
    color: COLORS.mainBgColor,
    fontWeight: '700',
    fontSize: 12,
  },
});

export default styles;
