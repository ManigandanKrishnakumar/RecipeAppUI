import React from 'react';
import {
  View,
  Text,
  Modal,
  Alert,
  SafeAreaView,
  FlatList,
  Platform,
} from 'react-native';

import styles from './FilterOptionsModalStyles';
import globalStyles from '../../Styles/GlobalStyles';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {SORT_BY_FILTER_VALUES} from '../../constants/app-constants';
import FilterOptionItem from '../FilterOptionItem/FilterOptionItem';
import {connect} from 'react-redux';
import {setSortByFilterFlag} from '../../StateManagement/Actions/action-creators';

const FilterOptionsModal = ({selectedValue, setFilterModalFlag, show}) => {
  return (
    <View style={styles.container}>
      <Modal animationType="slide" visible={show} transparent={true}>
        <SafeAreaView style={styles.contentContainer}>
          <View style={[styles.contentWrapper, globalStyles.shadow_1]}>
            <View style={styles.listContainer}>
              <FlatList
                data={SORT_BY_FILTER_VALUES}
                keyExtractor={(item) => item.id}
                renderItem={({item, index}) => {
                  return (
                    <FilterOptionItem
                      option={item.name}
                      isFirstItem={index === 0}
                      isSelected={item.name === selectedValue}
                    />
                  );
                }}
              />
            </View>
            {Platform.OS === 'ios' ? (
              <TouchableOpacity
                style={styles.cancelButton}
                onPress={() => {
                  setFilterModalFlag(false);
                }}>
                <Text style={styles.cancelText}>Cancel</Text>
              </TouchableOpacity>
            ) : null}
          </View>
        </SafeAreaView>
      </Modal>
    </View>
  );
};

const mapDispatchToProps = (dispatch) => ({
  setFilterModalFlag: (flag) => dispatch(setSortByFilterFlag(flag)),
});

export default connect(null, mapDispatchToProps)(FilterOptionsModal);
