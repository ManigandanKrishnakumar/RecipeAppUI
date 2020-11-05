import React, {useEffect, useState} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';

import styles from './IngredientResultItemStyles';

import Icon from 'react-native-vector-icons/MaterialIcons';
import {connect} from 'react-redux';
import {addIngredient} from '../../StateManagement/Actions/action-creators';
const IngredientResultItem = ({item, addedIngredients, addIngredient}) => {
  const [used, setUsed] = useState();
  useEffect(() => {
    const isUsed = addedIngredients.find(
      (ingredient) => item.id === ingredient.id,
    );

    isUsed ? setUsed(true) : setUsed(false);
  }, [addedIngredients, item]);
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={{uri: item.image}} style={styles.productImage} />
      </View>

      <View style={styles.nameContainer}>
        <Text style={styles.name}>{item.name}</Text>
      </View>

      {used ? (
        <View style={styles.addedMsgContainer}>
          <Text style={styles.addedText}>Added to list</Text>
        </View>
      ) : (
        <TouchableOpacity
          style={styles.deleteContainer}
          onPress={() => {
            addIngredient(item);
          }}>
          <Icon name="add" style={styles.deleteIcon} />
        </TouchableOpacity>
      )}
    </View>
  );
};

const mapStateToProps = (state) => ({
  addedIngredients: state.composeMealReducer.myIngredients,
});

const mapDispatchToProps = (dispatch) => ({
  addIngredient: (item) => dispatch(addIngredient(item)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(IngredientResultItem);
