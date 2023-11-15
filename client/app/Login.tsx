import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { NavigationProp, useNavigation } from "@react-navigation/native";


function Login() {
  const navigation = useNavigation<NavigationProp<any>>();

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("home");
        }}
      >
        <Text style={styles.btn}>back to home</Text>
      </TouchableOpacity>
    </View>
  );
}

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  btn: {
    fontSize: 35,
    borderRadius: 10,
    color: "blue",
  },
});
