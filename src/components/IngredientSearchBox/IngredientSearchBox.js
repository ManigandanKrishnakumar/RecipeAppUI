import React from 'react';
import {View, TextInput} from 'react-native';

import styles from './IngredientSearchBoxStyles';
import globalStyles from '../../Styles/GlobalStyles';

import IonIcon from 'react-native-vector-icons/Ionicons';
import {connect} from 'react-redux';
import {setSearchValue} from '../../StateManagement/Actions/action-creators';

const IngredientSearchBox = ({style, searchTerm, setSearchTerm}) => {
  return (
    <View style={[styles.container, style]}>
      <TextInput
        placeholder={'Type an ingredient'}
        style={styles.input}
        value={searchTerm}
        onChangeText={(text) => {
          setSearchTerm(text);
        }}
      />
      <View style={styles.iconContainer}>
        <IonIcon name="search" style={globalStyles.searchIconWhite} />
      </View>
    </View>
  );
};
const mapStateToProp = (state) => ({
  searchTerm: state.composeMealReducer.searchInput,
});

const mapDispatchToProp = (dispatch) => ({
  setSearchTerm: (value) => dispatch(setSearchValue(value)),
});
export default connect(mapStateToProp, mapDispatchToProp)(IngredientSearchBox);
