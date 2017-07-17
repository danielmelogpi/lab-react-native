import React from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';
import catImage from './cat.gif';

export default class App extends React.Component {

  constructor() {
    super();
    this.state = {secondText : 'the second text content'};
  }


  changeSecondText(event) {
    this.state.secondText=  'the second text has changed.. ' + Math.ceil(Math.random() * 10000);
    this.forceUpdate();
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>We have a text here!</Text>
        <Button title="a thing here" style="styles.button" onPress={(event) => this.changeSecondText(event)}></Button>
        <Text>{this.state.secondText}</Text>
        <Image source={catImage}></Image>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    fontFamily: 'Comic Sans'
  }
});
