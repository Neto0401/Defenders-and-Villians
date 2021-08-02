import React from 'react';
import { Image,StyleSheet,View,Text } from 'react-native';


const ImagendePerfil = ({Nombre, Imagen}) => {
    return ( 
        <View style = {styles.contenedor}>
            <View style = {styles.subContenedorTitulo}>
                <Text style = {styles.textoTitulo}>Defenders and Villains</Text>
            </View>
            <View style = {styles.subContenedorAvatar}>
                <Image style = {styles.imagenAvatar} source = {{uri:`${Imagen}`}}/>
                <Text style ={styles.nickname} >{Nombre}</Text>
            </View>
        </View>
     );
}
 

const styles = StyleSheet.create({
    contenedor:{
        height:350,
    },
    subContenedorTitulo:{
    },
    textoTitulo:{
        backgroundColor: '#0E2340',
        color: '#ffffff',
        textAlign:'center',
        paddingTop:50,
        paddingBottom:120,
        fontSize:18,
    },
    subContenedorAvatar:{
        alignItems: 'center',
    },
    imagenAvatar:{
        height: 120,
        width:120,
        borderRadius:100,
        borderColor: '#ffffff',
        borderWidth: 3,
        top: -50
    },
    nickname:{
        fontSize:17,
        top: -40,
        backgroundColor:'#ffffff',
        paddingStart:10,
        paddingEnd:10,
        borderRadius:10
    }
})

export default ImagendePerfil;