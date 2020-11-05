import React from 'react';
import {ScrollView, SafeAreaView, Text, FlatList} from 'react-native';
import CommonHeader from '../../components/CommonHeader/CommonHeader';
import ChefButton from '../../components/ChefButton/ChefButton';
import RecipeItem from '../../components/RecipeItem/RecipeItem';

import styles from './PopularRecipiesStyles';
import {PREPARED_RECIPIES} from '../../constants/app-constants';

export default () => {
  return (
    <SafeAreaView style={styles.container}>
      <CommonHeader
        showBack={false}
        title="Popular Recipies"
        endComponent={<ChefButton />}
      />
      <FlatList
        data={PREPARED_RECIPIES}
        keyExtractor={(item) => item.id}
        renderItem={({item}) => <RecipeItem recipe={item} />}
        style={styles.list}
      />
    </SafeAreaView>
  );
};
