import React from 'react';
import {Image, Text, View} from 'react-native';

import styles from './RecipeItemStyles';
import Ratings from '../Ratings/Ratings';
import DifficultyIndicator from '../DifficultyIndicator/DifficultyIndicator';
import TimeIndicator from '../TimeIndicator/TimeIndicator';
import RecipeItemActions from '../RecipeItemActions/RecipeItemActions';

const RecipieItem = ({recipe}) => {
  return (
    <View style={styles.container}>
      <Image style={styles.recipeImage} source={{uri: recipe.image}} />
      <View style={styles.infoContainer}>
        <Text style={styles.recipeName}>{recipe.name}</Text>
        <Ratings rating={recipe.rating} />
        <View style={styles.difficultyAndTimeContainer}>
          <DifficultyIndicator difficulty={recipe.difficulty} />
          <TimeIndicator time={recipe.estimatedTime} />
        </View>
        <RecipeItemActions recipe={recipe} />
      </View>
    </View>
  );
};

export default RecipieItem;
