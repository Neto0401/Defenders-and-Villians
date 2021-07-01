import React from 'react';
import { Image, View, StyleSheet, Dimensions } from 'react-native';
import getEnvVars from '../../environment';

const { apiUrl } = getEnvVars();

const ImgHero = ({id}) => {
    return ( 
    <View>
        <Image source={{uri:id}}
            style = {styles.image}
        />
    </View>
     );
}

const styles = StyleSheet.create({
    image:{
        width: 50,
        height: 50,
    }
});
export default ImgHero;