import React, {useState, useEffect,useContext} from 'react';
import { StyleSheet, View,ImageBackground } from 'react-native';
import { Card,Text, Title} from 'react-native-paper';
//import theme from '../theme';
import themeContext from '../theme/themeContext';
import BarraDeProgreso from './ProgressBar';




const HeroCard = ({info}) =>{
    const theme = useContext(themeContext);
    return(
        
        <Card>
            <ImageBackground  source= {require('../../assets/BackgroundImageFinal.png')} style={{flex:0, resizeMode:"cover", justifyContent:'center',backgroundColor:theme.bckColor}}>
            <View style = {styles.contenedorTitulo}>
            <Title style={[styles.titulo,{backgroundColor:theme.BckText}]}>{info.name}</Title>
            </View>
            <Card.Content>
                <Card.Cover source={{uri:`${info.image.url}`}} style={styles.imagen} />
                <View style={styles.contenedorText}>
                    <View style = {[styles.ContenedorDatos,{backgroundColor:theme.BckText}]}>
                        <Title style = {styles.subtitulo}>Datos Biograficos</Title>
                        <Text style = {styles.Texto}>Nombre Completo: {info.biography["full-name"]}</Text>
                        <Text style = {styles.Texto}>Lugar de Nacimiento: {info.biography["place-of-birth"]}</Text>
                        <Text style = {styles.Texto}>Primera Aparicion: {info.biography.publisher}</Text>   
                        <Text style = {styles.Texto}>Alineacion: {info.biography.alignment}</Text>         
                    </View>
                    <View style ={[styles.ContenedorDatos,{backgroundColor:theme.BckText}]}>
                        <Title style={styles.subtitulo}>Estadisticas</Title>
                        <View style = {styles.progressBar}>
                            <Text>Combate: {info.powerstats.combat} </Text>
                                <BarraDeProgreso Digito = {info.powerstats.combat}/>
                        </View>
                        <View style = {styles.progressBar}>
                            <Text>Inteligencia: {info.powerstats.intelligence}</Text>
                            <BarraDeProgreso Digito = {info.powerstats.intelligence}/>
                        </View>
                        <View style = {styles.progressBar}>
                            <Text>Poder: {info.powerstats.power}</Text>
                            <BarraDeProgreso Digito = {info.powerstats.power}/>
                        </View>
                        <View style = {styles.progressBar}>
                            <Text>Velocidad: {info.powerstats.speed}</Text>
                            <BarraDeProgreso Digito = {info.powerstats.speed}/>
                        </View>
                        <View style = {styles.progressBar}>
                            <Text>Fuerza: {info.powerstats.strength}</Text>
                            <BarraDeProgreso Digito = {info.powerstats.strength}/>
                        </View>
                    </View>
                </View>
            </Card.Content>
            </ImageBackground>
        </Card>
        
    );
};

const division = (Numero)=>{
    const Respuesta = Numero/100
    return Respuesta
}
  
const styles = StyleSheet.create({
    contenedorText:{
      marginHorizontal: '2%',  
    },
    titulo:{
        textAlign:'center',
        fontSize: 40,
        paddingTop: '6%',
        paddingBottom: '3%',
        //backgroundColor:theme.colors.bckColor,
    },
    Texto:{
        marginBottom:8
    },
    contenedorTitulo:{
        alignItems:'stretch',
        margin:28,
        borderRadius:17
    },
    subtitulo:{
        textAlign:'center',
        marginBottom:20
    },
    imagen:{
        height: 520,
        width: '95%',
        marginHorizontal: '2%',
        shadowColor: "#000",
        elevation: 14,
        marginBottom: '6%',
        borderRadius:17
    },
    progressBar:{
        flexDirection:"column",
    },
    ContenedorDatos:{
        marginBottom: 15,
       // backgroundColor:theme.colors.bckColor,
        padding:10,
        borderRadius:10,
        paddingBottom:20
    }
})

export default HeroCard;