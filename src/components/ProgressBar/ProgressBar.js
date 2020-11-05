import React from 'react';
import {View, Image, Animated, Platform} from 'react-native';

import styles from './ProgressBarStyles';

const ProgressBar = ({progress}) => {
  return (
    <View style={styles.container}>
      <Animated.View style={[styles.progress, {width: progress}]}>
        <Image
          source={require('../../Assets/images/Progress.png')}
          style={styles.progressImage}
          resizeMode={Platform.OS === 'android' ? 'cover' : 'repeat'}
        />
      </Animated.View>
    </View>
  );
};

export default ProgressBar;
