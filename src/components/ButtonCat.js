import React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar } from 'react-native';

const DATA = [
  {
    id: '1',
    title: 'Heroes',
  },
  {
    id: '2',
    title: 'Villanos',
  },
  {
    id: '3',
    title: 'Marvel Comics',
  },
  {
    id: '4',
    title: 'DC Comics',
  },
    {
    id: '4',
    title: 'Otros',
  },
    {
    id: '4',
    title: 'A-Z',
  },
];

const Item = ({ title }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

const ButtonCat = () => {
  const renderItem = ({ item }) => (
    <Item title={item.title} />
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        numColumns ={2}
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    height:'100%',
  },
  item: {
    width:'42%',
    height:290,
    backgroundColor: '#f9c2ff',
    padding:50,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 10,
  },
});

export default ButtonCat;
