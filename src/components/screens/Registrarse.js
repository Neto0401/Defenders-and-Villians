import React from 'react'
import { useState, useContext } from 'react';
import { Text,View,StyleSheet,Image,TouchableOpacity } from 'react-native';
import { TextInput,Button, Caption } from 'react-native-paper';
import { validate } from 'email-validator';

const PantallaRegistro = () => {
    const Imagenes = { 
      uno : "https://www.superherodb.com/pictures2/portraits/10/100/274.jpg",
      dos : "https://www.superherodb.com/pictures2/portraits/10/100/1305.jpg"
    }
    var [count, setCount] = useState(Imagenes.uno);
    const [nick, setNick] = useState("");
    const [mail, setMail] = useState("");
    const [contraseña, setContraseña] = useState("");
    const [nickError, setNickError] = useState(false);
    const [mailError, setMailError] = useState(false);
    const [contraseñaError, setContraseñaError] = useState(false)

    function verficacion(input){
        if(input === 'nick'){
            if (!nick) setNickError(true);
            else setNickError(false);
        }else if (input === 'mail'){
            if (!validate(mail)) setMailError(true);
            else setMailError(false);
        }else if (input === 'contraseña'){
            if (!contraseña) setContraseñaError (false)
            else setContraseñaError(false)
        }else if(input ==='registrarse'){
            if(nick && mail && contraseña){

            }
        }

        registrarse(nick, mail, contraseña);
    }

    const onPress2 = () => setCount(Imagenes.dos);
    const onPress = () => setCount(Imagenes.uno);
    return ( 
        <View style = {styles.contenedor}>
            <Text style = 
            {{fontSize:15, color: '#000000'}}
            >Elige tu Avatar</Text>
                <View style = {styles.contenedorAvatar}>
                    <Button
                    mode = 'contained'
                    style = {styles.botonesIzqDer}
                    icon = 'chevron-double-left'
                    onPress = {onPress2}
                    >Izq</Button>
                    <Image style = {styles.imagen} source = {{uri:`${count}`}}/>
                    <Button
                    style = {styles.botonesIzqDer}
                    icon = 'chevron-double-right'
                    mode = 'contained'
                    onPress = {onPress}
                    >DER</Button>
                </View>
                <View style = {styles.contenedorInputs}>
                    <TextInput
                    label = 'NickName'
                    value = {nick}
                    onChangeText = {setNick}
                    onBlur = {() => verficacion("nick")}
                    underlineColor = '#323AA5'
                    mode = 'outlined'
                    style ={styles.input} 
                    />   
                    {nickError && <Caption>Por favor ingrese su NickName</Caption>}            
                    <TextInput
                    label = 'Correo Electronico'
                    value = {mail}
                    onChangeText = {setMail}
                    onBlur = {() => verficacion("mail")}
                    underlineColor = '#323AA5'
                    mode = 'outlined' 
                    style ={styles.input}
                    />
                    {mailError && <Caption>Por favor ingrese su correo electronico</Caption>}
                    <TextInput
                    label = 'Contraseña'
                    value = {contraseña}
                    onChangeText = {setContraseña}
                    onBlur = {() => verficacion("contraseña")}
                    underlineColor = '#323AA5'
                    mode = 'outlined' 
                    secureTextEntry
                    style ={styles.input}
                    />
                    {contraseñaError && <Caption>Por favor ingrese su contraseña</Caption>}
                </View>
                <View>
                <Button
                    style = {styles.botonesIzqDer}
                    icon = 'camera'
                    mode = 'contained'
                    >Registrarse</Button>
                </View>
        </View>
     );
}

const styles = StyleSheet.create({
    contenedor:{
        alignItems:'center',
        paddingTop:20,
        backgroundColor:'#BBBDE1',
        height:'100%'
    },
    imagen:{
        width:170,
        height:170,
        borderRadius: 100,
        marginHorizontal:20,
        borderColor:'#ffffff',
        borderWidth:3,
    },
    contenedorAvatar:{
        marginTop:30,
        flexDirection:'row',
        alignItems:'center',
    },
    botonesIzqDer:{
        backgroundColor:'#333BA6',
        borderRadius: 100,
    },
    contenedorInputs:{
        marginVertical: 70,
        width:'80%',
    },
    input:{
        marginBottom:20,
    }
}) 
 
export default PantallaRegistro;