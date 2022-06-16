import React from "react";
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import { Provider as BlogProvider } from "./src/context/BlogContext";
import IndexScreen from "./src/screens/IndexScreen";
import ShowScreen from "./src/screens/ShowScreen";
import CreateScreen from "./src/screens/CreateScreen";

const navigator = createStackNavigator({
  Index: IndexScreen,
  Show: ShowScreen,
  Create: CreateScreen,
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