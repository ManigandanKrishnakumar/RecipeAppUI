/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from './src/screens/Home/Home';
import TabBar from './src/components/TabBar/TabBar';
import PopularRecipies from './src/screens/PopularRecipies/PopularRecipies';
import SavedRecipies from './src/screens/SavedRecipies/SavedRecipies';
import Settings from './src/screens/Settings/Settings';
import ComposeMealPage from './src/screens/ComposeMealPage/ComposeMealPage';
import PreparedRecipies from './src/screens/PreparedRecipies/PreparedRecipies';

import {Provider, connect} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import ReduxThunk from 'redux-thunk';
import reducers from './src/StateManagement/Reducers';
import {initializeSavedRecipies} from './src/StateManagement/Actions/action-creators';
import SplashScreen from 'react-native-splash-screen';
import {StatusBar} from 'react-native';
import {COLORS} from './src/Styles/Colors';

const Tabs = () => {
  const Root = createBottomTabNavigator();
  return (
    <Root.Navigator
      tabBar={(props) => <TabBar {...props} />}
      headerMode="none"
      initialRouteName="Home">
      <Root.Screen name="Home" component={Home} />
      <Root.Screen name="PopularRecipies" component={PopularRecipies} />
      <Root.Screen name="SavedRecipies" component={SavedRecipies} />
    </Root.Navigator>
  );
};

const Stacks = ({initializeRecipies}) => {
  const Root = createStackNavigator();
  useEffect(() => {
    initializeRecipies();
  }, [initializeRecipies]);
  return (
    <NavigationContainer>
      <Root.Navigator headerMode="none" initialRouteName="Tabs">
        <Root.Screen name="Tabs" component={Tabs} />
        <Root.Screen name="ComposeMeal" component={ComposeMealPage} />
        <Root.Screen name="PreparedRecipies" component={PreparedRecipies} />
      </Root.Navigator>
    </NavigationContainer>
  );
};

const mapDispatchToProps = (dispatch) => ({
  initializeRecipies: () => dispatch(initializeSavedRecipies()),
});

const StackScreens = connect(null, mapDispatchToProps)(Stacks);

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  });
  return (
    <Provider store={createStore(reducers, {}, applyMiddleware(ReduxThunk))}>
      <StackScreens />
    </Provider>
  );
};

export default App;
