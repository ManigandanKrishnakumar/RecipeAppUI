import {StyleSheet} from 'react-native';
import {COLORS} from '../../Styles/Colors';

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: COLORS.mainBgColor,
  },
  container: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    paddingBottom: 25,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: COLORS.mainBgColor,
  },
  button: {
    paddingBottom: 5,
  },
  borderBottom: {
    borderBottomWidth: 1,
    borderBottomColor: COLORS.highlightColor,
  },
  icon: {
    fontSize: 30,
    color: COLORS.highlightColor,
    padding: 0,
    margin: 0,
    textAlign: 'center',
  },
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 1,
      height: 15,
    },
    shadowOpacity: 0.5,
    shadowRadius: 15.0,

    elevation: 25,
  },
  composeMealContainer: {
    backgroundColor: COLORS.highlightColor,
    height: 60,
    width: 60,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    transform: [{translateY: -30}],
    marginHorizontal: 5,
  },
  composeMealIcon: {
    color: COLORS.mainBgColor,
  },
  iconContainer: {},
  orangeShadow: {
    shadowColor: COLORS.highlightColor,
    shadowOffset: {
      width: 1,
      height: 5,
    },
    shadowOpacity: 0.4,
    shadowRadius: 10,
    elevation: 10,
  },
});

export default styles;
