import React from 'react'
import { useEffect, useContext, useState } from 'react';
import { Text,View,TouchableOpacity,StyleSheet, Modal, Pressable, Image } from 'react-native';
import { Context as PreguntasContext } from '../../providers/InfoPerfilContext';
import { fetchImage } from '../api';

const PantallaMinijuego = ({ navigation }) => {

  const { state: statePreguntas, getPreguntas} = useContext (PreguntasContext);
  const [ cuenta, setCuenta] = useState(1);
  const [vidas, setVidas] = useState(3);
  const [modalVisible, setModalVisible] = useState(false);
  const [marca, setMarca] = useState(false);

  const Imagenes = {
    tres :"https://i.ibb.co/NsBHSdj/Tres-Vidas.png",
    dos : "https://i.ibb.co/j5yx0FV/DosVidas.png",
    uno : "https://i.ibb.co/4KLf8PL/UnaVidas.png",
    cero: "https://i.ibb.co/mNDqFHH/Cero-Vidas.png"
  }
  const [imagen, setImagen] = useState("https://i.ibb.co/2KKzLtT/Tres-Vidas.png")

  const [personaje, setPersonaje] = useState(null)
  const fetchPersonaje = async() =>{
  const response = await fetchImage();
    setPersonaje(response)
  }
  useEffect(() =>{
    setImagen(Imagenes.tres) 
    getPreguntas(cuenta)
    fetchPersonaje()
  }, []);
  
  //Cambiar el color del boton 
  const colours = ['#3CDCD4', 'red','green'];
  const incializarColores = () => colours[0]
  const colorCorrecto = () => colours[2];
  const colorIncorrecto = () => colours[1];
  const [colour, setColour] = useState(incializarColores());
  const [resp, setRespuesta] = useState(false)
  
  function EvaluarRespuesta (respuesta) { 
   if(resp == false ){
     
    if(vidas == 0){
      navigation.navigate('Derrota');
    }
    if (respuesta === statePreguntas.preguntas.correcta) {
      setRespuesta(true);
      setColour(colorCorrecto());  
    }else{
      if (vidas == 3) {
        setImagen(Imagenes.dos) 
      }else if(vidas == 2){
        setImagen(Imagenes.uno)
      }else if (vidas == 1){
        setImagen(Imagenes.cero)
      }
      setRespuesta(true);
      setColour(colorIncorrecto());
      setVidas(vidas - 1)
    }
  }  
  }
  
  function siguiente() {
    if(resp === false){
      setModalVisible(true)
    }else{
      if(vidas == 0){
        navigation.navigate('Fin');
      }
      if (cuenta == 7) {
        {navigation.navigate('Felicitaciones',{premio:personaje})};
      }else{
      setCuenta(cuenta + 1)
      getPreguntas(cuenta + 1)
      setColour(incializarColores())
      setRespuesta(false)
      }
  }

  }
    return (
      
    <View style = {styles.contenedor}>
      <View style = {styles.encabezado}>
        <Text style ={styles.textoEncabezado}>Pregunta: {cuenta}/7</Text>
        <Image style = {styles.vidas} source={{uri:`${imagen}`}}/>
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
              <Text style={styles.modalText}>Debes elegir una respuesta.</Text>
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
              <Text style ={styles.tituloSiguiente}>Siguiente Pregunta</Text>
            </TouchableOpacity>
            <TouchableOpacity 
            style = {styles.salir}
            onPress = {()=>(navigation.navigate("Perfil"))}>
              <Text style ={styles.tituloSiguiente}>Salir</Text>  
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
      alignItems:'center',
      marginTop:30,
      marginBottom:20,
      backgroundColor:'#0E2340'
    },
    textoEncabezado:{
      padding:30,
      fontSize:20,
      color:'#ffffff'
    },
    pregunta:{
      backgroundColor:'#ffffff',
      marginHorizontal:'10%',
      padding:60,
      borderRadius:17,
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 6,
      },
      shadowOpacity: 0.39,
      shadowRadius: 8.30,

      elevation: 13,
    }, 
    textoPregunta:{
      fontSize:20,
      color:'#000000',
      textAlign:'center'
    },
    contendorBoton:{
      flexDirection:'row',
      justifyContent:'center',
      marginTop:'7%',
      marginHorizontal:'13%'
    },  
    boton:{
      width:'53%',
      height:100,
      padding:'10%',
      marginHorizontal:'2%',
      borderRadius:17,
      justifyContent:'center',
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 6,
      },
      shadowOpacity: 0.39,
      shadowRadius: 8.30,

      elevation: 13,
    },
    contenedorBotonSiguiente:{
      marginTop:50,
      alignItems:'center'
    },
    botonNext:{
      backgroundColor:'#0F2441',
      width:'80%',
      height:60,
      justifyContent:'center',
      borderRadius:17,
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 6,
      },
      shadowOpacity: 0.39,
      shadowRadius: 8.30,

      elevation: 13,
      },
    salir:{
      backgroundColor:'#D30000',
      marginTop:30,
      width:'80%',
      height:60,
      justifyContent:'center',
      borderRadius:17,
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 6,
      },
      shadowOpacity: 0.39,
      shadowRadius: 8.30,

      elevation: 13,
    },
    tituloSiguiente:{
      color:'#ffffff',
      textAlign:'center',
      fontSize:20,
      justifyContent:'center'
    },
    titulo:{
      fontSize: 18,
      color:'#000000',
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
      backgroundColor: "#0F2441",
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 6,
      },
      shadowOpacity: 0.39,
      shadowRadius: 8.30,

      elevation: 13,
    },
    textStyle: {
      color: "white",
      fontWeight: "bold",
      textAlign: "center"
    },
    modalText: {
      marginBottom: 15,
      textAlign: "center"
    },
    vidas:{
      width:200,
      height:30,
      resizeMode:'contain',
    }
  })

export default PantallaMinijuego;