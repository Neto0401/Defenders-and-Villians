import React from 'react';
import { FlatList,View,Image,StyleSheet,Text,TouchableOpacity } from 'react-native';

const Item = ({item}) => (
    <View>
        <View style = {styles.elementos}>
        <Image source = {{uri:`${item.imagen}`}} style = {styles.imagen}/>
        <Text style = {styles.textos}>{item.nombre}</Text>
        <TouchableOpacity style = {styles.boton}>
            <Text style = {styles.textos}>Eliminar</Text>
        </TouchableOpacity>
        </View>
    </View>

)

const ListaColeccion = ({coleccion}) => {
    const renderItem = ({item}) =>{
        return(
            <Item
                item = {item}
            />
        );
    };

    return ( 
    <View style = {styles.contenedor}> 
        <FlatList
            data = {coleccion}
            renderItem = {renderItem}
            numColumns = {'2'}
        />
    </View>
     );
}

const styles = StyleSheet.create({
    imagen:{
        width:180,
        height:230,
        borderRadius:10
    },
    contenedor:{
        alignItems:'center',
    },
    textos:{
        textAlign:'center',
        fontSize:15,
        padding:4
    },
    elementos:{
        backgroundColor:'#ffffff',
        marginHorizontal:20,
        marginVertical:10,
        borderRadius:10
    },
    boton:{
        backgroundColor:'#E44343',
        padding:7,
        borderBottomRightRadius:10,
        borderBottomLeftRadius:10
    }
})
 
export default ListaColeccion;