import React from 'react';
import {TouchableOpacity, Text, Platform} from 'react-native';

import styles from './FilterOptionItemStyles';
import {connect} from 'react-redux';
import {
  setSorByFilterValue,
  setSortByFilterFlag,
} from '../../StateManagement/Actions/action-creators';

const FilterOptionItem = ({
  option,
  isFirstItem,
  isSelected,
  setSelectedValue,
  setSortByFilterModalFlag,
}) => {
  return (
    <TouchableOpacity
      style={[styles.container, isFirstItem ? styles.firstContainer : null]}
      onPress={() => {
        setSelectedValue(option);
        Platform.OS === 'android' ? setSortByFilterModalFlag(false) : null;
      }}>
      <Text
        style={[
          styles.text,
          isSelected ? styles.selectedText : {color: '#000'},
        ]}>
        {option}
      </Text>
    </TouchableOpacity>
  );
};

const mapDispatchToProp = (dispatch) => ({
  setSelectedValue: (value) => dispatch(setSorByFilterValue(value)),
  setSortByFilterModalFlag: (flag) => dispatch(setSortByFilterFlag(flag)),
});

export default connect(null, mapDispatchToProp)(FilterOptionItem);
