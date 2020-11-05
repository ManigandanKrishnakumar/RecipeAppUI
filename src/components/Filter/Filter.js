import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

import styles from './FilterStyles';

import Icon from 'react-native-vector-icons/EvilIcons';
import {connect} from 'react-redux';
import {setSortByFilterFlag} from '../../StateManagement/Actions/action-creators';

const Filter = ({label, value, showFilterModal}) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => {
        showFilterModal(true);
      }}>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.valueContainer}>
        <Text style={styles.value}>{value}</Text>
        <Icon name="chevron-down" style={styles.icon} />
      </View>
    </TouchableOpacity>
  );
};

const mapDispatchToProps = (dispatch) => ({
  showFilterModal: (flag) => dispatch(setSortByFilterFlag(flag)),
});

export default connect(null, mapDispatchToProps)(Filter);
