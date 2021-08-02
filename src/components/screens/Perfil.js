import React from 'react'
import { Text,View,TouchableOpacity,StyleSheet,ImageBackground } from 'react-native';
import ImagendePerfil from '../ImagendePerfil'
import themeContext from '../../theme/themeContext';
import { Context as AuthContext } from '../../providers/AuthContext';
import { useContext } from 'react';

const PantallaPerfil = ({navigation}) => {
    const { state } = useContext (AuthContext);
    const theme = useContext(themeContext);

      return ( 
      <View>
          <ImageBackground  source= {require('../../../assets/BackgroundImageFinal.png')} style={{backgroundColor:theme.bckColor}}>            
          <ImagendePerfil Nombre = {state.user.nickname} Imagen = {state.user.imagen}/>
            <View style = {styles.contenedorBotones}>
                <TouchableOpacity style = {styles.boton} 
                onPress = {() => {navigation.navigate('Minijuego')}}>
                  <Text style ={styles.titulo}>Nueva Partida</Text>      
                </TouchableOpacity>
                <TouchableOpacity style = {styles.boton}
                onPress = {() => {navigation.navigate('Coleccion')}}>
                  <Text style ={styles.titulo}>Tu coleccion: {state.user.coleccionCantidad} / {750}</Text>
                </TouchableOpacity>
                <TouchableOpacity style = {styles.boton}>
                  <Text style ={styles.titulo}>Tu puntuacion Total: {state.user.puntuacion} Pts </Text>
                </TouchableOpacity>
            </View>
            </ImageBackground>
      </View>
    );
  }

  const styles = StyleSheet.create({
    contenedorBotones:{
      alignItems:'center',
      height: '100%',
    },
    boton:{
      backgroundColor: '#ffffff',
      width:450,
      height:80,
      marginBottom:30,
      borderRadius:17,
      justifyContent:'center',
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,

      elevation: 5,
    },
    titulo:{
      fontSize: 20,
      color:'#000000',
      borderRadius:8,
      textAlign:'center'
    },
  })
   
  export default PantallaPerfil;
  
  