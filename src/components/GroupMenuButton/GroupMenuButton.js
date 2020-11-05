import React from 'react';
import {View, TouchableOpacity, Text, Image} from 'react-native';

import styles from './GroupMenuButtonStyles';
import globalStyles from '../../Styles/GlobalStyles';

import {withNavigation} from '@react-navigation/compat';

const GroupMenuButton = ({title, icon, navigation}) => {
  const onMenuPress = () => {
    navigation.navigate('PopularRecipies');
  };

  return (
    <TouchableOpacity
      style={[
        styles.container,
        globalStyles.shadow_2,
        globalStyles.borderRadius_2,
      ]}
      onPress={onMenuPress}>
      <View style={styles.iconContainer}>{icon}</View>

      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};

export default withNavigation(GroupMenuButton);
