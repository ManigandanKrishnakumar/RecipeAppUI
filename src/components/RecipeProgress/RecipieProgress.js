import React from 'react';
import {View, Image, Text} from 'react-native';

import styles from './RecipieProgressStyles';
import ProgressBar from '../ProgressBar/ProgressBar';
import {connect} from 'react-redux';

const RecipieProgress = ({progress}) => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require('../../Assets/images/HourGlass.png')}
        />
      </View>
      <View style={styles.progressContainer}>
        <ProgressBar progress={progress} />
        <Text style={styles.message}>Looking for your recipies</Text>
        <Text style={styles.pleaseWaitMessage}>Please wait a moment...</Text>
      </View>
    </View>
  );
};
const mapStateToProps = (state) => ({
  progress: state.preparedRecipies.progress,
});
export default connect(mapStateToProps)(RecipieProgress);
