import React from 'react';
import { FlatList,TouchableOpacity,useState,Text,Image,View,Title } from 'react-native';
import HeroCard from './Card';

const ListaHeroes = ({heroes}) => {
    // console.log('---------------------------------------------------');
     console.log(heroes);
    return(
        <FlatList style = {{flex: 1}}
        data = {heroes.results}
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