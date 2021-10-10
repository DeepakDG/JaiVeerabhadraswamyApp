import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import Home from "./Home";
import Splash from "./Splash";
import TabNavigator from "./BottomTabNavigator";

const AppNavigator = createStackNavigator(
  {
    Splash: {
      screen: Splash,
      navigationOptions: {
        headerShown: false,
      },
    },
    Root: {
      screen: TabNavigator,
      navigationOptions: {
        headerShown: false,
      },
    },
  },
  {
    initialRouteName: "Splash",
  }
);

export default createAppContainer(AppNavigator);
