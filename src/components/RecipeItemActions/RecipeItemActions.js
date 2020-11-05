import React from 'react';
import {View, TouchableOpacity, Text} from 'react-native';

import styles from './RecipeItemActionsStyles';

import IonIcon from 'react-native-vector-icons/Ionicons';
import {connect} from 'react-redux';
import {
  addToSavedRecipies,
  deleteRecipe,
} from '../../StateManagement/Actions/action-creators';

const RecipeItemActions = ({
  isSaved,
  recipe,
  saveRecipe,
  savedRecipies,
  deleteSavedRecipe,
}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={[styles.actionButton, styles.checkButton]}>
        <Text style={styles.checkText}>Check Recipe</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.actionButton, styles.iconButton]}
        onPress={() => {
          !isSaved
            ? saveRecipe(recipe, savedRecipies)
            : deleteSavedRecipe(recipe, savedRecipies);
        }}>
        <IonIcon
          name={isSaved ? 'bookmark' : 'bookmark-outline'}
          style={styles.icon}
        />
      </TouchableOpacity>

      <TouchableOpacity style={[styles.actionButton, styles.iconButton]}>
        <IonIcon name="share-social" style={styles.icon} />
      </TouchableOpacity>
    </View>
  );
};

const mapStateToProps = (state, ownProps) => {
  return {
    isSaved: state.savedRecipies.recipies.length
      ? state.savedRecipies.recipies.find(
          (recipe) => ownProps.recipe.id === recipe.id,
        )
      : false,
    savedRecipies: state.savedRecipies.recipies,
  };
};

const mapDispatchToProps = (dispatch) => ({
  saveRecipe: (recipe, savedRecipies) =>
    dispatch(addToSavedRecipies(recipe, savedRecipies)),
  deleteSavedRecipe: (recipie, savedRecipies) =>
    dispatch(deleteRecipe(recipie, savedRecipies)),
});

export default connect(mapStateToProps, mapDispatchToProps)(RecipeItemActions);
