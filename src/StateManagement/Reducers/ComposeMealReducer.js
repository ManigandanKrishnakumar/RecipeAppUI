import {COMPOSE_MEAL_ACTIONS} from '../Actions/action-name-constants';
import {Ingredients} from '../../constants/app-constants';
const INITIAL_STATE = {
  addIngredients: false,
  myIngredients: [],
  searchResult: [],
  searchInput: '',
};
export const composeMealReducer = (STATE = INITIAL_STATE, action) => {
  switch (action.type) {
    case COMPOSE_MEAL_ACTIONS.SET_ADD_INGREDIENT:
      return {...STATE, addIngredients: action.payload};
    case COMPOSE_MEAL_ACTIONS.SET_SEARCH_TERM:
      let searchResult;
      action.payload.length
        ? (searchResult = Ingredients.filter((item) =>
            item.name.toLowerCase().includes(action.payload.toLowerCase()),
          ))
        : (searchResult = []);
      return {
        ...STATE,
        searchInput: action.payload,
        searchResult: searchResult,
      };

    case COMPOSE_MEAL_ACTIONS.ADD_INGREDIENT: {
      const ingredients = [...STATE.myIngredients, action.payload];
      return {...STATE, myIngredients: ingredients};
    }

    case COMPOSE_MEAL_ACTIONS.REMOVE_INGREDIENT: {
      const ingredients = STATE.myIngredients.filter(
        (item) => item.id !== action.payload.id,
      );
      return {...STATE, myIngredients: ingredients};
    }
    default:
      return STATE;
  }
};
