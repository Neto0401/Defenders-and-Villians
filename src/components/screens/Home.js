import React from 'react'
import Principal from './Principal'
import {View, ImageBackground} from 'react-native'

const Home = ({navigation}) => {
    return ( 
        <View>
         <Principal navigation={navigation}/>
        </View>
     );
}
export default Home;