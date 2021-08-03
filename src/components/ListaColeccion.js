import React, { useContext } from 'react';
import { FlatList,View,Image,StyleSheet,Text,TouchableOpacity } from 'react-native';
import themeContext from '../theme/themeContext';

const ListaColeccion = ({coleccion}) => {
    const theme = useContext(themeContext);
    const Item = ({item}) => (
        <View>
            <View style = {[styles.elementos,{backgroundColor:theme.BckText}]}>
            <Image source = {{uri:`${item.imagen}`}} style = {[styles.imagen,{backgroundColor:theme.bckColor}]}/>
            <Text style = {styles.textos}>{item.nombre}</Text>
            <TouchableOpacity style = {[styles.boton,{backgroundColor:theme.botonSalir}]}>
                <Text style = {styles.textosBoton}>Eliminar</Text>
            </TouchableOpacity>
            </View>
        </View>
    
    )
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
            numColumns = {'3'}
        />
    </View>
     );
}

const styles = StyleSheet.create({
    imagen:{
        width:115,
        height:145,
        borderTopLeftRadius:17,
        borderTopRightRadius:17,
    },
    contenedor:{
        alignItems:'center',
    },
    textos:{
        textAlign:'center',
        fontSize:15,
        paddingVertical:10
    },
    elementos:{
        backgroundColor:'#ffffff',
        borderRadius:17,
        marginHorizontal:5,
        marginVertical:10,
        justifyContent:'center',
        alignContent:'center'
    },
    textosBoton:{
        textAlign:'center',
        fontSize:15,
        paddingVertical:4,
        color:'#ffffff'
    },
    boton:{
        backgroundColor:'#D50000',
        borderBottomRightRadius:10,
        borderBottomLeftRadius:10
    }
})
 
export default ListaColeccion;