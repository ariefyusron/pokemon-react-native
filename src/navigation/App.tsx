import React from "react";
import { Platform, StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";

import Stack from "./Stack";

const App = () => {
  return (
    <NavigationContainer>
      {Platform.OS === "ios" && <StatusBar barStyle="dark-content" />}
      <Stack />
    </NavigationContainer>
  );
};

export default App;
