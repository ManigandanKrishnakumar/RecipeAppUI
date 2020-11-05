import {StyleSheet} from 'react-native';
import {COLORS} from '../../Styles/Colors';

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    borderBottomWidth: 2,
    borderBottomColor: COLORS.greyLight,
    flexDirection: 'row',
    paddingBottom: 5,
    maxWidth: 600,
    alignItems: 'center',
  },
  imageContainer: {
    height: 80,
    width: 80,
  },
  productImage: {
    flex: 1,
  },
  nameContainer: {
    flex: 1,
  },
  name: {
    marginStart: 30,
  },
  deleteContainer: {
    height: 40,
    width: 40,
    backgroundColor: COLORS.greyLight,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  deleteIcon: {
    fontSize: 20,
    color: COLORS.grey,
  },
  addedMsgContainer: {
    padding: 10,
    backgroundColor: COLORS.highlightColorLight,
    borderRadius: 10,
  },
  addedText: {
    color: COLORS.highlightColor,
    fontSize: 9,
    fontWeight: '600',
  },
});

export default styles;
