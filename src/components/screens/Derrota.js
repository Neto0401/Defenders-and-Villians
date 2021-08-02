import React from 'react';
import { View, Image} from 'react-native';
const PantallaDerrota = () => {
    return ( 
        <View style={{backgroundColor:'#201E25', flex:1}}>
        <Image 
        source={require('../../../assets/GAMEOVER.gif')}  
        style={{width: 480, height: 700 }}
    />
        </View>
     );
}
 
export default PantallaDerrota;