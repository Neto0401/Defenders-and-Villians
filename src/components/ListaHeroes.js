import React, {useContext} from 'react';
import { FlatList,TouchableOpacity,Text,StyleSheet } from 'react-native';
import ImgHero from './HeroImage';
import { CambioPantalla, GuardarId } from './api/index';
import themeContext from '../theme/themeContext';

CambioPantalla({cambio:'Listado'})

const ListaHeroes = ({heroes, navigation}) => {
    const theme = useContext(themeContext);
    return(
        <FlatList
        data = {heroes.results}
        numColumns = {'3'}
        keyExtractor = {(item) => item.id}
        renderItem={({item}) =>{
            return(
                <TouchableOpacity style={[styles.touch,{backgroundColor:theme.BckText}]} onPress={()=>{navigation.navigate("Tarjeta del Personaje",{informacion : item}, GuardarId({Guardar:item.id}))}}>
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
        width:'27%',
        height:200,
        marginTop: '5%',
        marginLeft:'5%',
        borderRadius:17,    
    },
    texto: {
        marginTop: -10,
        textAlign:'center',
    },

})

export default ListaHeroes;  