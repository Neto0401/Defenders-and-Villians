import React from 'react';
import { useContext, useEffect } from 'react';
import { Text, View ,ImageBackground ,StyleSheet } from 'react-native';
import { Context as AuthContext } from '../../providers/AuthContext';
import { Context as CartasContext } from '../../providers/InfoPerfilContext';
import ListaColeccion from '../ListaColeccion';
import themeContext from '../../theme/themeContext';

const Coleccion = () => {
    const theme = useContext(themeContext);
    const { state } = useContext(AuthContext);
    const { state: stateCartas, getCartas } = useContext(CartasContext);

    useEffect(() =>{
        getCartas(state.user.id);
    },[])
    return ( 
        <View>
            <ImageBackground  style= {[styles.fondo,{backgroundColor:theme.bckColor}]} source = {require('../../../assets/BackgroundImageFinal.png')}>
            <ListaColeccion coleccion ={stateCartas.cartas} />
            </ImageBackground>
        </View>
     );
}
const styles = StyleSheet.create({
    fondo:{
        width:'100%',
        height:'100%'
    }
})

export default Coleccion;