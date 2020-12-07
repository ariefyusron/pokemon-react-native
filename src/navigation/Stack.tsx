import React from "react";
import {
  TransitionPresets,
  createStackNavigator,
} from "@react-navigation/stack";

import Home from "../screens/Home";

const { Navigator, Screen } = createStackNavigator();

const Stack = () => (
  <Navigator
    initialRouteName="Home"
    screenOptions={{ ...TransitionPresets.SlideFromRightIOS }}
  >
    <Screen name="Home" component={Home} options={{ header: () => null }} />
  </Navigator>
);

export default Stack;
