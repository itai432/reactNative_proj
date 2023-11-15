import React from "react";
import { TouchableOpacity, View, Text, StyleSheet } from "react-native";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import Login from "./Login";

function Home() {
  const navigation = useNavigation<NavigationProp<any>>();

  return (
    <View style={styles.container}>
      <TouchableOpacity 
        onPress={() => {
          navigation.navigate("login");
        }}
      >
        <Text style={styles.btn}>Press Here</Text>
      </TouchableOpacity>
    </View>
  );
}

export default Home;

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
