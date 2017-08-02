
import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View
} from 'react-native';



export default class ListItem extends Component {
    render() {
        return (
            <Text style={styles.item}>{this.props.text}</Text>
        )
    }
}

const styles = StyleSheet.create({
    item: {
        borderWidth: 2,
        borderColor: "#cdcdcd",
        borderStyle: "solid",
        height: 50, 
        alignContent: "center",
        paddingTop: 10,
        paddingLeft: 10,
        fontWeight: "bold",
        color: "green",
        backgroundColor: "#ededed"
    }
})


AppRegistry.registerComponent('ListItem', () => ListItem);