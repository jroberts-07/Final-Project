import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';

const friends = [
  { firstname: 'Tony', lastname: 'Stark', image: 'https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fblogs-images.forbes.com%2Falishagrauso%2Ffiles%2F2016%2F05%2FIron-Man-Robert-Downey-Jr-Interview-1200x600.jpg', key: 0 },
  { firstname: 'Thor', lastname: 'Odinson', image:  'https://www.cinemascomics.com/wp-content/uploads/2020/04/fat-thor-960x574.jpg',  key: 1 },
  { firstname: 'Peter', lastname: 'Parker', image: 'https://moviedash.com/wp-content/uploads/2018/12/Sp1.jpg',  key: 2 },
  { firstname: 'Stephen', lastname: 'Strange', image: 'https://d.wattpad.com/story_parts/642838902/images/155dc85c708a4514458005313132.jpg',  key: 3 },
]

export default function App(props) {
  return (
      <View style={styles.container}>
          { friends.map( item => <TouchableOpacity key={item.key} onPress={()=> props.navigation.navigate('Details', item)}>
          <Text style={{ fontSize: 30, paddingBottom: 40, fontWeight: 'bold', color: 'red' }}>{item.firstname}</Text>
          </TouchableOpacity> ) }
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

import React, { useState } from 'react';
import {
  StyleSheet, Text, View, Image, TextInput, Button, Alert,
  TouchableWithoutFeedback, Keyboard, TouchableOpacity, ScrollView
} from 'react-native';

export default function App() {

  const [newItem, setNewItem] = useState('');
  const [todoArray, setTodoArray] = useState([]);
  const [displayInput, setDisplayInput] = useState(false);

  const buttonClickHandler = () => {
    if (newItem.length > 0) {
      setTodoArray([{ id: Math.random().toString(), value: newItem }, ...todoArray]);
      setNewItem('');
      setDisplayInput(false);
    }
    else {
      Alert.alert('Invalid Input', 'No item entered', [{ text: 'OK' }]);
    }
  }

  const textinputHandler = (enteredText) => {
    setNewItem(enteredText);
  }

  const removeItem = (itemID) => {
    setTodoArray(currentArray => currentArray.filter(listItem => listItem.id !== itemID));
  }

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <View style={[styles.bar, { backgroundColor: 'white', height: 50, marginBottom: 10 }]}>
          {/* <Text style={styles.text}>Todo List</Text> */}
          <Image source={require('./assets/todo2.png')}
            style={{ width: 150, height: 50 }} />
        </View>
        <View style={styles.main}>
          {displayInput && <View style={[styles.bar, { height: 50 }]}>
            <TextInput style={styles.textinput} placeholder='e.g. Shopping' keybordType='numeric'
              value={newItem} onChangeText={textinputHandler} onSubmitEditing={buttonClickHandler} />
            <Button title='Add to List' onPress={buttonClickHandler} />
          </View>}
          <ScrollView><View style={{marginTop: 10}}>
            {todoArray.map(item => <TouchableOpacity key={item.id} style={styles.listitem}
              onPress={() => removeItem(item.id)}>
              <Text style={[styles.text, { fontSize: 14 }]}>{item.value}</Text></TouchableOpacity>)}
          </View></ScrollView>
        </View>
        <View style={[styles.bar, { backgroundColor: 'black' }]}>
          <Text style={[styles.text, { fontSize: 12, color: 'yellow' }]}>&#169; </Text>
          <Text style={[styles.text, { fontSize: 12, color: 'yellow' }]}>Copyright 2021-2022</Text>
        </View>
        <TouchableOpacity style={styles.addCircle} onPress={() => setDisplayInput(true)} >
          <Text style={[styles.text, { color: 'white' }]}>+</Text>
        </TouchableOpacity>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: 30
  },
  bar: {
    height: 30,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  main: {
    flex: 1,
    backgroundColor: 'green',
    alignItems: 'center'
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold'
  },
  addCircle: {
    height: 50,
    width: 50,
    borderRadius: 25,
    backgroundColor: 'cyan',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 40,
    right: 10
  },
  textinput: {
    width: 200,
    height: 40,
    borderWidth: 2,
    borderColor: 'blue',
    marginRight: 5,
    padding: 10,
    fontSize: 18,
    backgroundColor: 'gray',
    borderRadius: 10
  },
  listitem: {
    padding: 10,
    margin: 3,
    backgroundColor: 'magenta',
    borderWidth: 1,
    borderColor: 'black',
    width: 200,
    borderRadius: 5,
    alignItems: 'center',
  }
});
