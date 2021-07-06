import React, { useContext } from 'react';//
import { Appbar } from 'react-native-paper';
import { StyleSheet,Image } from 'react-native';
import themeContext from '../theme/themeContext';//

const Header = ({navigation}) => {
  const theme = useContext(themeContext);//
  return(
    <Appbar.Header style = {[{backgroundColor:theme.primaryColor}]}>
      <Image
          style={styles.img}
          source={require('../../assets/IconHeader.fw.png')}
        />
       <Appbar.Content title="Defenders and Villains" />
        <Appbar.Action icon= "cog" onPress={() => {navigation.navigate("Configuracion")}} />
    </Appbar.Header>
    )
  };

const styles = StyleSheet.create({
  img:{
    marginLeft:5,
    width: 44,
  }
})
export default Header;