import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Profile = () => {
  return (
    <View style={styles.container}>
      <Text>Profile</Text>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: 'rgba(34,36,40,1)',
  },
});
