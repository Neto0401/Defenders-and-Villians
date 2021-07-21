import React from 'react'
import { Text,View,TouchableOpacity,StyleSheet } from 'react-native';
import ImagendePerfil from '../ImagendePerfil'
import themeContext from '../../theme/themeContext';
import { useContext } from 'react';

const PantallaPerfil = ({navigation}) => {
    const theme = useContext(themeContext);
      return ( 
      <View style ={{backgroundColor: '#ffffff'}}>
          <ImagendePerfil/>
            <View style = {styles.contenedorBotones}>
                <TouchableOpacity style = {styles.boton} 
                onPress = {() => {navigation.navigate('Minijuego')}}>
                  <Text style ={styles.titulo}>Nueva Partida</Text>      
                </TouchableOpacity>
                <TouchableOpacity style = {styles.boton}>
                  <Text style ={styles.titulo}>Tu puntuacion Total: {} </Text>
                </TouchableOpacity>
                <TouchableOpacity style = {styles.boton}>
                  <Text style ={styles.titulo}>Tu coleccion: {1} / {750}</Text>
                </TouchableOpacity>
            </View>
      </View>
    );
  }

  const styles = StyleSheet.create({
    contenedorBotones:{
      alignItems:'center',
      height: '100%',
    },
    boton:{
      padding: 20,
      backgroundColor: '#117889',
      width:450,
      height:100,
      marginBottom:20,
      borderRadius:15,
      alignItems:'center'
    },
    titulo:{
      fontSize: 20,
      color:'#ffffff',
    }
  })
   
  export default PantallaPerfil;
  
  