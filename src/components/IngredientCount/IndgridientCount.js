import React from 'react';
import {View, Text} from 'react-native';

import styles from './IngridientCounStyles';

import {connect} from 'react-redux';

const IngredientCount = ({count}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.count}>{count}</Text>
    </View>
  );
};

const mapStateToProps = (state) => ({
  count: state.composeMealReducer.myIngredients.length,
});

export default connect(mapStateToProps)(IngredientCount);
