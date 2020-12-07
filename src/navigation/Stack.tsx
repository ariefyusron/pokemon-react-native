import React from "react";
import {
  TransitionPresets,
  createStackNavigator,
} from "@react-navigation/stack";

import Home from "../screens/Home";
import Detail from "../screens/Detail";

const { Navigator, Screen } = createStackNavigator();

const Stack = () => (
  <Navigator
    initialRouteName="Home"
    screenOptions={{ ...TransitionPresets.SlideFromRightIOS }}
  >
    <Screen name="Home" component={Home} options={{ header: () => null }} />
    <Screen name="Detail" component={Detail} options={{ header: () => null }} />
  </Navigator>
);

export default Stack;
