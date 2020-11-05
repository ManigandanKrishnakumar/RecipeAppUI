import React from 'react';
import {View, TouchableOpacity, Text, Image} from 'react-native';

import styles from './ComposeMealStyles';

import LinearGradient from 'react-native-linear-gradient';
import {withNavigation} from '@react-navigation/compat';

import {COLORS} from '../../Styles/Colors';

const ComposeMeal = ({navigation}) => {
  const onButtonPress = () => {
    navigation.navigate('ComposeMeal');
  };
  return (
    <LinearGradient
      colors={[COLORS.highlightColor, '#fbbb57']}
      start={{x: 0, y: 0.5}}
      end={{x: 1, y: 0.5}}
      style={styles.container}>
      <Image source={require('../../Assets/images/Bitmap-1.png')} />
      <View style={styles.textSection}>
        <Text style={styles.bannerText}>Compose your own meal.</Text>
        <TouchableOpacity style={styles.button} onPress={onButtonPress}>
          <Text style={styles.buttonText}>Compose Meal</Text>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
};

export default withNavigation(ComposeMeal);
