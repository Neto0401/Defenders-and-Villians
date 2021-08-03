import React from 'react'
import { useEffect, useContext, useState } from 'react';
import { Text,View,TouchableOpacity,StyleSheet, Modal, Pressable, Image,ImageBackground } from 'react-native';
import { Context as PreguntasContext } from '../../providers/InfoPerfilContext';
import { fetchImage } from '../api';
import themeContext from '../../theme/themeContext';

const PantallaMinijuego = ({ navigation }) => {
  const theme = useContext(themeContext);
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
  const colours = [theme.botonJuego, 'red','green'];
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
        if(vidas==0 && cuenta==7){
          navigation.navigate('Fin');
        }else{
        {navigation.navigate('Felicitaciones',{premio:personaje})};
      }
      }else{
      setCuenta(cuenta + 1)
      getPreguntas(cuenta + 1)
      setColour(incializarColores())
      setRespuesta(false)
      }
  }

  }
    return (
      
      <View style = {[styles.contenedor,{backgroundColor:theme.fondoJuego}]}>
      <ImageBackground source = {require('../../../assets/FondoJugar.png')} style ={styles.fondo}>
      <View style = {[styles.encabezado,{backgroundColor:theme.primaryColor}]}>
        <Text style ={styles.textoEncabezado}>Pregunta: {cuenta}/7</Text>
        <Image style = {styles.vidas} source={{uri:`${imagen}`}}/>
      </View>
      <View style = {[styles.pregunta,{backgroundColor:theme.BckText}]}>
        <Text style = {styles.textoPregunta}>{statePreguntas.preguntas.pregunta}</Text>
      </View>
      <View>
        <View style = {styles.contendorBoton}>
          <TouchableOpacity 
          style = {[styles.boton,{backgroundColor:colour}]}
          onPress = {() => (EvaluarRespuesta(statePreguntas.preguntas.respuesta1))}>
          <Text style ={[styles.titulo,{color:theme.bckColor}]}>{statePreguntas.preguntas.respuesta1}</Text>      
          </TouchableOpacity>
          <TouchableOpacity 
          style = {[styles.boton,{backgroundColor:colour}]}
          onPress = {() => (EvaluarRespuesta(statePreguntas.preguntas.respuesta2))}>
           <Text style ={[styles.titulo,{color:theme.bckColor}]}>{statePreguntas.preguntas.respuesta2}</Text>
          </TouchableOpacity>
        </View>   
        <View style = {styles.contendorBoton}>
          <TouchableOpacity 
          style = {[styles.boton,{backgroundColor:colour}]}
          onPress = {() => (EvaluarRespuesta(statePreguntas.preguntas.respuesta3))}>
           <Text style ={[styles.titulo,{color:theme.bckColor}]}>{statePreguntas.preguntas.respuesta3}</Text>
          </TouchableOpacity>
          <TouchableOpacity 
          style = {[styles.boton,{backgroundColor:colour}]}
          onPress = {() => (EvaluarRespuesta(statePreguntas.preguntas.respuesta4))}>
            <Text style ={[styles.titulo,{color:theme.bckColor}]}>{statePreguntas.preguntas.respuesta4}</Text>
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
              <View style={[styles.modalView,{backgroundColor:theme.bckColor}]}>
              <Text style={[styles.modalText,{color:theme.header}]}>Debes elegir una respuesta.</Text>
              <Pressable
               style={[styles.button, styles.buttonClose,{backgroundColor:theme.botonJuego}]}
                onPress={() => setModalVisible(!modalVisible)}
              >
                <Text style={[styles.textStyle,{color:theme.titleColor}]}>Entendido!</Text>
              </Pressable>
            </View>
          </View>
            </Modal>
            <TouchableOpacity 
            style = {[styles.botonNext,{backgroundColor:theme.botonJuego}]}
            onPress = {()=>(siguiente())}>
              <Text style ={[styles.tituloSiguiente,{color:theme.bckColor}]}>Siguiente Pregunta</Text>
            </TouchableOpacity>
            <TouchableOpacity 
            style = {[styles.salir,{backgroundColor:theme.botonSalir}]} 
            onPress = {()=>(navigation.navigate("Perfil"))}>
              <Text style ={[styles.tituloSiguiente,{color:theme.bckColor}]}>Salir</Text>  
            </TouchableOpacity>
          </View>
        </View>
        </ImageBackground>
    </View>

     );
}

const styles = StyleSheet.create({
    contenedor:{
      flex:1,
    },
    contenedorBotones:{
      alignItems:'center',
      height: '100%',
      marginTop: '10%',
    },
    encabezado:{
      paddingTop:20,
      flexDirection:'row',
      justifyContent:'space-between',
      alignItems:'center',
      marginBottom:20,
    },
    textoEncabezado:{
      padding:30,
      fontSize:20,
      color:'#ffffff'
    },
    pregunta:{
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
    },
    fondo:{
      width:'100%',
      height:'100%'
    }
  })

export default PantallaMinijuego;