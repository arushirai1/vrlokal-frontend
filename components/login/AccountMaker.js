import React, {Component} from 'react'
import { View, Text, StyleSheet, TextInput, FlatList, Button, Alert } from 'react-native';

//let width = Dimensions.get('window').width;
const accountPrefill=[
    {id:0, placeholder:'Full Name'},
    {id:1, placeholder:'Email'},
    {id:2, placeholder:'Enter password'}, 
    {id:3, placeholder:'Street Name'}, 
    {id:4, placeholder:'City'}, 
    {id:5, placeholder:'Country'},
    {id:6, placeholder:'Zip Code'},
    {id:7, placeholder:'State'}];

const extractKey = ({id}) => id

export default class AccountMaker extends React.Component{
  state = {
    name:'',
    email:'',
    password:'', 
    street:'', 
    city:'', 
    country:'USA',
    zip:'',
    sta:'',
  }

  _handleTextChange = name => { };
  _handleButtonPress = () => {
    Alert.alert(
        'Button pressed!',
        'You did it!',
      );
  }
 
  render() {
    
    return (
      <View>
        <Text>
            User Details
        </Text>
        <TextInput
          value={this.state.name}
          placeholder={accountPrefill[0].placeholder}
          id={accountPrefill[0].id}
          style={styles.input}
          onChangeText={(name) => this.setState({name})}
        /> 
        <TextInput
          value={this.state.email}
          placeholder={accountPrefill[1].placeholder}
          id={accountPrefill[1].id}
          style={styles.input}
          keyboardType='email-address'
          onChangeText={(email) => this.setState({email})}
        /> 
        <TextInput
          value={this.state.password}
          placeholder={accountPrefill[2].placeholder}
          id={accountPrefill[2].id}
          style={styles.input}
          secureTextEntry={true}
          onChangeText={(password) => this.setState({password})}
        />
        <Text
            style={styles.text}>
            Address
        </Text>
        <TextInput
          value={this.state.street}
          placeholder={accountPrefill[3].placeholder}
          id={accountPrefill[3].id}
          style={styles.input}
          onChangeText={(street) => this.setState({street})}
        />
        <TextInput
          value={this.state.city}
          placeholder={accountPrefill[4].placeholder}
          id={accountPrefill[4].id}
          style={styles.input}
          onChangeText={(city) => this.setState({city})}
        />
        <TextInput
          value={this.state.sta}
          placeholder={accountPrefill[7].placeholder}
          id={accountPrefill[7].id}
          style={styles.input}
          onChangeText={(sta) => this.setState({sta})}
        />
        <TextInput
          value={this.state.country}
          placeholder={accountPrefill[5].placeholder}
          id={accountPrefill[5].id}
          style={styles.input}
          onChangeText={(country) => this.setState({country})}
        />
        <TextInput
          value={this.state.zip}
          placeholder={accountPrefill[6].placeholder}
          id={accountPrefill[6].id}
          style={styles.input}
          onChangeText={(zip) => this.setState({zip})}
        />

        <Button
            style={styles.save}
            title="Create Account"
            onPress={this._handleButtonPress}/>
      </View>
      )
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },
  input: {
    width: 300,
    height: 44, 
    padding: 8,
  },
  text: {
    marginTop: 20,
  },
  save: {
    marginTop: 20,
  }
})