import {StyleSheet} from 'react-native';
import {STYLES} from '../../Styles/StyleValues';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  recipeImage: {
    height: 130,
    width: 130,
    borderRadius: STYLES.BORDER_RADIUS_1,
  },
  infoContainer: {
    flex: 1,
    marginLeft: 20,
    justifyContent: 'space-between',
  },
  recipeName: {
    fontSize: 16,
  },
  difficultyAndTimeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default styles;
