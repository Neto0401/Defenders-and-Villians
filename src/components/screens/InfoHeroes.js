import { ScrollView} from 'react-native'
import HeroCard from '../Card';
import React from 'react'


const InfoHeores = ({route}) => {
    const {informacion} = route.params;
    return ( 
        <ScrollView>
        <HeroCard info={informacion}/>
        </ScrollView>
     );
}
 
export default InfoHeores;
