import React, {useEffect, useState} from 'react';
import {View, Text, Image} from 'react-native';

import styles, {starStyles} from './DifficultyIndicatorStyles';
import AntIcon from 'react-native-vector-icons/AntDesign';

import {DIFFICULTY_LEVELS} from '../../constants/app-constants';

const DifficultyStars = ({difficulty}) => {
  const [stars, setStars] = useState([0, 0, 0]);
  useEffect(() => {
    const tempStars = [...stars];
    for (let i = 0; i < difficulty; i++) {
      tempStars[i] = 1;
    }
    setStars(tempStars);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [difficulty]);
  return (
    <View style={starStyles.container}>
      <View style={starStyles.rowOne}>
        <AntIcon
          name="star"
          style={[starStyles.icon, stars[2] ? starStyles.selectedIcon : null]}
        />
      </View>
      <View style={starStyles.rowTwo}>
        <AntIcon
          name="star"
          style={[starStyles.icon, stars[0] ? starStyles.selectedIcon : null]}
        />
        <AntIcon
          name="star"
          style={[starStyles.icon, stars[1] ? starStyles.selectedIcon : null]}
        />
      </View>
    </View>
  );
};

const DifficultyIndicator = ({difficulty}) => {
  return (
    <View style={styles.container}>
      <DifficultyStars difficulty={difficulty} />
      <Text style={styles.difficultyText}>{DIFFICULTY_LEVELS[difficulty]}</Text>
    </View>
  );
};

export default DifficultyIndicator;
