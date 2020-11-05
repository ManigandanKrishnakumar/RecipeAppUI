import React from 'react';
import {View, Image} from 'react-native';
import styles from './GroupMenuStyles';
import GroupMenuButton from '../GroupMenuButton/GroupMenuButton';

export default () => {
  const menu = [
    {
      id: '1',
      title: 'Vege',
      icon: (
        <Image
          source={require('../../Assets/images/carrots.png')}
          width="100"
          height="100"
        />
      ),
    },
    {
      id: '2',
      title: 'Main dishes',
      icon: (
        <Image
          source={require('../../Assets/images/service.png')}
          width="100"
          height="100"
        />
      ),
    },
    {
      id: '3',
      title: 'Cakes',
      icon: (
        <Image
          source={require('../../Assets/images/ico_3.png')}
          width="100"
          height="100"
        />
      ),
    },
    {
      id: '4',
      title: 'Fast Food',
      icon: (
        <Image
          source={require('../../Assets/images/fast-food.png')}
          width="100"
          height="100"
        />
      ),
    },
    {
      id: '5',
      title: "Kid's Menu",
      icon: (
        <Image
          source={require('../../Assets/images/ico_5.png')}
          width="auto"
          height="auto"
        />
      ),
    },
    {
      id: '6',
      title: 'Soup',
      icon: (
        <Image
          source={require('../../Assets/images/water.png')}
          width="100"
          height="100"
        />
      ),
    },
  ];
  return (
    <View style={styles.container}>
      {menu.map((item) => (
        <GroupMenuButton title={item.title} icon={item.icon} key={item.id} />
      ))}
    </View>
  );
};
