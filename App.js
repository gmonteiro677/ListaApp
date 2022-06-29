import React, {useState} from 'react';
import {View, Text, StyleSheet, FlatList } from 'react-native';
import Pessoa from './src/Pessoa';

  export default function App() {

    const [feed, setFeed] = useState([
      {id: '1', nome: 'Gabriel', idade: '25', email:'facqueriojdhsgsw@.com'},
      {id: '2', nome: 'Teste', idade: '21', email:'facqueriojdhsgsw@.com'},
      {id: '3', nome: 'Mateus', idade: '23', email:'facqueriojdhsgsw@.com'},
      {id: '4', nome: 'Lucas', idade: '28', email:'facqueriojdhsgsw@.com'},
      {id: '5', nome: 'Livia', idade: '19', email:'facqueriojdhsgsw@.com'},
      {id: '6', nome: 'Vanessa', idade: '22', email:'facqueriojdhsgsw@.com'},
    ]);
  
    return (
      <View style={styles.container}>

        <FlatList
        showsVerticalScrollIndicator={false}
        data={feed}
        renderItem={ ({ item })  => <Pessoa data={item} /> }
        />
     
      </View>
    );
  }
   
const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#121212'
  }
});






