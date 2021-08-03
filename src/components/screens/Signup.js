import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { Text } from "react-native-paper";
import SignupForm from "../forms/SignupForm";

function Signup({ navigation }) {
  return (
    <View style={styles.container}>
      <SignupForm />
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text>
          Ya tienes una cuenta? <Text style={styles.signin}>Inicia Sesion</Text>
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: '#ffffff',
    paddingHorizontal:30
  },
  signin: {
    color: '#333333',
  },
});

export default Signup;
