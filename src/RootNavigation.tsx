import {
  StyleSheet,
  Text,
  Image,
  View,
  ScrollView,
  Modal,
  Pressable,
} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import HomeChats from './screens/HomeChats';
import {createStackNavigator} from '@react-navigation/stack';

import ChatApp from './screens/ChatApp';
import BtmNav from './BtmNav';
import ImageViewer from 'react-native-image-zoom-viewer';
import Chats from './screens/Chats';
const Stack = createStackNavigator();

const images = [
  {
    url: 'https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8&w=1000&q=80',
  },
];

const RootNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="BtmNav" component={BtmNav} />
        <Stack.Screen name="HomeChats" component={HomeChats} />
        <Stack.Screen
          name="Chats"
          component={Chats}
          options={({route}) => ({
            headerShown: true,
            headerStyle: {
              backgroundColor: 'rgba(34,36,40,1)',
            },
            headerTintColor: '#ff1493',
            headerTitle: () => (
              <Pressable
                onPress={() => {
                  // showDP(route.params.headerDp);
                  return (
                    <Modal visible={true} transparent={true}>
                      <ImageViewer imageUrls={images} />
                    </Modal>
                  );
                }}>
                <View style={styles.items}>
                  <Image
                    style={styles.img}
                    source={{uri: `${route.params.headerDp}`}}
                    resizeMode="contain"
                  />
                  <Text style={styles.name}>{route.params.headerTitle}</Text>
                </View>
              </Pressable>
            ),
            // headerTitleAlign: 'center',
            headerTitleContainerStyle: {
              position: 'relative',
              left: -10,
            },
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigation;

const styles = StyleSheet.create({
  items: {
    flexDirection: 'row',
    alignItems: 'center',
    // padding: 10,
  },
  name: {
    fontWeight: 600,
    color: '#ff1493',
    fontSize: 16,
  },
  img: {
    width: 40,
    height: 40,
    borderRadius: 50,
    marginRight: 10,
    borderWidth: 2,
    borderColor: '#ff1493',
  },
});
