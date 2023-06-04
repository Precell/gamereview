import React, { useState } from 'react';
import {TextInput, StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';

export default function App() {

  const [people, setPeople] = useState([
    {name:'Precell', id:'1'},
    {name:'Ras Adza', id:'2'},
    {name:'CoxWayne', id:'3'},
    {name:'ShingieBuss', id:'4'},
    {name:'Stingoti', id:'5'},
    {name:'Blago', id:'6'},
    {name:'TG', id:'7'},
    {name:'Tsano', id:'8'},
    {name:'Tsano', id:'9'},
  ])
  
  const pressHandler = (id) =>{
    console.log(id);
    setPeople((prevPeople) =>{
      return prevPeople.filter(person => person.id != id)
    })
  }


  return (
    <View style={styles.container}>
    
      <FlatList
        numColumns={2}
        keyExtractor={(item) => item.id }
        data={people}
        renderItem={({ item }) => (

          <TouchableOpacity onPress={() => pressHandler(item.id)}>
            <Text style={styles.item}> {item.name}</Text>
          </TouchableOpacity>
        )} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop:40, 
    paddingHorizontal:20
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  item:{
    marginTop:30,
    padding:30,
    backgroundColor:'pink',
    fontSize:24,
    marginHorizontal:10
  }
  }
);
