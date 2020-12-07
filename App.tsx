/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from "react";
import { Provider } from "react-redux";

import store from "./src/redux/store";
import NavigationApp from "./src/navigation";

const App = () => (
  <Provider store={store}>
    <NavigationApp />
  </Provider>
);

export default App;
