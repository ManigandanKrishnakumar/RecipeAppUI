import React from 'react';
import {View, Text} from 'react-native';

import Styles from './CommonHeaderStyles';
import MenuButton from '../MenuButton/MenuButton';
import BackButton from '../BackButton/BackButton';

export default ({title, endComponent, showBack, isLoading}) => {
  return (
    <View style={[Styles.container, isLoading ? Styles.isLoadingHeader : null]}>
      <View style={Styles.startSlot}>
        {showBack ? <BackButton /> : <MenuButton />}
      </View>
      <Text style={Styles.middleSlot}>{title}</Text>
      <View style={Styles.endSlot}>{endComponent}</View>
    </View>
  );
};
