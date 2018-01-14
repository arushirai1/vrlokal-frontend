import React, {Component} from 'react'
import { View, Text, StyleSheet, TextInput, FlatList, Alert, ListView, Image } from 'react-native';
import { SearchBar, Button } from 'react-native-elements'

const onChangeLocation = (text) => {

}

export default class ToolbarFilter extends Component {
    render () {
        return (
            <View>
                <SearchBar
                    lightTheme
                    onChangeText={onChangeLocation}
                    placeholder='Location' />
                <View style={styles.buttonRow}>
                    <Button
                        style={styles.button}
                        backgroundColor='#72a35b'
                        fontSize={12}
                        borderRadius={5}
                        title="Dates"
                    />
                    <Button
                        style={styles.button}
                        backgroundColor='#72a35b'
                        borderRadius={5}
                        fontSize={12}
                        lightTheme
                        title="Guests"
                    />
                    <Button
                        style={styles.button}
                        backgroundColor='#72a35b'
                        borderRadius={5}
                        fontSize={12}
                        lightTheme
                        title='Categories'
                    />
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    buttonRow: {
        marginTop: 10,
        marginBottom: 10,
        flexDirection: 'row',
        alignContent:'flex-start'
      },
    button: {
        color: 'black',
        fontSize: 12,
        fontFamily: 'Serif',
    }
})