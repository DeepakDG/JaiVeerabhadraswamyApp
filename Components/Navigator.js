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
        // headerTitle: "Jai Veerabhadra",
        // headerStyle: {
        //   backgroundColor: "#fe724c",
        // },
      },
    },
    Root: {
      screen: TabNavigator,
      navigationOptions: {
        headerShown: true,
        headerTitle: "Shri Veerabhadra",
        headerStyle: {
          backgroundColor: "#fe724c",
        },
      },
    },
  },
  {
    initialRouteName: "Splash",
  }
);

export default createAppContainer(AppNavigator);
