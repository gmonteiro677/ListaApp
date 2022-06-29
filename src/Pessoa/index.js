import React from "react";
import {View, Text, StyleSheet} from 'react-native';

function Pessoa(props){
  return(
    <View style={styles.areaPessoa}>
      <Text style={styles.textoPessoa}> {(' Id : ') + props.data.id}</Text>
      <Text style={styles.textoPessoa}> { (' Nome : ') + props.data.nome}</Text>
      <Text style={styles.textoPessoa}> {(' Idade : ') + props.data.idade}</Text>
      <Text style={styles.textoPessoa}> {(' Email : ') + props.data.email}</Text>
    </View>
  );
}

export default Pessoa;

const styles = StyleSheet.create({
  areaPessoa:{
    backgroundColor: '#489',
    height: 200,
    marginBottom: 15,
    justifyContent: 'center',
  },
  textoPessoa:{
    color:'#FFF',
    fontSize: 20,
  }
})