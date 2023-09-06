import { useState,useEffect } from 'react';
import { StyleSheet, Text, View,  Button,TouchableOpacity } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import Banner from './components/Banner';
import Footer from './components/Footer';
import {styles, myimage} from './assets/styles/styles1'

export default function App() {
  //states
  const [value1, setvalue1]=useState('');
  const [value2, setvalue2]=useState('');
  const [result, setresult]=useState('');

  let mymess = "Este es el pie de la GUI";
  let mimage = "calculadora1.jpg"
  //metodos 
  return (
    <View style={styles.container}>
      <Banner imagename={mimage}></Banner>
    <View style={{flex:4, backgroundColor:'gray', width:'100%',borderColor:"blue", alignItems:'center',
    justifyContent:'center'}}>
      <text>Calculadora:</text>
      <text>Valor 1</text>
      <text>Valor 2</text>
      <TextInput
        placeholder='Ingrese valor 2:'
        onChangeText={value1=> setvalue1(value2)}
        value={value2}
        style={styles.tinput}
        />
        <view style={{flexDirection:'row'}}>
          <TouchableOpacity
            style={{backgroundColor:'red',padding:15, borderRadius:20}}
            >
              <text>+</text>
          </TouchableOpacity>
        </view>
    </View>
    <view style={{flex:1, alignItems:'center', justifyContent:'center'}}> 
       <footer message='Este es el pie'></footer>
     </view>
    </View>
  );
}





