import React, {useState, useEffect} from 'react';
import { Image } from 'react-native';
import { Card,Text, Title } from 'react-native-paper';
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

        console.log("///////////////////////////////////////////");
        console.log(biography);
    return(
        <Card>
            <Card.Title title= {info.name}/>
            <Card.Content>
                <Card.Cover source={{uri:`${imagen.url}`}} style={{height:350}} />
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
            </Card.Content>
        </Card>
    );
};

export default HeroCard;