import React from 'react';
import { Appbar } from 'react-native-paper';
import { StyleSheet,Image } from 'react-native';
import theme from '../theme';

const Header = ({navigation}) => (
    <Appbar.Header style = {styles.header}>
      <Image
          style={styles.img}
          source={require('../../assets/IconHeader.fw.png')}
        />
       <Appbar.Content title="Defenders and Villains" />
        <Appbar.Action icon= "cog" onPress={() => {navigation.navigate("Configuracion")}} />
    </Appbar.Header>
);

const styles = StyleSheet.create({
  header:{
    backgroundColor: theme.colors.primaryColor,
  },
  img:{
    marginLeft:5,
    width: 44,
  }
})
export default Header;