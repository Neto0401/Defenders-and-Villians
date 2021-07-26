import React from 'react'
import { TextInput,Button } from 'react-native-paper';
import { Text,Image, View, StyleSheet,TouchableOpacity } from 'react-native';

const Login = () => {
    const [usuario, setUsuario] = React.useState('')
    const [contraseña, setContraseña] = React.useState('')

    return ( 
        <View>
            <View style = {styles.contenedor}>
                <View style = {styles.subContenedorImagen}>
                    <Image source ={require('../../../assets/Logo.fw.png')} style= {{width:275, height:250}}/>
                </View>
                <View style = {styles.textInput}>
                        <View style ={styles.subContenedorText}>
                            <TextInput
                            label = "Usuario"
                            value = {usuario}
                            onChange = {setUsuario}
                            underlineColor = '#323AA5'
                            mode = 'outlined'
                            />
                        </View>
                        <View style = {styles.subContenedorText}>
                            <TextInput
                            label = "Contraseña"
                            value = {contraseña}
                            onChange = {setContraseña}
                            underlineColor = '#323AA5'
                            mode = 'outlined'
                            />
                            <View style = {{
                                alignItems: 'center',
                                top:15,
                                paddingEnd:5
                                }}>
                                <TouchableOpacity>
                                    <Text>
                                        Olvidaste tu contraseña
                                    </Text>
                                    </TouchableOpacity>
                            </View>
                            </View>
                            <View 
                            style ={{
                                marginTop:30,
                                alignItems:'center'
                            }}>
                            <View 
                            style= {{
                                marginBottom:20,
                                width:'80%'
                                }}>
                                <Button style={{backgroundColor:'#333BA6'}}  icon = 'camera' mode = 'contained'>
                                    Iniciar Sesion
                                </Button>
                            </View>
                            <View>
                            <Button style ={{backgroundColor:'#333BA6'}} icon = 'camera' mode = 'contained'>
                                    Registrarse
                                </Button>
                            </View>
                        </View>
                    </View>
            </View>
        </View>
     );
}

const styles = StyleSheet.create({
    contenedor:{
        alignItems:'center',
        backgroundColor:'#BBBDE1',
        height:'100%'
    },
    subContenedorImagen:{
        marginTop:70,
    },
    textInput:{
        top:70, 
        width:'80%'
    },
    subContenedorText:{
        marginBottom: 30
    },
})

 
export default Login;