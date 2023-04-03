import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import Feather from 'react-native-vector-icons/Feather';
import ChatApp from './ChatApp';
import Chats from './Chats';

const HomeChats = ({navigation}) => {
  const handleChat = (name, id) => {
    navigation.navigate('Chats', {
      FoodId: id,
      headerDp:
        'https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8&w=1000&q=80',
      headerTitle: name,
    });
  };

  return (
    <ScrollView style={styles.container}>
      <Pressable onPress={() => handleChat('John Doe', 1)}>
        <View style={styles.box}>
          <Image
            style={styles.dp}
            source={{
              uri: 'https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8&w=1000&q=80',
            }}></Image>
          <Text style={styles.name}>John Doe</Text>
          <View style={styles.msgIcon}>
            <Feather name="message-circle" size={22} color="grey" />
          </View>
        </View>
      </Pressable>
      <Pressable onPress={() => handleChat('Peter Parker')}>
        <View style={styles.box}>
          <Image
            style={styles.dp}
            source={{
              uri: 'https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8&w=1000&q=80',
            }}></Image>
          <Text style={styles.name}>Peter Parker</Text>
          <View style={styles.msgIcon}>
            <Feather name="message-circle" size={22} color="grey" />
          </View>
        </View>
      </Pressable>
    </ScrollView>
  );
};

export default HomeChats;

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: 'rgba(34,36,40,1)',
  },
  box: {
    width: '100%',
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderRadius: 10,
    backgroundColor: 'pink',
    marginVertical: 2,
  },
  dp: {
    width: 45,
    height: 45,
    borderRadius: 50,
    marginRight: 15,
  },
  name: {
    fontSize: 18,
    fontWeight: 600,
  },
  msgIcon: {
    position: 'absolute',
    right: 10,
  },
});
