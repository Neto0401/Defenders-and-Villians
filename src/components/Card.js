import React, {useState, useEffect} from 'react';
import { StyleSheet, View } from 'react-native';
import { Card,Text, Title} from 'react-native-paper';
import { fetchImage } from '../api';

const HeroCard = ({info,powerstats,biography}) =>{
    const [imagen, setImagen] = useState({});
    const getHeroes = async() =>{
        const response = await fetchImage();
        setImagen(response);
    }
        useEffect(() => {
           getHeroes()
        },[]);

    return(
        <Card>
            <Title style={styles.titulo}>{info.name}</Title>
            <Card.Content>
                <Card.Cover source={{uri:`${imagen.url}`}} style={styles.imagen} />
                <View style={styles.contenedorText}>
                <Title>Estadisticas</Title>
                <Text>Combate: {powerstats.combat}</Text>
                <Text>Inteligencia: {powerstats.intelligence}</Text>
                <Text>Poder: {powerstats.power}</Text>
                <Text>Velocidad: {powerstats.speed}</Text>
                <Text>Fuerza: {powerstats.strength}</Text>
                <Title>Datos Biograficos</Title>
                <Text>Nombre Completo: {biography["full-name"]}</Text>
                <Text>Lugar de Nacimiento: {biography["place-of-birth"]}</Text>
                <Text>Primera Aparicion: {biography.publisher}</Text>   
                <Text>Alineacion: {biography.alignment}</Text>         
                </View>
            </Card.Content>
        </Card>
    );
};

const styles = StyleSheet.create({
    contenedorText:{
      marginHorizontal: '2%',  
    },
    titulo:{
        textAlign:'center',
        fontSize: 40,
        paddingTop: '6%',
        paddingBottom: '3%',
    },
    imagen:{
        height: 520,
        width: '95%',
        marginHorizontal: '2%',
        shadowColor: "#000",
        elevation: 14,
        marginBottom: '6%',
    }
})

export default HeroCard;