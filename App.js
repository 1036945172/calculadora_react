import { useState,useEffect } from 'react';
import { View, Text} from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import Banner from './components/Banner';
import Footer from './components/Footer';
import {styles, myimage} from './assets/styles/styles1'

export default function App() {
  //states
  const [value1, setvalue1]= useState('');
  const [value2, setvalue2]= useState('');
  const [result, setresult]= useState('');

  let mymess = "Este es el pie de la GUI";
  let mimage = "calculadora1.jpg"
  //metodos 
let calculate = (operator)=>{
  let mresult = 0
  let mvalue1 = parseFloat(value1)
  let mvalue2 = parseFloat(value2)
  switch(operator){
    case "+":
      mresult = mvalue1 + mvalue2;
      break;
    case "-":
      mresult = mvalue1 - mvalue2;
      break;
    case "*":
        mresult = mvalue1 * mvalue2;
        break;
    case "/":
        mresult = mvalue1 / mvalue2;
        break;
    default:
      break;    
  }
  setresult(mresult.toFixed(1)); //Actualizando la variable resultado
}
return (
    <View style={styles.container}>
      <Banner imagename={mimage}></Banner>
      <View style={{flex:4, backgroundColor:'gray', width:'100%',borderColor:"blue", alignItems:'center',justifyContent:'center'}}>
        <text>Calculadora:</text>
        <text>Valor 1</text>
        <TextInput
          label = 'Valor 1'
          onChangeText={value1=> setvalue1(value1)}
          value={value1}
          style={{backgroundColor: 'powderblue'}}
          left={<TextInput.Icon name="numeric"/>}
        />
        <text>Valor 2</text>
        <TextInput
            label = 'Valor 2'
            onChangeText={value2=> setvalue2(value2)}
            value={value2}
            style={{backgroundColor: 'pink'}}
            left={<TextInput.Icon name="calculator"/>}
        />

        <text>Resultado</text>
        <text>{result}</text>
        <View style={{flexDirection:'row', margintop:20}}>
          <Button
              icon="plus"
              mode="contained"
              onPress={()=>calculate("+")}
          >
            Sumar
          </Button>
          <Button
            icon="minus"
            mode = "contained"
            onPress={()=>calculate("-")}
          >
          Restar
          </Button>
        </View>
        <View style={{flexDirection: 'row', margintop:20}}>
          <Button
            icon="multiplication"
            mode="contained"
            onPress={()=>calculate("*")}
          >
        Multiplicar
      </Button>
      <Button
        icon="division"
        mode="contained"
        onPress={()=>calculate("/")}
      >
        Dividir
      </Button>
    </View>
    <View style={{flexDirection: 'row',marginTop:20}}>
      <Button
        icon="close-circle-outline"
        mode="contained"
        onPress={() =>{
          setvalue1(``)
          setvalue2(``)
          setresult(``)
          }}>
          Limpiar
      </Button>
    </View>
  </View>
  <View style={{flex: 1, alignItems:'center', justifyContent:'center'}}> 
       <footer message="Este es el pie"></footer>
  </View>
</View>
  );
}
        





