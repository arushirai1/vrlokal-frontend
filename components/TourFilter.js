import React, { Component } from "react";
import { StyleSheet, Text, View, Picker } from 'react-native';
import Expo from 'expo'
import DatePicker from 'react-native-datepicker';
import { FormLabel, FormInput, Button} from 'react-native-elements';
import {client} from '../graphql'
import gql from 'graphql-tag'
const key = "AIzaSyD7uiW1jDzGqQxYT9lSvUckploygNRaoNw";
const _onChangeText = () => {};
async function getLocationAsync() {
    const { Location, Permissions } = Expo;
    const { status } = await Permissions.askAsync(Permissions.LOCATION);
    if (status === 'granted') {
      return Location.getCurrentPositionAsync({enableHighAccuracy: true});
    } else {
      throw new Error('Location permission not granted');
    }
  }

export default class TourFilter extends Component {
    constructor (props) {
        super(props);
    }
    state = {
        location: "",
        dist: "20",
        category: "test",
        startDate: new Date(),
        endDate: new Date()
    }
    componentDidMount() {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            try{
                const locationStr = ""+position.coords.latitude + ", " + position.coords.longitude;
                this.setState({
                    location: locationStr,
                  });
                  console.log("loco: "+this.state.location);
            } catch (e) {
                console.log("error: " +e);
            }

          },
          (error) => this.setState({ error: error.message }),
          { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 },
        );
      }
    render() {
        const {navigation} = this.props
        return (
            <View style={styles.container}>
                <FormLabel>Location</FormLabel>
                <FormInput 
                    value={this.state.location}
                    onChangeText={_onChangeText}/>
                <FormLabel>Distance from </FormLabel>
                <Picker
                    style={styles.distPicker}
                    selectedValue={this.state.dist}
                    onValueChange={(itemValue, itemIndex) => this.setState({dist: itemValue})}>
                    <Picker.Item label="5 miles" value="5" />
                    <Picker.Item label="20 miles" value="20" />
                    <Picker.Item label="50 miles" value="50" />                    
                    <Picker.Item label="100 miles" value="100" />
                    <Picker.Item label="200 miles" value="200" />
                </Picker>
                <FormLabel>Categories </FormLabel>
                <Picker
                    style={styles.distPicker}
                    selectedValue={this.state.category}
                    onValueChange={(itemValue, itemIndex) => this.setState({category: itemValue})}>
                    <Picker.Item label="test" value="test" />
                </Picker> 
                <FormLabel>Date Range</FormLabel>  
                <View style={styles.datesView}>
                <DatePicker
                    style={{width: 200}}
                    date={this.state.startDate}
                    mode="date"
                    placeholder="select date"
                    format="YYYY-MM-DD"
                    confirmBtnText="Confirm"
                    cancelBtnText="Cancel"
                    customStyles={{
                    dateIcon: {
                        left: 0,
                        top: 4,
                        marginLeft: 0
                    },
                    dateInput: {
                        marginLeft: 36
                    }
                    }}
                    onDateChange={(date) => {
                        this.setState({startDate: date})
                        console.log(new Date(date))    
                    }}
                />
                <Text style={styles.text}> to </Text>
                <DatePicker
                    style={{width: 200, marginBottom: 50}}
                    date={this.state.endDate}
                    mode="date"
                    placeholder="select date"
                    format="YYYY-MM-DD"
                    confirmBtnText="Confirm"
                    cancelBtnText="Cancel"
                    customStyles={{
                    dateIcon: {
                        left: 0,
                        top: 4,
                        marginLeft: 0
                    },
                    dateInput: {
                        marginLeft: 36
                    }
                    }}
                    onDateChange={(date) => {this.setState({endDate: date})}}
                />
            <Button title="Search"
                backgroundColor="#72a35b"
                borderRadius={10}
                onPress={() => {
                    const temp = this.state.location.split(',');
                    const loc = {lat:parseFloat(temp[0]), lon:parseFloat(temp[1])};
                    client.query({
                        query: gql`
                        query Test($limit:Int, $location: LocationInputType, $categories: [String], $maxDist: Int, $minDate: DateTime, $maxDate: DateTime ) {
                            tours(limit:$limit, location:$location, categories:$categories, maxDist:$maxDist, minDate:$minDate, maxDate:$maxDate){
                              _id
                              title
                              userId
                              categoryId
                              info {
                                provide
                                bring
                                des
                                imgUrls
                              }
                              path {
                                lat
                                lon
                              }
                              specificDates
                            }
                          }
                        `,variables: {
                            limit:0, 
                            location: loc, 
                            categories: this.state.categories, 
                            maxDist: this.state.dist, 
                            minDate: new Date(this.state.startDate), 
                            maxDate: new Date(this.state.endDate)
                        }
                      })
                        .then(data => {
                            sampleData=data.data.tours;
                            navigation.navigate('TourList', {sampleData:sampleData})
                        })
                        .catch(error => console.error(error));
                }}
                style={styles.submitButton}/>
            </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: 300,
        flexDirection: 'column',
        justifyContent: "center",
        alignContent: "center"
    },
    datesView: {
        flex:1,
        height:100,
        flexDirection:'column',
        alignContent:"center",
        marginTop:10
    },
    distPicker : {
        marginLeft: 20,
    },
    text: {
        marginLeft:50,
        marginTop: 10,
        fontSize: 15
    },
    submitButton: {
        marginTop: 40,
    }
})