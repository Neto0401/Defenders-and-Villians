import React,{useContext} from 'react';
import { FlatList, TouchableOpacity, Text ,View, StyleSheet } from 'react-native';
import { CambioPantalla, GuardarId } from './api/index';
import themeContext from '../theme/themeContext';
import ImgHero from './HeroImage';

CambioPantalla({cambio:'Resultados de Busqueda'})

const ListaBusqueda = ({Busqueda, navigation}) =>{
    const theme = useContext(themeContext);

    return(
        <View>
        <FlatList
            data={Busqueda}
            keyExtractor={(item)=> item.id}
            renderItem={({item})=> {
                return(
                    <TouchableOpacity style = {[styles.contenedor,{backgroundColor:theme.secondaryColor}]} onPress={()=>{navigation.navigate("InfoHeroes",{informacion : item}, GuardarId({Guardar:item.id}))}}>
                        <ImgHero id = {item.image.url} />
                        <View style={styles.contenedorTexto}>
                        <Text style={[styles.texto,{backgroundColor:theme.BckText}]} >{item.name}</Text>
                        <Text style={[styles.texto2,{backgroundColor:theme.BckText}]} >{item.biography.publisher}</Text>
                        <Text style={[styles.texto2,{backgroundColor:theme.BckText}]} >{item.biography.alignment}</Text>
                        </View>
                    </TouchableOpacity>
                )
            }}
        />
        </View>
    )
}

const styles = StyleSheet.create({
    contenedor:{
        //backgroundColor: theme.colors.secondaryColor,
        width: '70%',
        height: 400,
        marginHorizontal: '15%',
        marginVertical: '5%',
        borderRadius: 17,
        paddingBottom: 10,
    },
    texto:{
        fontSize: 20,
        textAlign:'center',
        width: '90%',
       // backgroundColor: theme.colors.bckColor,
        marginBottom: 5,
        borderRadius: 10,
    },
    texto2:{
        fontSize: 10,
        marginVertical: 3,
        textAlign:'center',
        //backgroundColor: theme.colors.bckColor,
        width: '50%',
        borderRadius: 14,
    },
    contenedorTexto:{
        alignItems:'center',
        marginTop: -30,
    }

})

export default ListaBusqueda;