import React from 'react';
import { FlatList,TouchableOpacity,Text,StyleSheet } from 'react-native';
import ImgHero from './HeroImage';
import { GuardarId } from '../api';
import theme from '../theme';

const ListaHeroes = ({heroes, navigation}) => {
    return(
        <FlatList
        data = {heroes.results}
        numColumns = {'3'}
        keyExtractor = {(item) => item.id}
        renderItem={({item}) =>{
            return(
                <TouchableOpacity style={styles.touch} onPress={()=>{navigation.navigate("InfoHeroes", GuardarId({Guardar:item.id}))}}>
                    <ImgHero id={item.image.url}/>                   
                    <Text style={styles.texto}>{item.name}</Text>
                </TouchableOpacity>
            );
        }}
        />
    );

};

const styles = StyleSheet.create({
    touch:{
        backgroundColor: theme.colors.bckColor,
        width:'27%',
        height:200,
        marginTop: '5%',
        marginLeft:'5%',
        borderRadius:17,    
    },
    texto: {
        marginTop: -10,
        textAlign:'center',
        textShadowColor: theme.colors.secondaryColor,
        textShadowOffset: {width:2, height:2},
        textShadowRadius:5,
    },

})

export default ListaHeroes;  