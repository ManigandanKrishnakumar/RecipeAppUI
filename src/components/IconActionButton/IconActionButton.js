import React from 'react';
import {TouchableOpacity, Text, View} from 'react-native';

import styles from './IconActionButtonStyles';

export default ({icon, buttonTitle, onPress, isDisabled}) => {
  return (
    <TouchableOpacity
      style={[styles.container, isDisabled ? styles.disabled : null]}
      onPress={onPress}
      disabled={isDisabled}>
      <View style={[styles.iconContainer, isDisabled ? styles.disabled : null]}>
        {icon}
      </View>
      <Text style={styles.buttonText}>{buttonTitle}</Text>
    </TouchableOpacity>
  );
};
