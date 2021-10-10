import { createAppContainer } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";
import Home from "./Home";
import News from "./News";

const TabNavigator = createBottomTabNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      title: "Home",
    },
  },
  News: {
    screen: News,
    navigationOptions: {
      title: "News",
    },
  },
});

export default createAppContainer(TabNavigator);
