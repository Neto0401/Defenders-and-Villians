import React from 'react'
import { SafeAreaView, View,FlatList,StyleSheet,Text,StatusBar } from 'react-native'
import { Button, Card, Title } from 'react-native-paper'

const data = [
    {
        id: 1,
        title: 'Heroes',
    },
    {
        id: 2,
        title: 'Villanos',
    },
    {
        id: 3,
        title: 'Marvel Comics'
    },
    {
        id:4,
        title: 'DC Comics'
    },
    {
        id:5,
        title: 'Otros'
    },
    {
        id:6,
        title: 'A - Z'
    }

    
]

const Item = ({title})=>(
    <View>
        <Text>{title}</Text>
    </View>
)

const Catbuttons = () => {

const renderItem = ({item})=>(
    <Item title = {item.title} />
)

    return ( 

        <SafeAreaView style = {styles.container}>
            <FlatList
            numColumns ={2}
            data = {data}
            renderItem = {renderItem}
            keyExtractor = {item => item.id}
            />
        </SafeAreaView>
        
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: StatusBar.currentHeight || 0,
    },
    item: {
      padding: 20,
      marginVertical: 8,
      marginHorizontal: 16,
    },
    title: {
      fontSize: 32,
    },
  });
 
export default Catbuttons;