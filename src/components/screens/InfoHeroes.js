import { ScrollView,View} from 'react-native'
import HeroCard from '../Card';
import React from 'react'

const InfoHeores = ({route,navigation}) => {
    const {informacion} = route.params;
    return ( 
        <View>
        <ScrollView>
        <HeroCard info={informacion}/>
        </ScrollView>
        </View>
     );
}
 
export default InfoHeores;
