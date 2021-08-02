import React from 'react';
import { useContext, useEffect } from 'react';
import { Text, View } from 'react-native';
import { Context as AuthContext } from '../../providers/AuthContext';
import { Context as CartasContext } from '../../providers/InfoPerfilContext';
import ListaColeccion from '../ListaColeccion';

const Coleccion = () => {
    const { state } = useContext(AuthContext);
    const { state: stateCartas, getCartas } = useContext(CartasContext);

    useEffect(() =>{
        getCartas(state.user.id);
    },[])
    return ( 
        <View>
            <Text>Esta es la pantalla de coleccion</Text>
            <ListaColeccion coleccion ={stateCartas.cartas} />
        </View>
     );
}
 
export default Coleccion;