import  React, {useContext} from 'react';
import { ProgressBar, Colors } from 'react-native-paper';
import { StyleSheet } from 'react-native';
import themeContext from '../theme/themeContext';


const BarraDeProgreso = ({Digito , Tipo}) => {
  const theme = useContext(themeContext);//
  return(
  <ProgressBar style={styles.barra}  progress={Digito/100} color={theme.progressBar}/>
  )
};

const styles = StyleSheet.create({
  barra:{
    height:6,
    marginBottom:15
  }
})
export default BarraDeProgreso;