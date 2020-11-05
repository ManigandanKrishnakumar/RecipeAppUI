import React from 'react';
import {View, Text} from 'react-native';

import styles from './AddIngredientsStyles';
import globalStyles from '../../Styles/GlobalStyles';
import IngredientSearchBox from '../IngredientSearchBox/IngredientSearchBox';
import IngredientsSearchResult from '../IngredientsSearchResult/IngredientsSearchResult';

export default () => {
  return (
    <View style={styles.container}>
      <Text style={[globalStyles.heading, styles.heading]}>
        Add Ingredients
      </Text>
      <IngredientSearchBox style={styles.searchBox} />
      <IngredientsSearchResult />
    </View>
  );
};
