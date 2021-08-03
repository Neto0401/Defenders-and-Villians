import React, { useContext, useEffect, useState } from "react";
import { StyleSheet, View,Image } from "react-native";
import { Button, Caption, Text, TextInput } from "react-native-paper";
import { Context as AuthContext } from "../../providers/AuthContext";
import { Context as InfoContext } from "../../providers/InfoPerfilContext";
import { validate } from "email-validator";

function SignupForm({ navigation }) {
  const { state, signup } = useContext(AuthContext);
  const { crearPuntuacion } = useContext (InfoContext)
  var [crear, setCrear] = useState(0);
  const [coleccionCantidad, setColeccionCantidad] = useState(0);
  const [puntuacion, setPuntuacion] = useState(0)

  const [nickName, setNickName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [fullnameError, setFullnameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [confirmPasswordError, setConfirmPasswordError] = useState(false);
  const [error, setError] = useState(false);

  const Imagenes = { 
    uno : "https://www.superherodb.com/pictures2/portraits/10/100/274.jpg",
    dos : "https://www.superherodb.com/pictures2/portraits/10/100/1305.jpg"
  }
  const [imagen, setImagen] = useState(Imagenes.uno);
  const onPress2 = () => setImagen(Imagenes.dos);
  const onPress = () => setImagen(Imagenes.uno);  

  // Verificar si el usuario se registra en la app
  useEffect(() => {
    if (state.registered) navigation.navigate("Home");
  }, [state.registered]);

  function handleVerify(input) {
    if (input === "nickName") {
      if (!nickName) setFullnameError(true);
      else setFullnameError(false);
    } else if (input === "email") {
      if (!email) setEmailError(true);
      else if (!validate(email)) setEmailError(true);
      else setEmailError(false);
    } else if (input === "password") {
      if (!password) setPasswordError(true);
      else if (password.length < 6) setPasswordError(true);
      else setPasswordError(false);
    } else if (input === "confirmPassword") {
      if (!confirmPassword) setConfirmPasswordError(true);
      else if (password !== confirmPassword) setConfirmPasswordError(true);
      else setConfirmPasswordError(false);
    } else if (input === "signup") {
      if (
        nickName &&
        email &&
        password &&
        confirmPassword &&
        !fullnameError &&
        !emailError &&
        !passwordError &&
        !confirmPasswordError
      ) {
        try {
          signup(nickName, email, password,imagen,coleccionCantidad,puntuacion)
        } catch (error) {
          console.log(error);
        }
      } else setError("All fields are required!");
    }
  }

  return (
    <View style ={styles.contenedor}>
      <View style = {styles.contenedorTitulo}>
        <Text style = {styles.titulo}>Elige tu Avatar</Text>
      </View>
      <View style = {styles.avatarContenedor}>
        <Button 
        mode = {'contained'}
        style = {styles.button}
        onPress = {onPress}
        >
        IZQ
        </Button>
        <Image source ={{uri:`${imagen}`}} style = {styles.imagen} />     
        <Button 
        mode = {'contained'}
        style = {styles.button}
        onPress = {onPress2}
        >
        DER
        </Button>
    </View>
      {error && <Text>{error}</Text>}
      {state.errorMessage != null && <Text>{state.errorMessage}</Text>}
      <TextInput
        mode="outlined"
        label="NickName"
        value={nickName}
        onChangeText={setNickName}
        onBlur={() => handleVerify("nickName")}
      />
      {fullnameError && <Caption>Please enter your name</Caption>}
      <TextInput
        mode="outlined"
        label="Email"
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
        onBlur={() => handleVerify("email")}
      />
      {emailError && <Caption>Please enter your email address</Caption>}
      <TextInput
        mode="outlined"
        label="Contraseña"
        value={password}
        onChangeText={setPassword}
        autoCapitalize="none"
        secureTextEntry
        onBlur={() => handleVerify("password")}
      />
      {passwordError && (
        <Caption>Please enter a valid password. Min 6 characters</Caption>
      )}
      <TextInput
        mode="outlined"
        label="Confirma tu contraseña"
        value={confirmPassword}
        onChangeText={setConfirmPassword}
        autoCapitalize="none"
        secureTextEntry
        onBlur={() => handleVerify("confirmPassword")}
      />
      {confirmPasswordError && (
        <Caption>Please enter your password confirmation</Caption>
      )}
      <Button
        mode="contained"
        style={styles.button}
        onPress={() => handleVerify("signup")}
      >
        Crear Cuenta
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  contenedor:{
    
  },
  button: {
    marginTop: 20,
    marginBottom: 20,
    borderRadius:100
  },
  contenedorTitulo:{
    alignItems:'center',
    paddingBottom:40,
  },
  titulo:{
    fontSize:20
  },
  imagen:{
    width: 170,
    height:170,
    borderRadius:100,
    marginHorizontal:20,
    borderColor:'#ffffff',
    borderWidth:3
  },
  avatarContenedor:{
      flexDirection:'row',
      alignItems:'center',
      justifyContent:'center',
      paddingBottom: 50
  },
  button:{
      borderRadius:100
  }
});

export default SignupForm;
