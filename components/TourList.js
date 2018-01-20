import React, {Component} from 'react'
import { View, Text, StyleSheet, TextInput, FlatList, Button, Alert, ListView, Image } from 'react-native';
import {Avatar, Header, Tile, Rating} from 'react-native-elements'
import ToolbarFilter from './ToolbarFilter'
import {client} from '../graphql'
import gql from 'graphql-tag'
import {sleepSync} from '../utils'

const ds = new ListView.DataSource({ 
        rowHasChanged: (r1, r2) => r1 !== r2 });
export default class TourList extends React.Component {
    constructor (props) {         
        super (props); 
      } 
      
    state = {
        dataSource:ds.cloneWithRows(this.props.navigation.state.params.sampleData)
    }

    render() {
        /*while(this.state.dataSource == null) {
            //sleepSync(2)
            console.log("sleep: "+ this.state.dataSource)
        }*/
        return <View>
            <ToolbarFilter />
            <ListView dataSource={this.state.dataSource} renderRow={rowData => {
                const img = rowData.info.imgUrls[0];
                //const pic = rowData.user.pic;
                return <Tile
                    imageSrc={{uri:img}}
                    title={rowData.title}
                    contentContainerStyle={{height: 120}}
                >     
                <View>  
                {/*<View style={{flex: 2, flexDirection: 'row', justifyContent: 'space-between'}}>
                    <Text style={{flex:1}}>{rowData.categoryName[0]}</Text>
                    <View style={{flex: 1, flexDirection: 'column', justifyContent: 'space-between'}}>
                        <Avatar
                            rounded
                            source={{uri: rowData.user.pic}}
                            onPress={() => console.log("Works!")}
                            activeOpacity={0.7}
                        />
                        <Text>{rowData.user.name}</Text>
                    </View>
            </View> */}
                </View>
                </Tile>}}>
            </ListView>
          </View>;
    }
}


const styles = StyleSheet.create({
    title: {
        fontSize: 38,
        fontWeight: 'bold'
    },
    user: {
        fontSize: 13
    },
    category: {
        fontSize: 13,
        color: 'green'
    },
    seperator: {
        height: StyleSheet.hairlineWidth,
        flex: 1,
        backgroundColor: '#8E8E8E',
    }
})