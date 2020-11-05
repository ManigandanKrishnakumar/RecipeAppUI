import React from 'react';
import {ScrollView, View, Text, FlatList} from 'react-native';

import styles from './IngredientsSearchResultsStyles';

import {Ingredients} from '../../constants/app-constants';
import IngredientResultItem from '../IngredientResultItem/IngredientResultItem';

import {connect} from 'react-redux';

const IngredientsSearchResult = ({searchResult}) => {
  return (
    <View style={styles.container}>
      <Text>Result</Text>
      <FlatList
        style={styles.list}
        data={searchResult}
        keyExtractor={(ingredient) => ingredient.id}
        renderItem={({item}) => {
          return <IngredientResultItem item={item} />;
        }}
      />
    </View>
  );
};
const mapStateToProps = (state) => ({
  searchResult: state.composeMealReducer.searchResult,
});
export default connect(mapStateToProps)(IngredientsSearchResult);
