import React, { useState, useContext } from "react";
import { StyleSheet, View } from "react-native";
import { Button, Caption, Text, TextInput } from "react-native-paper";
import { Context as AuthContext } from "../../providers/AuthContext";

function SigninForm() {
  const { state, signin } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [error, setError] = useState("");

  function handleVerify(input) {
    if (input === "email") {
      if (!email) setEmailError(true);
      else setEmailError(false);
    } else if (input === "password") {
      if (!password) setPasswordError(true);
      else setPasswordError(false);
    } else if (input === "signin") {
      if (email && password && !emailError && !passwordError) {
        signin(email, password);
      }
    }
  }

  return (
    <View>
      {state.errorMessage != null && <Text>{state.errorMessage}</Text>}
      <TextInput
        mode="outlined"
        label="Email"
        autoCapitalize="none"
        onChangeText={setEmail}
        value={email}
        onBlur={() => handleVerify("email")}
        style = {styles.input}
      />
      {emailError && (
        <Caption>Por favor ingresa tu cuenta de correo electrónico</Caption>
      )}
      <TextInput
        mode="outlined"
        label="Contraseña"
        autoCapitalize="none"
        secureTextEntry
        onChangeText={setPassword}
        value={password}
        onBlur={() => handleVerify("password")}
        style = {styles.input}
      />
      {passwordError && <Caption>Por favor ingresa tu contraseña</Caption>}
      <Button
        mode="contained"
        style={styles.button}
        onPress={() => handleVerify("signin")}
      >
        Iniciar Sesion
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    marginTop: 20,
    marginBottom: 20,
    borderRadius: 100
  },
  input:{
    marginVertical:10
  }
});

export default SigninForm;
