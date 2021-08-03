import React from 'react';
import { View, Text, TouchableOpacity, ImageBackground, StyleSheet} from 'react-native';

 const JuegoTerminado = ({navigation}) => {
     return ( 
     <View style = {styles.contenedor}>
         <ImageBackground source = {require('../../../assets/Derrota.png')} style ={styles.imagen}>
             <View style ={styles.contenedorBoton}>
                <TouchableOpacity style = {styles.boton}
                onPress = {()=>(navigation.navigate("Perfil"))}
                >
                  <Text>Volver a la pantalla de inicio</Text>
                </TouchableOpacity>
            </View>
         </ImageBackground>
     </View>
      );
 }
  
 const styles = StyleSheet.create({
     contenedor:{
        flex:1,
     },
     contenedorBoton:{
         flex:1,
         justifyContent:'flex-end',
         alignItems:'center',
         marginBottom:'37%',
         shadowColor: "#000",
         shadowOffset: {
           width: 0,
           height: 6,
         },
         shadowOpacity: 0.39,
         shadowRadius: 8.30,
         elevation: 13,
     },
     imagen:{
         width:'100%',
         height:'100%'
     },
     boton:{
         backgroundColor:'#ffffff',
         paddingHorizontal:15,
         paddingVertical:9,
         borderRadius:17,
         shadowColor: "#000",
         shadowOffset: {
           width: 0,
           height: 6,
         },
         shadowOpacity: 0.39,
         shadowRadius: 8.30,
   
         elevation: 13,
     }
 })
 export default JuegoTerminado;