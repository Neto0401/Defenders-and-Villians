import { set } from 'date-fns/esm';
import React from 'react'
import { useEffect, useContext, useState } from 'react';
import { Text,View,TouchableOpacity,StyleSheet, Modal, Pressable } from 'react-native';
import { Context as PreguntasContext } from '../../providers/InfoPerfilContext';
import { fetchImage } from '../api';

const PantallaMinijuego = ({ navigation }) => {

  const { state: statePreguntas, getPreguntas} = useContext (PreguntasContext);
  const [ cuenta, setCuenta] = useState(1);
  const [vidas, setVidas] = useState(3);
  const [modalVisible, setModalVisible] = useState(false);

  const [personaje, setPersonaje] = useState(null)
  const fetchPersonaje = async() =>{
  const response = await fetchImage();
    setPersonaje(response)
  }

  useEffect(() =>{
    getPreguntas(cuenta)
    fetchPersonaje()
  }, []);
  console.log(personaje);

  //Cambiar el color del boton 
  const colours = ['blue', 'red','green'];
  const incializarColores = () => colours[0]
  const colorCorrecto = () => colours[2];
  const colorIncorrecto = () => colours[1];
  const [colour, setColour] = useState(incializarColores());
  const [respuesta, setRespuesta] = useState(false)
  

  function EvaluarRespuesta (respuesta) { 
    setRespuesta(true)
    if(vidas == 0){
      navigation.navigate('Derrota');
    }
    if (respuesta === statePreguntas.preguntas.correcta) {
      setColour(colorCorrecto());  
    }else{
      setColour(colorIncorrecto());
      setVidas(vidas - 1)
    }  
  }
  
  function siguiente() {
    if(respuesta === false){
      setModalVisible(true)
    }else{
      if(vidas == 0){
        navigation.navigate('Derrota');
      }
      if (cuenta == 7) {
        {navigation.navigate('Felicitaciones',{premio:personaje})};
      }else{
      setCuenta(cuenta + 1)
      getPreguntas(cuenta)
      setColour(incializarColores())
      setRespuesta(false)
      }
  }

  }

  
  // console.log("///////////////////////////////////");
  // console.log(statePreguntas);

    return (
      
    <View style = {styles.contenedor}>
      <View style = {styles.encabezado}>
        <Text style ={styles.textoEncabezado}>Pregunta numero: {cuenta}/7</Text>
        <Text style = {styles.textoEncabezado}>Vidas: {vidas}</Text>
      </View>
      <View style = {styles.pregunta}>
        <Text style = {styles.textoPregunta}>{statePreguntas.preguntas.pregunta}</Text>
      </View>
      <View>
        <View style = {styles.contendorBoton}>
          <TouchableOpacity 
          style = {[styles.boton,{backgroundColor:colour}]}
          onPress = {() => (EvaluarRespuesta(statePreguntas.preguntas.respuesta1))}>
            <Text style ={styles.titulo}>{statePreguntas.preguntas.respuesta1}</Text>      
          </TouchableOpacity>
          <TouchableOpacity 
          style = {[styles.boton,{backgroundColor:colour}]}
          onPress = {() => (EvaluarRespuesta(statePreguntas.preguntas.respuesta2))}>
            <Text style ={styles.titulo}>{statePreguntas.preguntas.respuesta2}</Text>
          </TouchableOpacity>
        </View>   
        <View style = {styles.contendorBoton}>
          <TouchableOpacity 
          style = {[styles.boton,{backgroundColor:colour}]}
          onPress = {() => (EvaluarRespuesta(statePreguntas.preguntas.respuesta3))}>
            <Text style ={styles.titulo}>{statePreguntas.preguntas.respuesta3}</Text>
          </TouchableOpacity>
          <TouchableOpacity 
          style = {[styles.boton,{backgroundColor:colour}]}
          onPress = {() => (EvaluarRespuesta(statePreguntas.preguntas.respuesta4))}>
            <Text style ={styles.titulo}>{statePreguntas.preguntas.respuesta4}</Text>
          </TouchableOpacity>
        </View>
          <View style = {styles.contenedorBotonSiguiente}>
          <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
              Alert.alert("Modal has been closed.");
              setModalVisible(!modalVisible);
            }}
          >
              <View style={styles.centeredView}>
                <View style={styles.modalView}>
                  <Text style={styles.modalText}>Debes elegir una respuesta</Text>
                  <Pressable
                    style={[styles.button, styles.buttonClose]}
                    onPress={() => setModalVisible(!modalVisible)}
                  >
                    <Text style={styles.textStyle}>Entendido!</Text>
                  </Pressable>
                </View>
              </View>
            </Modal>
            <TouchableOpacity 
            style = {styles.botonNext}
            onPress = {()=>(siguiente())}>
              <Text style ={styles.titulo}>Siguiente Pregunta</Text>
            </TouchableOpacity>
          </View>
        </View>
    </View>

     );
}

const styles = StyleSheet.create({
    contenedor:{
      backgroundColor:'#ffffff',
      flex:1,
    },
    contenedorBotones:{
      alignItems:'center',
      height: '100%',
      marginTop: '10%',
    },
    encabezado:{
      flexDirection:'row',
      justifyContent:'space-between',
      marginBottom:30
    },
    textoEncabezado:{
      padding:30,
      fontSize:15,
    },
    pregunta:{
      alignContent:'center',
      justifyContent:'center',
      alignItems:'center',
      paddingBottom:50
    }, 
    textoPregunta:{
      fontSize:25
    },
    contendorBoton:{
      flexDirection:'row',
      justifyContent:'center',
      margin:20,
    },  
    boton:{
      backgroundColor:'#323CA6',
      width:170,
      padding:15,
      margin:20,
      borderRadius:10
    },
    contenedorBotonSiguiente:{
      marginTop:50,
      alignItems:'center'
    },
    botonNext:{
      backgroundColor:'#323CA6',
      width:200,
      padding:15,
      margin:20,
      borderRadius:10
      },
    titulo:{
      fontSize: 20,
      color:'#ffff',
      borderRadius:8,
      textAlign:'center'
    },
    centeredView: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      marginTop: 22
    },
    modalView: {
      margin: 20,
      backgroundColor: "white",
      borderRadius: 20,
      padding: 35,
      alignItems: "center",
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5
    },
    button: {
      borderRadius: 20,
      padding: 10,
      elevation: 2
    },
    buttonOpen: {
      backgroundColor: "#F194FF",
    },
    buttonClose: {
      backgroundColor: "#2196F3",
    },
    textStyle: {
      color: "white",
      fontWeight: "bold",
      textAlign: "center"
    },
    modalText: {
      marginBottom: 15,
      textAlign: "center"
    }
  })

export default PantallaMinijuego;