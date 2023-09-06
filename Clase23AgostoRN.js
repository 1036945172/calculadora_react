import { StyleSheet, Text, View } from "react-native";
import {styles,myimage} from '../mycalc/assets/Styles/styles1'
import Banner from "./components/Banner";
import Footer from "./components/Footer";

export default function App() {
  let mymess = "Este es el pie de la GUI";
  let mimage = "cientifica.jpg";
  return(
    <View style={styles.container}>
      <Banner imagename={mimage}/>
      <Text style={[styles.Text,{fontWeight:'bold'}]}>Mi Calculadora Básica</Text>
      <Footer message={mymess}></Footer>
    </View>
  );
}




