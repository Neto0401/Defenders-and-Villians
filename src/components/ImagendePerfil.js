import React from 'react';
import { Image,StyleSheet,View,Text } from 'react-native';


const ImagendePerfil = () => {
    return ( 
        <View style = {styles.contenedor}>
            <Image style = {styles.imagenDeFondo} source ={require('../../assets/BackgroundImageFinal.png')}/>
            <View style = {styles.contenedorAvatar}>
                <Image style = {styles.imagenAvatar} source = {{uri: 'https://elfarolcultural.com/wp-content/uploads/2020/09/spider-man-1876543.jpg'}}/>
                <Text style ={styles.nickname} >PussyDestroyerxXx197</Text>
            </View>
        </View>
     );
}
 

const styles = StyleSheet.create({
    contenedor:{
        height:'15%',
        marginBottom:120
    },
    contenedorAvatar:{
        alignItems: 'center',
        marginTop: -60,
    },
    imagenDeFondo:{
        height: '100%',
        borderBottomRightRadius:20,
        borderBottomLeftRadius:20,
        justifyContent: 'center',
    },
    imagenAvatar:{
        height: 120,
        width:120,
        borderRadius:100,
        borderColor: '#ffffff',
        borderWidth: 1
    },
    nickname:{
        fontSize:17
    }
})

export default ImagendePerfil;