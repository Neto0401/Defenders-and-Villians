import React from 'react'
import { Text,View,TouchableOpacity,StyleSheet,ImageBackground } from 'react-native';
import ImagendePerfil from '../ImagendePerfil'
import themeContext from '../../theme/themeContext';
import { Context as AuthContext } from '../../providers/AuthContext';
import { useContext } from 'react';

const PantallaPerfil = ({navigation}) => {
    const { state,signout } = useContext (AuthContext);
    const theme = useContext(themeContext);

      return ( 
      <View>
          <ImageBackground  source= {require('../../../assets/BackgroundImageFinal.png')} style={{backgroundColor:theme.bckColor}}>            
          <ImagendePerfil Nombre = {state.user.nickname} Imagen = {state.user.imagen}/>
            <View style = {styles.contenedorBotones}>
            <TouchableOpacity style = {[styles.boton,{backgroundColor:theme.BckText}]}
                onPress = {() => {navigation.navigate('Minijuego')}}>
                  <Text style ={styles.titulo}>Nueva Partida</Text>      
                </TouchableOpacity>
                <TouchableOpacity style = {[styles.boton,{backgroundColor:theme.BckText}]}
                onPress = {() => {navigation.navigate('Coleccion')}}>
                  <Text style ={styles.titulo}>Mi coleccion</Text>
                </TouchableOpacity>
                <TouchableOpacity style = {[styles.boton,{backgroundColor:theme.BckText}]}>
                  <Text style ={styles.titulo}>Tu puntuacion Total: 999 Pts </Text>
                </TouchableOpacity>
                <TouchableOpacity style = {[styles.botonSalir,{backgroundColor:theme.botonSalir}]}
                onPress = {signout}>
                  <Text style ={styles.tituloCerrar}>Cerrar Sesion</Text>
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
      width:350,
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
    botonSalir:{
      backgroundColor: '#D50000',
      width:350,
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
    tituloCerrar:{
      fontSize: 20,
      color:'#ffffff',
      borderRadius:8,
      textAlign:'center'
    }
  })
   
  export default PantallaPerfil;
  
  