import {StyleSheet, Text, View} from 'react-native';
import React, {useCallback, useEffect, useState} from 'react';
import firestore, {firebase} from '@react-native-firebase/firestore';
import {GiftedChat} from 'react-native-gifted-chat';
const Chats = ({navigation, route}) => {
  const [messages, setMessages] = useState([]);
  const {FoodId} = route.params;
  //   console.log('into char room', FoodId);

  useEffect(() => {
    // setMessages([
    //   {
    //     _id: 1,
    //     text: 'Hello developer',
    //     createdAt: new Date(),
    //     user: {
    //       _id: 2,
    //       name: 'React Native',
    //       avatar: 'https://placeimg.com/140/140/any',
    //     },
    //   },
    // ]);
    const querySnapShot = firestore()
      .collection('chats')
      .doc(`${FoodId}`)
      .collection('messages')
      .orderBy('createdAt', 'desc');
    querySnapShot.onSnapshot(snapShot => {
      const allMessages = snapShot.docs.map(snap => {
        return {...snap.data(), createdAt: new Date()};
      });
      setMessages(allMessages);
    });
  }, [FoodId]);

  const onSend = (messagesArray = []) => {
    console.log(messagesArray);
    const msg = messagesArray[0];
    const myMsg = {...msg, SenderId: 1, receiverId: 2};
    setMessages(previousMessages => GiftedChat.append(previousMessages, myMsg));
    firestore()
      .collection('chats')
      .doc(`${FoodId}`)
      .collection('messages')
      .add({
        ...myMsg,
        createdAt: firestore.FieldValue.serverTimestamp(),
      });
  };

  return (
    <View style={{flex: 1}}>
      <GiftedChat
        messages={messages}
        onSend={messages => onSend(messages)}
        user={{
          _id: 2,
          name: 'John Doe',
          avatar:
            'https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8&w=1000&q=80',
        }}
      />
    </View>
  );
};

export default Chats;

const styles = StyleSheet.create({});
