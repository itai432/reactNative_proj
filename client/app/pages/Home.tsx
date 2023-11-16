import React from "react";
import { TouchableOpacity, View, Text, StyleSheet } from "react-native";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import ScreenWrapper from '../components/ScreenWrapper';

function Home() {
  const navigation = useNavigation<NavigationProp<any>>();

  return (
    <ScreenWrapper>
    <View style={styles.container}>
      <TouchableOpacity 
        onPress={() => {
          navigation.navigate("login");
        }}
      >
        <Text style={styles.btn}>Press Here</Text>
      </TouchableOpacity>
    </View>
    </ScreenWrapper>
  );
}

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  btn: {
    fontSize: 35,
    borderRadius: 10,
    color: "blue",
  },
});
