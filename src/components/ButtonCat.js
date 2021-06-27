import React, { useState } from "react";
import { FlatList, View, StatusBar, StyleSheet, Text, TouchableOpacity,Image, ImageBackground } from "react-native";

const DATA = [
  {
    id: "1",
    title: "Heroes",
    img: 'https://www.superherodb.com/pictures2/portraits/10/100/274.jpg'
  },
  {
    id: "2",
    title: "Villanos",
    img: 'https://www.superherodb.com/pictures2/portraits/10/100/1305.jpg'
  },
  {
    id: "3",
    title: "Marvel Comics",
    img: 'https://www.calendarclub.co.uk/resize/main/-/media/productimages/26/11/261146_main.jpg'
  },
  {
    id: "4",
    title: "DC Comics",
    img: 'https://cdn.vox-cdn.com/thumbor/w9GJ7x0SrYOdiqkVtRtWAOVDNb4=/0x0:1220x813/1200x800/filters:focal(513x310:707x504)/cdn.vox-cdn.com/uploads/chorus_image/image/68855430/dc_spotify.0.jpg'
  },
  {
    id: "5",
    title: "Otros",
    img: 'https://www.superherodb.com/pictures2/portraits/10/100/1206.jpg'
  },
  {
    id: "6",
    title: "A - Z",
    img: 'https://cdn.vox-cdn.com/thumbor/ExjOb2vgoh3GLUR8PHqHfOHlAUE=/0x0:1000x666/1200x800/filters:focal(470x60:630x220)/cdn.vox-cdn.com/uploads/chorus_image/image/66555096/p_34_00.0.jpg'
  },
];

const Item = ({ item, onPress }) => (
  <TouchableOpacity onPress={onPress} style={[styles.item]}>
    <Image style ={{width:'100%', height:'80%' , borderRadius:10,}} source = {{uri:`${item.img}`}} />
    <Text style={[styles.title]}>{item.title}</Text>
  </TouchableOpacity>
);

const ButtonCat = ({navigation}) => {
  const [selectedId, setSelectedId] = useState(null);

  const renderItem = ({ item }) => {
    const backgroundColor = item.id === selectedId ? "#DC07ED" : "#323CA6";
    const color = item.id === selectedId ? 'black' : 'black';

    return (
      <Item
        item={item}
        onPress={() => {navigation.navigate("Listado")}, setSelectedId(item.id)}
        backgroundColor={{ backgroundColor }}
        textColor={{ color }}
      />
    );
  };

  return (
      <FlatList style = {{flex: 0}}
        numColumns = {'2'}
        data={DATA}
        renderItem={renderItem}
        extraData={selectedId}
     />   
  );
 };

const styles = StyleSheet.create({
  container: {
   // flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor:'#323CA6',
    padding: 0,
    width:'40%',
    height:250,
    marginVertical: 8,
    marginHorizontal: 24,
    borderRadius:10, 
  },
  title: {
    marginTop:12,
    backgroundColor: '#fff',
    textAlign: 'center',
    fontSize: 20,
    width: '90%',
    borderTopRightRadius:10,
    borderBottomRightRadius:10,
  },
});

export default ButtonCat;