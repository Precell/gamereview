import React, { useState } from 'react';
import {TextInput, StyleSheet, Text, View } from 'react-native';

export default function App() {

  const [name, setName] = useState('Precell')
  const [age, setAge] = useState(53)
  return (
    <View style={styles.container}>
      <Text>Enter Name</Text>
      <TextInput 
        multiline
        style={styles.input}
        placeholder='e.g. John Doe'
        onChangeText={(val) =>{setName(val)}}/>

      <Text>Enter age</Text>

      <TextInput
        keyboardType='numeric'
        style={styles.input}
        placeholder='e.g 40'
        onChangeText={(val) => setAge(val)} />
        <Text>name :{name}, age: {age}</Text>
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
  input:{
    borderWidth: 1,
    borderColor:"#777",
    padding:8,
    margin:10,
    width:200
  }
  }
);
