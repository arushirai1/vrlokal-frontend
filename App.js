import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Header} from 'react-native-elements'
import AccountMaker from './components/login/AccountMaker';
import { Constants } from 'expo';
import TourFilter from './components/TourFilter'
import TourList from './components/TourList'
import 'expo';
import {client} from './graphql'
import {StackNavigator} from 'react-navigation'

const RootNavigation = StackNavigator({
  TourFilter: {name:'TourFilter',screen: TourFilter},
  TourList: {screen: TourList}
})

export default class App extends React.Component {
  render() {
    const location = {lat:37.322998,lon:-122.032182}
    return <View style={styles.container}>
        {/* <Header backgroundColor="#72a35b" leftComponent={{ icon: "menu", color: "#fff" }} centerComponent={{ text: "Lokal", style: { color: "#fff", fontSize:20, fontWeight:"bold" } }} rightComponent={{ icon: "home", color: "#fff" }} />
       <TourList
           limit={0}
           location = {location} 
           categories= {["test"]}
           maxDist={5}
           minDate="2018-12-03T10:15:30.000Z"
           maxDate="2019-12-03T10:15:30.000Z"
        />*/}
        <RootNavigation/>
      </View>;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  }, 
});
