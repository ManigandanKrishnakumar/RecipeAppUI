import React from 'react';
import {SafeAreaView, ScrollView, StatusBar} from 'react-native';
import CommonHeader from '../../components/CommonHeader/CommonHeader';
import styles from './HomeStyle';
import ChefButton from '../../components/ChefButton/ChefButton';
import PromoRecipies from '../../components/PromoRecipies/PromoRecipies';
import GroupMenu from '../../components/GroupMenu/GroupMenu';
import ComposeMeal from '../../components/ComposeMeal/ComposeMeal';

export default () => {
  return (
    <>
      <SafeAreaView style={styles.container}>
        <CommonHeader title="Recipe App" endComponent={<ChefButton />} />
        <ScrollView>
          <PromoRecipies />
          <GroupMenu />
          <ComposeMeal />
        </ScrollView>
      </SafeAreaView>
    </>
  );
};
