import {combineReducers} from 'redux';
import {composeMealReducer} from './ComposeMealReducer';
import {preparedRecipiesReducer} from './PreparedRecipiesReducer';
import {savedRecipiesReducer} from './SavedRecipiesReducer';

export default combineReducers({
  composeMealReducer,
  preparedRecipies: preparedRecipiesReducer,
  savedRecipies: savedRecipiesReducer,
});
