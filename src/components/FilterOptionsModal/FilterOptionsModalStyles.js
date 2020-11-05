import {StyleSheet} from 'react-native';
import {COLORS} from '../../Styles/Colors';
import {STYLES} from '../../Styles/StyleValues';

const styles = StyleSheet.create({
  container: {},
  contentContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    marginBottom: 10,
  },
  contentWrapper: {
    marginHorizontal: 10,
    maxHeight: '50%',
    minHeight: '35%',
    backgroundColor: COLORS.mainBgColor,
    borderRadius: STYLES.BORDER_RADIUS_1,
  },
  listContainer: {
    flex: 1,
  },
  cancelButton: {
    padding: 20,
    backgroundColor: '#ed6d73',
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomLeftRadius: STYLES.BORDER_RADIUS_1,
    borderBottomRightRadius: STYLES.BORDER_RADIUS_1,
  },
  cancelText: {
    color: COLORS.mainBgColor,
    fontSize: 20,
  },
});

export default styles;
