import React from 'react';
import { useState, useEffect, useContext } from 'react';
import { Text,Image,StyleSheet,View,TouchableOpacity } from 'react-native';
import { Context as cartasContext } from '../../providers/InfoPerfilContext';
import { Context as AuthContext } from '../../providers/AuthContext';

const PantallaVictoria = ({route,navigation}) => {

  const {premio} = route.params;
  const onPress = () => {navigation.navigate("Perfil")}
  const { nuevaCarta } = useContext(cartasContext);
  const {state} = useContext(AuthContext);
  
  function guardarCarta() {
    nuevaCarta(premio.id,premio.name,premio.url,state.user.id)  
  }

  useEffect(() =>{
    guardarCarta()
  }, []);
  
  return (
      <View style ={styles.contenedor}>
          <Text style = {styles.titulo}>Felicidades, haz ganado una carta!</Text>
          <Image source = {{uri:`${premio.url}`}}  style = {styles.imagen}/>
          <Text style = {styles.nombre}>{premio.name}</Text>
          <TouchableOpacity 
          style = {styles.volver}
          onPress = {onPress}>
            <Text>Ir a tu Perfil</Text>
          </TouchableOpacity>
      </View>
    );
}

const styles = StyleSheet.create({
  imagen:{
    width:'70%',
    height:'70%'
  },
  contenedor:{
    flex:1,
    backgroundColor:'#ffffff',
    justifyContent:'center',
    alignItems:'center',
    top:-20
  },
  titulo:{
    top:-40,
    fontSize: 20
  },
  nombre:{
    fontSize:20,
    marginTop:10
  },
  volver:{
    top:30,
    padding:10,
    backgroundColor:'#343434',
    borderRadius:100
  }
})
 
export default PantallaVictoria;