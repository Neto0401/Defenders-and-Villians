import React from 'react';
import { FlatList,TouchableOpacity,Text,StyleSheet } from 'react-native';
import { elergirCat, fetchHeroes } from '../api';
import HeroCard from './Card';
import ImgHero from './HeroImage';
import { GuardarId } from '../api';

const ListaHeroes = ({heroes, navigation}) => {

console.log('-------------------------------------------------------');
console.log(heroes);

    return(
        <FlatList
        data = {heroes.results}
        numColumns = {'3'}
        keyExtractor = {(item) => item.id}
        renderItem={({item}) =>{
            return(
                <TouchableOpacity style={styles.touch} onPress={()=>{navigation.navigate("InfoHeroes", GuardarId({Guardar:item.id}), console.log(item.id))}}>
                    <ImgHero id={item.image.url}/>
                    <Text>{item.name}</Text>
                </TouchableOpacity>
            );
        }}
        />
    );

};

const styles = StyleSheet.create({
    touch:{
        backgroundColor: '#fff',
        width:'30%',
        height:200,
        margin:'1%',
        marginLeft:'2%',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,

        elevation: 6,
            }
})

export default ListaHeroes;  