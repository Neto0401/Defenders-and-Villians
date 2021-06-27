import React from 'react';
import { Appbar,Text } from 'react-native-paper';
import { StyleSheet,Image } from 'react-native';

const Header = () => (
    <Appbar.Header style = {styles.header}>
      <Image
          style={styles.img}
          source={require('../../assets/IconHeader.fw.png')}
        />
       <Appbar.Content title="Defenders and Villains" />
        <Appbar.Action icon= "cog" onPress={() => {}} />
    </Appbar.Header>
);

const styles = StyleSheet.create({
  header:{
    backgroundColor:'#0F2441',
  },
  img:{
    marginLeft:5,
    width: 44,
  }
})
export default Header;