import { Image } from "react-native";
import {styles, myimage} from '../assets/styles/styles1'


function Mbanner(props){
    return(
      <Image
        style={{width:'100%', height:'30%',resizeMode:'stretch'}}
        source={require(`../assets/images/${props.imagename}`)}
      />
    );
}
export default Mbanner;