import React from 'react';
import {SafeAreaView, FlatList, View} from 'react-native';
import ChefButton from '../../components/ChefButton/ChefButton';
import CommonHeader from '../../components/CommonHeader/CommonHeader';
import RecipeItem from '../../components/RecipeItem/RecipeItem';

import styles from './SavedRecipiesStyles';
import {connect} from 'react-redux';

const SavedRecipies = ({recipes}) => {
  return (
    <SafeAreaView style={styles.container}>
      <CommonHeader title="Saved Recipies" endComponent={<ChefButton />} />
      <View style={styles.contentWrapper}>
        <FlatList
          data={recipes}
          keyExtractor={(item) => item.id}
          renderItem={({item}) => <RecipeItem recipe={item} />}
        />
      </View>
    </SafeAreaView>
  );
};

const mapStateToProps = (state) => {
  return {
    recipes: state.savedRecipies.recipies,
  };
};

export default connect(mapStateToProps)(SavedRecipies);
