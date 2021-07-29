import React from 'react';
import { useState } from 'react';
import { Text, View,Image, StyleSheet } from 'react-native';
import { Button } from 'react-native-paper';

const Imagenes = { 
    uno : "https://www.superherodb.com/pictures2/portraits/10/100/274.jpg",
    dos : "https://www.superherodb.com/pictures2/portraits/10/100/1305.jpg"
  }


const Avatar = () => {
    const [count, setCount] = useState(Imagenes.uno);
    const onPress2 = () => setCount(Imagenes.dos);
    const onPress = () => setCount(Imagenes.uno);  
    
    return ( 
    <View style = {styles.avatarContenedor}>
        <Button 
        mode = {'contained'}
        style = {styles.button}
        onPress = {onPress}
        >
        IZQ
        </Button>
        <Image source ={{uri:`${count}`}} style = {styles.imagen} />     
        <Button 
        mode = {'contained'}
        style = {styles.button}
        onPress = {onPress2}
        >
        DER
        </Button>
    </View>
    );
}

const styles = StyleSheet.create({
    imagen:{
        width: 170,
        height:170,
        borderRadius:100,
        marginHorizontal:20,
        borderColor:'#ffffff',
        borderWidth:3
    },
    avatarContenedor:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        paddingBottom: 50
    },
    button:{
        borderRadius:100
    }
})
 
export default Avatar;