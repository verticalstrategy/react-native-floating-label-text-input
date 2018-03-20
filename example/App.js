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
  firstName: ?string,
  lastName: ?string,
  company: ?string,
  bio: ?string,
  password: ?string,
}

export default class App extends Component<Props, State> {
  state = {
    firstName: null,
    lastName: null,
    company: null,
    bio: null,
    password: null,
  }

  onChangeText = (key: string, text: string) => {
    this.setState({ [key]: text })
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={[styles.row, { flexDirection: 'row' }]}>
          <View style={[styles.column, { flex: 1 }]}>
            <FloatingLabelTextInput
              containerStyle={styles.textInputContainer}
              labelStyle={styles.textInputLabel}
              onChangeText={this.onChangeText.bind(this, 'firstName')}
              placeholder={`First name`}
              placeholderTextColor="#76d6ff"
              style={styles.textInput}
              value={this.state.firstName}
            />
          </View>
          <View style={[styles.column, { flex: 1 }]}>
            <FloatingLabelTextInput
              containerStyle={styles.textInputContainer}
              labelStyle={styles.textInputLabel}
              onChangeText={this.onChangeText.bind(this, 'lastName')}
              placeholder={`Last name`}
              placeholderTextColor="#76d6ff"
              style={styles.textInput}
              value={this.state.lastName}
            />
          </View>
        </View>
        <View style={styles.row}>
          <View style={styles.column}>
            <FloatingLabelTextInput
              containerStyle={styles.textInputContainer}
              labelStyle={styles.textInputLabel}
              onChangeText={this.onChangeText.bind(this, 'company')}
              placeholder={`Company`}
              placeholderTextColor="#76d6ff"
              style={styles.textInput}
              value={this.state.company}
            />
          </View>
        </View>
        <View style={styles.row}>
          <View style={styles.column}>
            <FloatingLabelTextInput
              containerStyle={[styles.textInputContainer, { height: 111 }]}
              label={`Biography`}
              labelStyle={styles.textInputLabel}
              multiline={true}
              onChangeText={this.onChangeText.bind(this, 'bio')}
              placeholder={`Write a short biography about yourself.`}
              placeholderTextColor="#76d6ff"
              style={styles.textInput}
              value={this.state.bio}
            />
          </View>
        </View>
        <View style={styles.row}>
          <View style={styles.column}>
            <FloatingLabelTextInput
              containerStyle={styles.textInputContainer}
              labelStyle={styles.textInputLabel}
              onChangeText={this.onChangeText.bind(this, 'password')}
              placeholder={`Password`}
              placeholderTextColor="#76d6ff"
              secureTextEntry={true}
              style={styles.textInput}
              value={this.state.password}
            />
          </View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#005493',
    flex: 1,
    padding: 40,
  },

  row: {
    padding: 4,
  },

  column: {
    paddingLeft: 4,
    paddingRight: 4,
  },

  textInputContainer: {
    backgroundColor: '#0096ff',
    borderRadius: 5,
    height: 45,
    width: '100%',
    padding: 8,
  },

  textInputLabel: {
    fontFamily: 'Avenir Next',
    fontSize: 10,
    color: '#76d6ff',
  },

  textInput: {
    fontFamily: 'Avenir Next',
    color: 'white',
  },
})
