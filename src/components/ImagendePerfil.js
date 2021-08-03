import React,{useContext} from 'react';
import { Image,StyleSheet,View,Text } from 'react-native';
import themeContext from '../theme/themeContext';


const ImagendePerfil = ({Nombre, Imagen}) => {
    const theme = useContext(themeContext);
    return ( 
        <View style = {styles.contenedor}>
           <View style = {[styles.subContenedorTitulo,{backgroundColor:theme.primaryColor}]}>
              <Text style = {styles.textoTitulo}>Defenders and Villains</Text>
            </View>
            <View style = {styles.subContenedorAvatar}>
              <Image style = {[styles.imagenAvatar,{borderColor:theme.BckText}]} source = {{uri:`${Imagen}`}}/>
              <Text style ={[styles.nickname,{backgroundColor:theme.BckText}]} >{Nombre}</Text>
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