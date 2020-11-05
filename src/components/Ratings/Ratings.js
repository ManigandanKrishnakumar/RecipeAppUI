import React, {useEffect, useState} from 'react';
import {View, Text} from 'react-native';

import styles from './RatingsStyles';

import MatIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import {RATINGS_ARRAY} from '../../constants/app-constants';

const Ratings = ({rating}) => {
  const [ratingArray, setRatingArray] = useState(RATINGS_ARRAY);
  useEffect(() => {
    const tempRating = [...ratingArray];
    for (let index = 0; index < Math.floor(rating); index++) {
      tempRating[index] = 1;
    }

    setRatingArray(tempRating);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [rating]);
  return (
    <View style={styles.container}>
      <View style={styles.ratingContainer}>
        {ratingArray.map((rate, i) => (
          <MatIcon
            key={i.toString()}
            name="chef-hat"
            style={[styles.rateIcon, rate ? styles.highlightRate : null]}
          />
        ))}
        <Text style={styles.rateText}>{rating}</Text>
      </View>
    </View>
  );
};

export default Ratings;
