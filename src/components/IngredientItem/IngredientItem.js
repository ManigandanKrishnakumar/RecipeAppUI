import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';

import styles from './IngredientItemStyles';

import MatComIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import {connect} from 'react-redux';
import {removeIngredient} from '../../StateManagement/Actions/action-creators';

const IngredientItem = ({item, deleteIngredient}) => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={{uri: item.image}} style={styles.productImage} />
      </View>

      <View style={styles.nameContainer}>
        <Text style={styles.name}>{item.name}</Text>
      </View>

      <TouchableOpacity
        style={styles.deleteContainer}
        onPress={() => {
          deleteIngredient(item);
        }}>
        <MatComIcon name="delete-outline" style={styles.deleteIcon} />
      </TouchableOpacity>
    </View>
  );
};

const mapDispatchToProps = (dispatch) => ({
  deleteIngredient: (item) => dispatch(removeIngredient(item)),
});

export default connect(null, mapDispatchToProps)(IngredientItem);
