import React, { useState } from "react";
import { Searchbar,Button } from 'react-native-paper';
import { StyleSheet,View } from 'react-native';
import SearchResults from "./screens/SearchResults";
import { BuscarPersonaje } from "../api";


const Busqueda = ({navigation}) => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
      <Searchbar style = {styles.searchBar}
        placeholder="Ingresa el nombre de un personaje"
        value={searchQuery}
        onChangeText={setSearchQuery}
        onIconPress={() =>{navigation.navigate("SearchResults", BuscarPersonaje({Nombre: searchQuery}))}}
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
