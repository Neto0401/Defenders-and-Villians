import React, { useContext } from 'react';//
import { Appbar } from 'react-native-paper';
import { StyleSheet,Image } from 'react-native';
import themeContext from '../theme/themeContext';//

const HeaderBack = ({navigation,regreso}) => {
  const theme = useContext(themeContext);//
  return(
    <Appbar.Header style = {[{backgroundColor:theme.primaryColor}]}>
    <Appbar.Action icon= "arrow-left" onPress={() => {navigation.navigate(regreso)}} />
       <Appbar.Content title="Regresar" />
    </Appbar.Header>
    )
  };

const styles = StyleSheet.create({
  img:{
    marginLeft:5,
    width: 44,
  }
})
export default HeaderBack;