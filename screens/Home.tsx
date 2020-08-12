import React from "react";
import { Text, View, Button } from "react-native";

export default function Home({ navigation }) {
  return (
    <View>
      <Text>This will be our Home screen listing all user goals</Text>
      <Button
        title="Go to History"
        onPress={() => navigation.navigate("History")}
      ></Button>
    </View>
  );
}
