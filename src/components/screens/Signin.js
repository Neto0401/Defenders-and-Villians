import React from "react";
import { StyleSheet,Image,View } from "react-native";
import { Text,Button } from "react-native-paper";
import SigninForm from "../forms/SigninForm";


function Signin({ navigation }) {
  return (
    <View style={styles.container}>
      <View style ={styles.contenedorImagen}>
        <Image 
          source = {require ('../../../assets/Logo.fw.png')} 
          style = {styles.imagen}/>
      </View>
      <SigninForm />
        <Button 
          mode = {"contained"} 
          onPress={() => navigation.navigate("Signup")}
          style ={styles.button}
          >
          Registrarse
        </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height:'100%',
    justifyContent: "center",
    padding: 10,
    backgroundColor: '#ffffff',
    paddingHorizontal:40
  },
  contenedorImagen:{
    alignItems:'center',
    marginBottom:40
  },
  imagen:{
    width:276,
    height:250,
  },
  forgotPassword: {
    textAlign: "auto",
  },
  signup: {
    color: '#555555',
  },
  button:{
    borderRadius: 100,
  }
});

export default Signin;
