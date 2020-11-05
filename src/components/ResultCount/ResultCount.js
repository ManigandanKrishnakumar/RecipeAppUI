import React from 'react';
import {View, Text} from 'react-native';

import styles from './ResultCountStyles';

export default ({resultCount}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Results: </Text>
      <Text style={styles.value}>3 recipies</Text>
    </View>
  );
};
