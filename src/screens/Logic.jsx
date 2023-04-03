import {Pressable, StyleSheet, Text, View} from 'react-native';
import React, {useRef, useState} from 'react';
import {TextInput} from 'react-native-gesture-handler';

const Logic = () => {
  const val1 = useRef(null);
  const val2 = useRef(null);
  const val3 = useRef(null);
  const val4 = useRef(null);
  const val5 = useRef(null);

  const [in1, setIn1] = useState('');
  const [in2, setIn2] = useState('');
  const [in3, setIn3] = useState('');
  const [in4, setIn4] = useState('');
  const [in5, setIn5] = useState('');

  const handleVal = e => {
    setIn1(val1.current.Text);
  };

  return (
    <View style={styles.container}>
      <View>
        <TextInput
          style={styles.inp}
          placeholder="input 1"
          keyboardType="numeric"></TextInput>
        <TextInput
          style={styles.inp}
          placeholder="input 2"
          keyboardType="numeric"></TextInput>
        <TextInput
          style={styles.inp}
          placeholder="input 3"
          keyboardType="numeric"></TextInput>
        <TextInput
          style={styles.inp}
          placeholder="input 4"
          keyboardType="numeric"></TextInput>
        <TextInput
          style={styles.inp}
          placeholder="input 5*"
          keyboardType="numeric"></TextInput>
      </View>
      <View style={{width: '100%', alignItems: 'center'}}>
        <Pressable onPress={handleVal} style={styles.btn}>
          <Text>Submit</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default Logic;

const styles = StyleSheet.create({
  inp: {
    borderWidth: 1,
    marginVertical: 10,
    padding: 5,
    marginHorizontal: 10,
  },
  btn: {
    padding: 10,
    alignItems: 'center',
    width: 100,
    borderRadius: 10,
    marginVertical: 10,
    backgroundColor: 'grey',
  },
});
