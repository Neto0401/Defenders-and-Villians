import React, { useState } from "react";
import { Searchbar } from 'react-native-paper';
import { StyleSheet } from 'react-native';
import { BuscarPersonaje } from "../api";


const Busqueda = ({navigation}) => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
      <Searchbar style = {styles.searchBar}
        placeholder="Ingresa el nombre de un personaje"
        value={searchQuery}
        onChangeText={setSearchQuery}
        onIconPress={() =>{navigation.navigate("Resultados de Busqueda", BuscarPersonaje({Nombre: searchQuery}))}}
      />
  );
};

const styles = StyleSheet.create({
  searchBar:{
    margin: 5,
    borderRadius: 20
  }
})

export default Busqueda;
