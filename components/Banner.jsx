import { View, Text,Image} from "react-native";
import {styles, myimage} from '../assets/styles/styles1'


function Banner(props) {
    return (
      <Image
         style={{width:'100%', height:'20%', resizeMode :'stretch'}}
         source={require(`../assets/images/${props.imagename}`)}
         />
    );
}

export default Banner;
  