import React from "react";
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import IndexScreen from "./src/screens/IndexScreen";
import { BlogProvider } from "./src/context/BlogContext";

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
  return (
    <BlogProvider>
      <App />
    </BlogProvider>
  )
};