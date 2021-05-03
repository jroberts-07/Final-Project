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
          { friends.map( item => <TouchableOpacity key={item.key} onPress={()=> props.navigation.navigate('FriendInfo', item)}>
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