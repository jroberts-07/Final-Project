import React from 'react';
import { StyleSheet, Text, View, Image, Button} from 'react-native';
import { AntDesign } from '@expo/vector-icons'; 

export default function App(props) {
  return (
    <View style={styles.container}>
    <AntDesign name="contacts" size={100} color="white"/>

  <View style={styles.addSquare}>
<Button title='Friends' type="outline"  color='white' onPress={()=> props.navigation.navigate('Contacts')} />
      </View>
  </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  text:{
  fontSize: 25,
  padding: 25,
  color: 'white',
  fontWeight: 'bold'
  },
  threebar: {
    position: 'absolute',
    left: 30,
    top: 30
  },
  addSquare:{
    height: 40,
    width: 80,
    backgroundColor: 'red',
  }

});