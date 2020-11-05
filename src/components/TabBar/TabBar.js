import React from 'react';
import {View, Text, TouchableOpacity, SafeAreaView, Image} from 'react-native';

import styles from './TabBarStyles';

import IonIcon from 'react-native-vector-icons/Ionicons';
import MatCommIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import EvilIcon from 'react-native-vector-icons/EvilIcons';

function TabBar({state, descriptors, navigation}) {
  const buttonImages = {
    Home: (
      <View style={styles.iconContainer}>
        <IonIcon name="home-outline" style={styles.icon} />
      </View>
    ),
    PopularRecipies: (
      <View style={styles.iconContainer}>
        <MatCommIcon name="chef-hat" style={styles.icon} />
      </View>
    ),
    SavedRecipies: (
      <View style={styles.iconContainer}>
        <IonIcon name="bookmark-outline" style={styles.icon} />
      </View>
    ),
    PreparedRecipies: (
      <View
        style={[
          styles.composeMealContainer,
          styles.iconContainer,
          styles.orangeShadow,
        ]}>
        <IonIcon
          name="search-outline"
          style={[styles.icon, styles.composeMealIcon]}
        />
      </View>
    ),
    Settings: (
      <View style={styles.iconContainer}>
        <EvilIcon name="gear" style={[styles.icon, {fontSize: 37}]} />
      </View>
    ),
  };

  const focusedOptions = descriptors[state.routes[state.index].key].options;

  if (focusedOptions.tabBarVisible === false) {
    return null;
  }

  return (
    // <SafeAreaView style={styles.wrapper}>
    // <View style={{overflow: 'hidden', paddingTop: 20}}>
    <View style={[styles.container, styles.shadow]}>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            key={route.name}
            accessibilityRole="button"
            accessibilityStates={isFocused ? ['selected'] : []}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={[
              isFocused && route.name !== 'PreparedRecipies'
                ? styles.borderBottom
                : null,
              styles.button,
            ]}>
            {/* <Text style={{color: isFocused ? '#673ab7' : '#222'}}>
                {label}
              </Text> */}
            {buttonImages[route.name]}
          </TouchableOpacity>
        );
      })}
    </View>
    // </View>
    // </SafeAreaView>
  );
}

export default TabBar;
