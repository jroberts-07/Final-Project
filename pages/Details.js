
import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

export default function App() {

  const [pic1, setPic1] = useState();

  const loadFromGallery = async () => {
    const mediaPermission = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (mediaPermission.granted === false) {
      alert('Permission required to access local photo gallery');
      return;
    }
    const picRoll = await ImagePicker.launchImageLibraryAsync();
    if (picRoll.cancelled === true) {
      return;
    }
    setPic1(picRoll.uri);
    console.log(pic1);
  }

  
  return (
    <View style={styles.container}>

      <View style={{ justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize: 30, fontWeight: 'bold', marginBottom: 10 }}>Me</Text>
        {
          !pic1 ? (<Text style={{ padding: 80, fontSize: 20 }}>No Image</Text>) :
            <Image source={{ uri: pic1 }} style={{ width: 180, height: 180 }} resizeMode='stretch' />
        }
        <View style={{ flexDirection: 'row' }}>
          <View style={{ margin: 10 }}>
            <Button title='Load from gallery' onPress={loadFromGallery} />
          </View>
          <View style={{ margin: 10 }}>
            <Button title='Delete' onPress={() => setPic1()} /></View>
        </View>
      </View>

      <Text style={{ fontSize: 30, fontWeight: 'bold', padding: 20, color: 'white' }}>{props.route.params.firstname} {props.route.params.lastname}</Text>

      <Button title='Go Back' color='white' onPress={() => props.navigation.goBack()} /> 
      </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

/* /
  return (
  <View style={styles.container}>
    <Image style={styles.image} source={{ uri: picRoll }} />
    <Text style={{ fontSize: 30, fontWeight: 'bold', padding: 20, color: 'white' }}>{props.route.params.firstname} {props.route.params.lastname}</Text>
    <View style={styles.addSquare}>
    <Button title='Go Back' color='white' onPress={() => props.navigation.goBack()} /> 
      </View>
      </View>);  */

