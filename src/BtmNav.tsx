import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeChats from './screens/HomeChats';
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Profile from './screens/Profile';

import Logic from './screens/Logic';
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const BtmNav = ({navigation}) => {
  return (
    <Tab.Navigator
      screenOptions={() => ({
        headerStyle: {
          backgroundColor: 'rgba(34,36,40,1)',
          borderBottomWidth: 0.2,
        },
        headerTitleStyle: {
          color: '#ff1493',
        },
        tabBarStyle: {
          height: 60,
          paddingHorizontal: 5,
          paddingVertical: 10,
          borderTopWidth: 0.2,
          backgroundColor: 'rgba(34,36,40,1)',
        },
        tabBarLabelStyle: {
          paddingBottom: 10,
        },
      })}>
      <Tab.Screen
        name="HomeChats"
        component={HomeChats}
        options={{
          tabBarIcon: ({focused}) => {
            return focused ? (
              <Feather name="message-circle" size={22} color="pink" />
            ) : (
              <Feather name="message-circle" size={22} color="grey" />
            );
          },
          title: 'Hi User !!',
          tabBarLabel: 'Chats',
          tabBarActiveTintColor: 'pink',
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({focused}) => {
            return focused ? (
              <AntDesign name="user" size={20} color="pink" />
            ) : (
              <AntDesign name="user" size={20} color="grey" />
            );
          },
          tabBarActiveTintColor: 'pink',
        }}
      />
      {/* <Tab.Screen
        name="Logic"
        component={Logic}
        options={{
          tabBarIcon: ({focused}) => {
            return focused ? (
              <AntDesign name="Question" size={20} color="pink" />
            ) : (
              <AntDesign name="Question" size={20} color="grey" />
            );
          },
          tabBarActiveTintColor: 'pink',
        }}
      /> */}
    </Tab.Navigator>
  );
};

export default BtmNav;

const styles = StyleSheet.create({});
