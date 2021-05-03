import React from 'react';
import { StyleSheet, Text, View, Image, Button} from 'react-native';

export default function App(props) {

  return (
  <View style={styles.container}>
    <Image style={styles.image} source={{ uri: props.route.params.image }} />
    <Text style={{ fontSize: 30, fontWeight: 'bold', padding: 20, color: 'white' }}>{props.route.params.firstname} {props.route.params.lastname}</Text>
    <View style={styles.addSquare}>
    <Button title='Go Back' color='white' onPress={() => props.navigation.goBack()} /> 
      </View>
      </View>);
}
  
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image:{
    width: 300,
    height: 200,
    resizeMode: 'contain',
  },
  addSquare:{
    height: 40,
    width: 90,
    backgroundColor: 'red',
    
  }
});