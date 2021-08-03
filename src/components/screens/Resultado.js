import React from 'react';
import { useState, useEffect, useContext } from 'react';
import { Text,Image,StyleSheet,View,TouchableOpacity, ImageBackground } from 'react-native';
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
    <ImageBackground source = {require('../../../assets/Victoria.png')} style = {styles.fondo}>
      <View style = {styles.contenedorElementos}>
          <Image source = {{uri:`${premio.url}`}}  style = {styles.imagen}/>
          <View style = {styles.contenedorBoton}>
            <Text style = {styles.nombre}>{premio.name}</Text>
          </View>
      </View>
      <View style = {styles.contenedorVolver}>
      <TouchableOpacity 
            style = {styles.volver}
            onPress = {onPress}>
              <Text>Ir a tu Perfil</Text>
      </TouchableOpacity>
      </View>
      </ImageBackground>
  </View>
    );
}

const styles = StyleSheet.create({
  imagen:{
    width:'60%',
    height:'58%',
    borderRadius:27,
  },
  contenedor:{
    flex:1,
  },
  contenedorElementos:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    paddingTop:80,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 9,
    },
    shadowOpacity: 0.48,
    shadowRadius: 11.95,

    elevation: 18,
  },
  contenedorBoton:{
    backgroundColor:'#fff',
    width:'60%',
    height:'8%',
    marginTop:-20,
    alignItems:'center',
    borderBottomRightRadius:27,
    borderBottomLeftRadius:27,
    justifyContent:'center',
  },nombre:{
    fontSize:25,
  },
  contenedorVolver:{
    alignItems:'center',
    marginBottom:100
  },
  volver:{
    backgroundColor:'#ffffff',
    paddingHorizontal:35,
    paddingVertical:10,
    borderRadius:17,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 9,
    },
    shadowOpacity: 0.48,
    shadowRadius: 11.95,

    elevation: 18,
  },
  fondo:{
    flex:1
  }
})

export default PantallaVictoria;