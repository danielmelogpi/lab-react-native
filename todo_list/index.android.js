
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import ListItem from './src/components/ListItem.js'


/// https://facebook.github.io/react-native/docs/flexbox.html

export default class todo_list extends Component {

  constructor(props) {
    super(props)
  }

  getExperiments() {
    return [
        { name: "Manipulate image" },
        { name: "Some inputs" }
      ]
  }

  render() {
    
    let listExperiments = this.getExperiments().map((x) => (<ListItem text={x.name}></ListItem>) )
    
    return (
      <View>
        <Text>Hello world. This is a very exciting day</Text>
        {listExperiments}
      </View>
    );
  }
}

AppRegistry.registerComponent('todo_list', () => todo_list);
