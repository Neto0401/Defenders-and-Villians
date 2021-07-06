import * as React from 'react';
import { ProgressBar, Colors } from 'react-native-paper';
import { StyleSheet } from 'react-native';

const BarraDeProgreso = ({Digito , Tipo}) => (
  <ProgressBar style={styles.barra}  progress={Digito/100} color={Colors.red800}/>
);

const styles = StyleSheet.create({
  barra:{
    height:6,
    marginBottom:15
  }
})
export default BarraDeProgreso;