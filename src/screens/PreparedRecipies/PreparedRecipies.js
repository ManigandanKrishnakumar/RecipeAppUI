import React, {useEffect} from 'react';
import {SafeAreaView, View, FlatList} from 'react-native';
import CommonHeader from '../../components/CommonHeader/CommonHeader';

import styles from './PreparedRecipiesStyles';
import ResultCount from '../../components/ResultCount/ResultCount';
import Filter from '../../components/Filter/Filter';
import FilterOptionsModal from '../../components/FilterOptionsModal/FilterOptionsModal';
import {connect} from 'react-redux';

import RecipieItem from '../../components/RecipeItem/RecipeItem';
import RecipieProgress from '../../components/RecipeProgress/RecipieProgress';

const PreparedRecipies = ({
  sortByFilterValue,
  showSortByFilterOptions,
  recipies,
  isLoading,
}) => {
  return (
    <>
      <SafeAreaView
        style={[styles.statusBar, isLoading ? styles.loadingStatusBar : null]}
      />
      <SafeAreaView style={styles.container}>
        <CommonHeader
          showBack={true}
          title={isLoading ? 'Preparing Recipies' : 'Prepared Recipies'}
          isLoading={isLoading}
        />

        {!isLoading ? (
          <View style={styles.contentContainer}>
            <View style={styles.filterContainer}>
              <ResultCount />
              <Filter value={sortByFilterValue} label="Sort By: " />
            </View>

            <View style={styles.resultsContainer}>
              <FlatList
                data={recipies}
                keyExtractor={(item) => item.id}
                renderItem={({item}) => {
                  return <RecipieItem recipe={item} />;
                }}
              />
            </View>
          </View>
        ) : (
          <RecipieProgress />
        )}

        <FilterOptionsModal
          selectedValue={sortByFilterValue}
          show={showSortByFilterOptions}
        />
      </SafeAreaView>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    recipies: state.preparedRecipies.recipies,
    sortByFilterValue: state.preparedRecipies.sortByFilterValue,
    showSortByFilterOptions: state.preparedRecipies.showSortByFilterModal,
    isLoading: state.preparedRecipies.isLoading,
  };
};

export default connect(mapStateToProps)(PreparedRecipies);
