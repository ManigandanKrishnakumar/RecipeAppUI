import React from 'react';
import {View, Text, FlatList, TouchableOpacity} from 'react-native';

import globalStyles from '../../Styles/GlobalStyles';
import styles from './MyIngredientsStyles';
import IngredientItem from '../IngredientItem/IngredientItem';

import {connect} from 'react-redux';

import {setAddIngredient} from '../../StateManagement/Actions/action-creators';

const MyIngredients = ({myIngredients, setAddIngredientFlag}) => {
  return (
    <View style={styles.container}>
      <Text style={[globalStyles.heading, styles.heading]}>My Ingridients</Text>
      <FlatList
        style={styles.list}
        data={myIngredients}
        keyExtractor={(ingredient) => ingredient.id}
        renderItem={({item}) => {
          return <IngredientItem item={item} />;
        }}
      />
      <TouchableOpacity
        style={styles.addButton}
        onPress={() => {
          setAddIngredientFlag(true);
        }}>
        <Text style={styles.addButtonText}>Add ingredient</Text>
      </TouchableOpacity>
    </View>
  );
};

const mapStateToProps = (state) => ({
  myIngredients: state.composeMealReducer.myIngredients,
});

const mapDispatchToProps = (dispatch) => ({
  setAddIngredientFlag: (flag) => dispatch(setAddIngredient(flag)),
});

export default connect(mapStateToProps, mapDispatchToProps)(MyIngredients);
