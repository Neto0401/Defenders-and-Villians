import  React, {useState,useContext} from 'react';
import { View,Text,Switch,StyleSheet } from 'react-native';
import { EventRegister } from 'react-native-event-listeners';
import themeContext from '../../theme/themeContext';

const Configuracion = () => {
    const theme = useContext(themeContext);
    const [mode, setMode] = useState(false);
    return ( 
        <View style={{backgroundColor:theme.bckColor,height:'100%'}}>
            <View style = {[styles.contenedor,{backgroundColor: theme.configCards,borderColor:theme.configCards}]}>
                <Text style = {[styles.texto,{color:theme.textColor}]}>Modo Nocturno</Text>
                <Switch
                style={styles.switch}  
                value={mode} 
                onValueChange={(value) => {
                setMode(value)
                EventRegister.emit("changeTheme",value);
                }}/>
            </View>
            
            <View style = {[styles.contenedorInfo, {backgroundColor:theme.configCards}]}>
                <View style = {styles.contenedorTitulo}>
                    <Text style = {styles.titulo}>Que es Defenders and Villains?</Text>
                </View>
                <View>
                    <Text style = {styles.textoContenido}>
                        Defenders and Villains es una aplicacion creada con la tecnologia de React Native para 
                        la creacion de aplicaiones en moviles, utilizando una API llamada SuperHero API de la cual
                        se extrae informacion sobre una extensa cantidad de tus superheroes y villanos favoritos, la 
                        cual es mostranda en pantalla, esta informacion puede ser, los nombres del personaje, sus 
                        puntos de habilidad, su apariencia, un poco sobre su biografia, etc. 
                    </Text>
                </View>
                <View style = {styles.contenedorTitulo}>
                    <Text style = {styles.titulo}>Creadores</Text>
                </View>
                <View>
                    <Text>Manuel Ernesto Romero y Jose Edgardo Portillo</Text>                
                </View>
            </View>
        </View>
    );
}
 
const styles = StyleSheet.create({
    contenedor:{
        margin:10,
        borderRadius:17,
        paddingTop:20,
        paddingLeft:20,
        alignContent:'center',
        flexDirection:'row',
        borderWidth:2,
    },
    texto:{
        fontSize:20,
        width:'85%',
        paddingBottom:20
    },
    switch:{
        marginBottom:10
    },
    contenedorInfo:{
        marginLeft:'3%',
        marginRight:'3%',
        paddingLeft:15,
        paddingRight:15,
        paddingBottom:40,
        borderRadius:17
    },
    textoContenido:{
        fontSize:15
    },
    contenedorTitulo:{
        marginBottom:25,
        marginTop:'10%'
    },
    titulo:{
        fontSize:20
    }
})
export default Configuracion;