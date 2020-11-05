import React from 'react';
import {View, Text} from 'react-native';

import styles from './TimeIndicatorStyles';

import IonIcon from 'react-native-vector-icons/Ionicons';

const TimeIndicator = ({time}) => {
  return (
    <View style={styles.container}>
      <IonIcon name="time-outline" style={styles.icon} />
      <Text style={styles.time}>
        {(time.hours ? time.hours + 'h' : '') + ' ' + time.min + 'm'}
      </Text>
    </View>
  );
};

export default TimeIndicator;
