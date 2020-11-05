import {PREPARED_RECIPIES_ACTIONS} from '../Actions/action-name-constants';
import {SORT_BY_FILTER_VALUES} from '../../constants/app-constants';

const INITIAL_STATE = {
  recipies: [],
  sortByFilterValue: SORT_BY_FILTER_VALUES[0].name,
  showSortByFilterModal: false,
  isLoading: false,
  progress: '0%',
};

export const preparedRecipiesReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case PREPARED_RECIPIES_ACTIONS.SET_SORT_BY_FILTER_VALUE: {
      return {
        ...state,
        sortByFilterValue: action.payload,
        recipies: [...state.recipies.sort(sortFunctions[action.payload])],
      };
    }
    case PREPARED_RECIPIES_ACTIONS.SET_FILTER_MODAL_FLAG: {
      return {...state, showSortByFilterModal: action.payload};
    }
    case PREPARED_RECIPIES_ACTIONS.SET_PREPARED_RECIPIES: {
      return {...state, recipies: action.payload};
    }
    case PREPARED_RECIPIES_ACTIONS.SET_IS_LOADING: {
      return {...state, isLoading: action.payload};
    }
    case PREPARED_RECIPIES_ACTIONS.SET_PROGRESS: {
      return {...state, progress: action.payload};
    }
    default:
      return state;
  }
};

const sortFunctions = {
  Popular: (a, b) => {
    return parseInt(a.rating) - parseInt(b.rating);
  },
  Rating: (a, b) => {
    return parseInt(b.rating) - parseInt(a.rating);
  },
  Difficulty: (a, b) => {
    return a.difficulty - b.difficulty;
  },
};
