
import React, { Component } from 'react';
import { TouchableOpacity } from 'react-native';
import { StyleSheet, Text, View } from 'react-native';

export default class Fb extends Component {
  constructor() {
    super()

  }

  render(){
      return (
        <View style={styles.container}>
          <Text style={styles.title}>Facebook</Text>
          </View>
      )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
