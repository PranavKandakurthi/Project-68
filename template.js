
import React,{Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class ClassName extends Component {
 render(){
  return (
    <View style={styles.container}>
      <Text>Your Text Here</Text>
     
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
});
