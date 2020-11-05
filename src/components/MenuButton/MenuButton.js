import React from 'react';
import {View, Image} from 'react-native';

import styles from './MenuButtonStyles';

export default () => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../../Assets/images/ico_menu.png')}
        height="150"
        width="150"
      />
    </View>
  );
};
