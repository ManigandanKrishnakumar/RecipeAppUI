import {
  COMPOSE_MEAL_ACTIONS,
  PREPARED_RECIPIES_ACTIONS,
  SAVED_RECIPIES_ACTIONS,
} from './action-name-constants';
import {
  saveRecipies,
  fetchSavedRecipies,
  fetchPreparedRecipies,
} from '../../Services/RecipeService';

export const setAddIngredient = (flag) => {
  return {
    type: COMPOSE_MEAL_ACTIONS.SET_ADD_INGREDIENT,
    payload: flag,
  };
};

export const setSearchValue = (searchTerm) => {
  return {
    type: COMPOSE_MEAL_ACTIONS.SET_SEARCH_TERM,
    payload: searchTerm,
  };
};

export const addIngredient = (item) => {
  return {
    type: COMPOSE_MEAL_ACTIONS.ADD_INGREDIENT,
    payload: item,
  };
};

export const removeIngredient = (item) => {
  return {
    type: COMPOSE_MEAL_ACTIONS.REMOVE_INGREDIENT,
    payload: item,
  };
};

// PREPARED RECIPIES
export const setPreparedRecipies = () => {
  return (dispatch) => {
    dispatch({type: PREPARED_RECIPIES_ACTIONS.SET_IS_LOADING, payload: true});
    const onProgress = (progress) => {
      dispatch({
        type: PREPARED_RECIPIES_ACTIONS.SET_PROGRESS,
        payload: progress,
      });
    };
    fetchPreparedRecipies(onProgress).then((result) => {
      dispatch({
        type: PREPARED_RECIPIES_ACTIONS.SET_PREPARED_RECIPIES,
        payload: result,
      });
      dispatch({
        type: PREPARED_RECIPIES_ACTIONS.SET_IS_LOADING,
        payload: false,
      });
    });
  };
};

export const setSortByFilterFlag = (flag) => {
  return {
    type: PREPARED_RECIPIES_ACTIONS.SET_FILTER_MODAL_FLAG,
    payload: flag,
  };
};

export const setSorByFilterValue = (value) => {
  return {
    type: PREPARED_RECIPIES_ACTIONS.SET_SORT_BY_FILTER_VALUE,
    payload: value,
  };
};

// SAVED RECIPIES
export const initializeSavedRecipies = () => {
  return (dispatch) => {
    fetchSavedRecipies().then((recipes) => {
      if (recipes) {
        dispatch({
          type: SAVED_RECIPIES_ACTIONS.INITIALIZE,
          payload: recipes,
        });
      }
    });
  };
};

export const addToSavedRecipies = (value, savedRecipies) => {
  return (dispatch) => {
    saveRecipies([...savedRecipies, value]).then(() => {
      dispatch({
        type: SAVED_RECIPIES_ACTIONS.ADD_TO_SAVED_RECIPIES,
        payload: value,
      });
    });
  };
};

export const deleteRecipe = (recipe, savedRecipies) => {
  return (dispatch) => {
    const recipies = savedRecipies.filter((r) => r.id !== recipe.id);
    saveRecipies(recipies).then(() => {
      dispatch({
        type: SAVED_RECIPIES_ACTIONS.DELETE_RECIPIE,
        payload: recipe,
      });
    });
  };
};
