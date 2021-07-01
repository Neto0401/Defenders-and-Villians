import React from 'react';
import { FlatList,TouchableOpacity,useState,Text,Image,View,Title } from 'react-native';
import { elergirCat, fetchHeroes } from '../api';
import HeroCard from './Card';
import ImgHero from './HeroImage';

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
                <TouchableOpacity style={{width:'30%', height:'50%'}}>
                    <ImgHero id={item.image.url} />
                    <Text>{item.name}</Text>
                </TouchableOpacity>
            );
        }}
        />
    );

};

export default ListaHeroes;  