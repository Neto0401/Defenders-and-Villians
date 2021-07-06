import React, {useContext} from 'react'
import { FlatList,StatusBar, StyleSheet, Text,View, TouchableOpacity,Image} from "react-native";
import { elergirCat } from "../api";
import themeContext from '../theme/themeContext';

const DATA = [
  {
    id: "1",
    title: "Heroes",
    img: 'https://www.superherodb.com/pictures2/portraits/10/100/274.jpg',
    category:"good",
    
  },
  {
    id: "2",
    title: "Villanos",
    img: 'https://www.superherodb.com/pictures2/portraits/10/100/1305.jpg',
    category:"bad",
  },
  {
    id: "3",
    title: "Marvel Comics",
    img: 'https://www.calendarclub.co.uk/resize/main/-/media/productimages/26/11/261146_main.jpg',
    category:"Marvel Comics",
  },
  {
    id: "4",
    title: "DC Comics",
    img: 'https://cdn.vox-cdn.com/thumbor/w9GJ7x0SrYOdiqkVtRtWAOVDNb4=/0x0:1220x813/1200x800/filters:focal(513x310:707x504)/cdn.vox-cdn.com/uploads/chorus_image/image/68855430/dc_spotify.0.jpg',
    category:"DC Comics",
  },
  {
    id: "5",
    title: "Otros",
    img: 'https://www.superherodb.com/pictures2/portraits/10/100/1206.jpg',
    category:"others",
  },
  {
    id: "6",
    title: "A - Z",
    img: 'https://cdn.vox-cdn.com/thumbor/ExjOb2vgoh3GLUR8PHqHfOHlAUE=/0x0:1000x666/1200x800/filters:focal(470x60:630x220)/cdn.vox-cdn.com/uploads/chorus_image/image/66555096/p_34_00.0.jpg',
    category:"all",
  },
];

const Item = ({ item, onPress }) => {
  const theme = useContext(themeContext);//
  return(
      <TouchableOpacity onPress={onPress} style={[styles.item,{backgroundColor:theme.secondaryColor}]}>
        <Image style ={{width:'100%', height:'80%' , borderRadius:10,}} source = {{uri:`${item.img}`}} />
        <Text style={[styles.title,{backgroundColor:theme.BckText, color:theme.textColor}]}>{item.title}</Text>
      </TouchableOpacity>
  )
};

const ButtonCat = ({navigation}) => {

  const renderItem = ({ item }) => {
    return (
      <Item
        item={item}
        onPress={() =>{navigation.navigate("Listado",elergirCat({Categoria: item.category})
        )
      }}
      />
    );
  };

  return (
    <View style = {styles.container}>
      <FlatList
        numColumns = {'2'}
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
    />   
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: StatusBar.currentHeight || 0,
    marginBottom: 300
  },
  item: {
    padding: 0,
    width:'40%',
    height:250,
    marginVertical: 8,
    marginHorizontal: 24,
    borderRadius:10, 
  },
  title: {
    marginTop:12,
    textAlign: 'center',
    fontSize: 20,
    width: '90%',
    borderTopRightRadius:10,
    borderBottomRightRadius:10,
  },
});

export default ButtonCat;