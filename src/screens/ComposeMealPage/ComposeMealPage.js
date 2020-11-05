import React from 'react';
import {ScrollView, View, SafeAreaView} from 'react-native';
import CommonHeader from '../../components/CommonHeader/CommonHeader';

import styles from './ComposeMealPageStyles';
import globalStyles from '../../Styles/GlobalStyles';
import IndgridientCount from '../../components/IngredientCount/IndgridientCount';
import MyIngredients from '../../components/MyIngredients/MyIngredients';
import IconActionButton from '../../components/IconActionButton/IconActionButton';

import IonIcon from 'react-native-vector-icons/Ionicons';
import AddIngredients from '../../components/AddIngredients/AddIngredients';
import {connect} from 'react-redux';

import {setAddIngredient} from '../../StateManagement/Actions/action-creators';
import {setPreparedRecipies} from '../../StateManagement/Actions/action-creators';

import {withNavigation} from '@react-navigation/compat';

const ComposeMealPage = ({
  isAddIngredient,
  setAddIngredientFlag,
  navigation,
  ingredientsCount,
  setRecipies,
}) => {
  const SearchIcon = (
    <IonIcon name="search" style={globalStyles.searchIconWhite} />
  );

  const ListIcon = <IonIcon name="list" style={globalStyles.searchIconWhite} />;

  const ActionButton = !isAddIngredient ? (
    <IconActionButton
      buttonTitle="Search Recipes"
      icon={SearchIcon}
      onPress={() => {
        navigation.navigate('PreparedRecipies');
        setRecipies();
      }}
      isDisabled={ingredientsCount ? false : true}
    />
  ) : (
    <IconActionButton
      buttonTitle="Check my list"
      icon={ListIcon}
      onPress={() => {
        setAddIngredientFlag(false);
      }}
    />
  );
  return (
    <SafeAreaView style={styles.container}>
      <CommonHeader
        title="Compose Meal"
        showBack={true}
        endComponent={<IndgridientCount />}
      />
      <View style={styles.wrapper}>
        {isAddIngredient ? <AddIngredients /> : <MyIngredients />}
      </View>
      {ActionButton}
    </SafeAreaView>
  );
};

const mapStateToProps = (state) => ({
  isAddIngredient: state.composeMealReducer.addIngredients,
  ingredientsCount: state.composeMealReducer.myIngredients.length,
});

const mapDispatchToProps = (dispatch) => ({
  setAddIngredientFlag: (flag) => dispatch(setAddIngredient(flag)),
  setRecipies: () => dispatch(setPreparedRecipies()),
});

export default withNavigation(
  connect(mapStateToProps, mapDispatchToProps)(ComposeMealPage),
);
