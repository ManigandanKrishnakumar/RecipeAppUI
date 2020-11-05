import React from 'react';
import {View, Text, FlatList, Image} from 'react-native';

import styles from './PromorRecipiesStyles';
import globalStyles from '../../Styles/GlobalStyles';

import {CONTENT} from '../../constants/content-constants';

export default () => {
  return (
    <View style={styles.container}>
      <Text style={[globalStyles.heading]}>Promo recipe</Text>

      <FlatList
        style={styles.list}
        data={CONTENT.PROMO_RECIPIES}
        horizontal={true}
        keyExtractor={(banner) => banner.id}
        renderItem={({item}) => {
          return (
            <View style={globalStyles.shadow_1}>
              <Image
                style={[styles.banner]}
                source={require('../../Assets/images/Bitmap-2.png')}
              />
            </View>
          );
        }}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};
