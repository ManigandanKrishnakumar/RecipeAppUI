import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

import styles from './BackButtonStyles';

import IonIcons from 'react-native-vector-icons/Ionicons';
import {withNavigation} from '@react-navigation/compat';

const BackButton = ({navigation}) => {
  const onBackPress = () => {
    navigation.goBack();
  };
  return (
    <TouchableOpacity style={styles.container} onPress={onBackPress}>
      <IonIcons name="arrow-back" style={styles.backIcon} />
    </TouchableOpacity>
  );
};

export default withNavigation(BackButton);
