import {SAVED_RECIPIES_ACTIONS} from '../Actions/action-name-constants';

const INITIAL_STATE = {
  recipies: [],
};

export const savedRecipiesReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SAVED_RECIPIES_ACTIONS.INITIALIZE: {
      return {...state, recipies: [...action.payload]};
    }
    case SAVED_RECIPIES_ACTIONS.ADD_TO_SAVED_RECIPIES: {
      const savedRecipies = [...state.recipies, action.payload];
      return {...state, recipies: savedRecipies};
    }
    case SAVED_RECIPIES_ACTIONS.DELETE_RECIPIE: {
      const recipies = state.recipies.filter(
        (recipie) => recipie.id !== action.payload.id,
      );
      return {...state, recipies};
    }
    default:
      return state;
  }
};
