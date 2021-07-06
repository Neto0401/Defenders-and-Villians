import { ScrollView,View} from 'react-native'
import HeroCard from '../Card';
import React from 'react'
import HeaderBack from '../BackBar';
import { volver } from '../../api';

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
