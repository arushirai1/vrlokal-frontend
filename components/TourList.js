import React, {Component} from 'react'
import { View, Text, StyleSheet, TextInput, FlatList, Button, Alert, ListView, Image } from 'react-native';
import {Header} from 'react-native-elements'
import ToolbarFilter from './ToolbarFilter'
const sampleData = [{
    "_id":"5a557f7edef4fd1288970af4",
    "title":"Test2Tour",
    "path":[{"lat":37.322998,"lon":-122.032182}],
    "userId":"5a505f940387dea882210931",
    "categoryName":["Food & Drink"],
    "info":{
        "provide":"Nothing",
        "bring":"Everything",
        "des":"This is a test tour where you get everything",
        "imgUrls":["http://www.visitcalifornia.com/sites/default/files/styles/welcome_image/public/VC_NavigateBigSur_GarrapataStatePark_Stock_RM_E1AJNB_1280x640.jpg"]},
        "maxUsers":4,
        "repeat":null,
        "specificDates":["2018-12-03T10:15:30.000Z"]}
    ]

export default class TourList extends React.Component {
    constructor (props) { 
 
        super (props); 
     
        const ds = new ListView.DataSource({ 
          rowHasChanged: (r1, r2) => r1 !== r2 }); 
     
        this.state = { 
          dataSource: ds.cloneWithRows(sampleData) 
        }; 
      } 
    render() {
        return <View>
            <Header 
                backgroundColor='#72a35b'
                leftComponent={{ icon: "menu", color: "#fff" }} 
                centerComponent={{ text: "Lokal", style: { color: "#fff" } }} 
                rightComponent={{ icon: "home", color: "#fff" }} />

            <ToolbarFilter />
            <ListView dataSource={this.state.dataSource} renderRow={rowData => {
                const img = rowData.info.imgUrls[0];
                return <View>
                    <Image style={{ height: 200, width: 400 }} source={{ uri: img }} />
                    <Text style={styles.title}>{rowData.title}</Text>
                    <Text style={styles.category}>
                      {rowData.categoryName[0]}
                    </Text>
                    <Text> {rowData.info.des}</Text>
                  </View>;
              }}>
              //renderSeparator={(sectionId, rowId) => <View key={rowId} style={styles.separator} />}
              {" "}
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