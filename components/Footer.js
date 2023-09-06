import { View, Text} from 'react-native';

export default function Footer(props){
    return(
        <View>
            <Text>{props.message}</Text>
        </View>
    );
}