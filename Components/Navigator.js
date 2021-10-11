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
        headerShown: true,
        headerTitle: "Jai Veerabhadra",
        headerStyle: {
          backgroundColor: "#FE724C",
        },
      },
    },
    Root: {
      screen: TabNavigator,
      navigationOptions: {
        headerShown: true,
        headerTitle: "Shri Veerabhadra",
        headerStyle: {
          backgroundColor: "#FE724C",
        },
      },
    },
  },
  {
    initialRouteName: "Splash",
  }
);

export default createAppContainer(AppNavigator);
