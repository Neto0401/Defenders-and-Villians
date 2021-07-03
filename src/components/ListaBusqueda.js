import React from 'react';
import { FlatList, TouchableOpacity, Text, StyleSheet,View } from 'react-native';
import ImgHero from './HeroImage';

const allCharacters = { results: [] };

const ListaBusqueda = ({Busqueda}) =>{
     console.log('------------------------------------------------------');
     console.log(Busqueda);


    return(
        <View>
        <FlatList
            data={Busqueda}
            keyExtractor={(item)=> item.id}
            renderItem={({item})=> {
                return(
                    <TouchableOpacity style = {{width:'80%',height:400}}>
                        <Text>{item.name}</Text>
                        <ImgHero id = {item.image.url} />
                    </TouchableOpacity>
                )
            }}
        />
        </View>
    )
}

export default ListaBusqueda;