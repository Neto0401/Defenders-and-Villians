import React from 'react'
import { Text,View,TouchableOpacity,StyleSheet, FlatList } from 'react-native';

const PantallaMinijuego = () => {
    
    return ( 
        <View> 
        <Text style ={{fontSize:16, marginTop:20}}>PREGUNTA NUMERO </Text>
        <Text style={{fontSize:16, marginLeft:'60%', marginTop:-20}}>VIDAS</Text>
        <Text style ={{fontSize: 23, marginTop:'28%', textAlign:'center'}}>¿DE QUE PLANETA ES SUPERMAN?</Text>
        <View style={{alignItems:'center'}}>
        <View style={{flexDirection:'row', marginTop:50}}>
        <TouchableOpacity style = {styles.boton}>
          <Text style ={styles.titulo}>TIERRA</Text>      
        </TouchableOpacity>
        <TouchableOpacity style = {styles.boton}>
          <Text style ={styles.titulo}>VENUS</Text>
        </TouchableOpacity>
        </View>   
        <View style={{flexDirection:'row'}}>
        <TouchableOpacity style = {styles.boton}>
          <Text style ={styles.titulo}>KRIPTON</Text>
        </TouchableOpacity>
        <TouchableOpacity style = {styles.boton}>
          <Text style ={styles.titulo}>LA CEIBA</Text>
        </TouchableOpacity>
        </View>

        <TouchableOpacity style = {styles.botonNEXT}>
          <Text style ={styles.titulo}>SIGUIENTE PREGUNTA</Text>
        </TouchableOpacity>
        </View>
    </View>

     );
}

const styles = StyleSheet.create({
    contenedorBotones:{
      alignItems:'center',
      height: '100%',
      marginTop: '10%',
    },
    boton:{
      backgroundColor: '#323CA6',
      width:195,
      marginTop:13,
      height:70,
      marginBottom:39,
      justifyContent:'center',
      shadowColor: "#000",
      borderRadius:30, 
      margin:5,
    },
    botonNEXT:{
        backgroundColor: '#323CA6',
        width:290,
        marginTop:53,
        height:70,
        justifyContent:'center',
        shadowColor: "#000",
        borderRadius:30, 
        
      },
    titulo:{
      fontSize: 20,
      color:'#ffff',
      borderRadius:8,
      textAlign:'center'
    },
  })

export default PantallaMinijuego;