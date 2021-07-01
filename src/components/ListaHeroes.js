import React from 'react';
import { FlatList,TouchableOpacity,useState,Text,Image,View,Title } from 'react-native';
import { elergirCat, fetchHeroes } from '../api';
import HeroCard from './Card';

const ListaHeroes = ({heroes}) => {
console.log('-------------------------------------------------------');
console.log(heroes);
    return(
        <FlatList
        data = {heroes.results}
        numColumns = {'3'}
        keyExtractor = {(item) => item.id}
        renderItem={({item}) =>{
            return(
                <TouchableOpacity>
                    <Text>{item.name}</Text>
                </TouchableOpacity>
            );
        }}
        />
    );
};
 
export default ListaHeroes;  