import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AccountMaker from './components/login/AccountMaker';
import { Constants } from 'expo';
//import TourFilter from './components/TourFilter'
import TourList from './components/TourList'
import 'expo';
export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <TourList/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: Constants.statusBarHeight,
    justifyContent: 'center',
  }, 
});
