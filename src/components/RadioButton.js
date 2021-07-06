import * as React from 'react';
import { View } from 'react-native';
import { RadioButton, Text } from 'react-native-paper';
import { StyleSheet } from 'react-native';
import theme from '../theme';
import { useState } from 'react';

const RButton = () => {
  const [value, setValue] = React.useState('first');
  const [mode, setMode] = useState(false);
  return (
    <RadioButton.Group onValueChange={newValue => setValue(newValue)} value={value}>
      <View style ={styles.buttonContainer}>
        <Text style = {styles.texto}>Modo Claro</Text>
        <RadioButton value={mode} onValueChange={() => {setMode((value) =>!value)}}/>
      </View>
      <View style ={styles.buttonContainer}>
        <Text style = {styles.texto}>Modo Nocturno</Text>
        <RadioButton value="second" />
      </View>
    </RadioButton.Group>
  );
};

const styles = StyleSheet.create({
  buttonContainer:{
    alignItems:'center',
    backgroundColor:theme.colors.bckColor,
    borderColor:theme.colors.blackColor,
    borderWidth:0.8,
    width:"95%",
    justifyContent:'space-between',
    flexDirection:'row',
    marginLeft:10,
    marginTop:15,
    padding:10,
    borderRadius:17,
  },
  texto:{
    fontSize: 17,
  }
})

export default RButton;