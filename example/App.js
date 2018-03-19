/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react'
import { Platform, StyleSheet, Text, View } from 'react-native'

import FloatingLabelTextInput from 'react-native-floating-label-text-input'

type Props = {}

type State = {
  input: ?string,
}

export default class App extends Component<Props, State> {
  state = {
    input: null,
  }

  onChangeText = (text) => {
    this.setState({ input: text })
  }

  render() {
    return (
      <View style={styles.container}>
        <FloatingLabelTextInput
          containerStyle={{
            height: 45,
            width: 200,
          }}
          onChangeText={this.onChangeText}
          placeholder={`First name`}
          value={this.state.input}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
})
