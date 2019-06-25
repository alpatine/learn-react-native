import React, { Component } from 'react';
import { AppRegistry, Text, View } from 'react-native';

class Blink extends Component {
  
  // state object
  state = {
    isShowingText: true
  };

  componentDidMount() {
    // Toggle the state every second
    setInterval(() => {
      this.setState(previousState => (
        { isShowingText: !previousState.isShowingText }
      ))
    }, 1000);
  }

  render() {
    if (!this.state.isShowingText) {
      return null;
    }

    return (
      <Text>{this.props.text}</Text>
    );
  }
}

export default class BlinkApp extends Component {
  render() {
    return (
      <View>
        <Blink text='I love to blink!' />
        <Blink text='Yes blinking is so great' />
        <Blink text='Why did they ever take this out of HTML' />
        <Blink text='Look at me look at me look at me' />
      </View>
    );
  }
}

AppRegistry.registerComponent('AwesomeProject', () => BlinkApp);
