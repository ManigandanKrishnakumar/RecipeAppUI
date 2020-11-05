import {StyleSheet} from 'react-native';
import {COLORS} from '../../Styles/Colors';

const styles = StyleSheet.create({
  statusBar: {
    flex: 0,
    backgroundColor: COLORS.mainBgColor,
  },
  loadingStatusBar: {
    backgroundColor: COLORS.highlightColorLight,
  },
  container: {
    flex: 1,
    backgroundColor: COLORS.mainBgColor,
  },
  contentContainer: {
    flex: 1,
    paddingHorizontal: 20,
  },
  filterContainer: {
    marginTop: 25,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  resultsContainer: {
    marginTop: 10,
  },
});

export default styles;
