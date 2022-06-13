import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import IndexScreen from "./src/screens/IndexScreen";
import React from "react";

const navigator = createStackNavigator({
  Index: IndexScreen,
}, {
  initialRouteName: "Index",
  defaultNavigationOptions: {
    title: "Blog",
  }
});
// createAppContainer is a function that takes a component and returns a component
const App = createAppContainer(navigator);
// wrapped in custom component to add a provider and add a context system
export default () => {
  return <App />;
};