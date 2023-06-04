import React, { useState } from 'react';
import {TextInput, StyleSheet, Text, View, FlatList, ScrollView } from 'react-native';

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
  ])
  
  return (
    <View style={styles.container}>
    
      <FlatList
        numColumns={2}
        keyExtractor={(item) => item.id }
        data={people}
        renderItem={({ item }) =>(
          <Text style={styles.item}> {item.name}</Text>
        )}
      />

      {/* <ScrollView>
        {
          people.map(item => (
              <View key={item.key}>
                <Text style={styles.item}>{item.name}</Text>
              </View>
            )
          )
        }
      </ScrollView> */}
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
