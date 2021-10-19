import { createAppContainer } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";
import Home from "./Home";
import News from "./News";
import About from "./AboutScreen";

const TabNavigator = createBottomTabNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      title: "ಹೋಮ್",
      
      headerStyle: {
        backgroundColor: '#2F95D6',
        borderBottomColor: '#ffffff',
        borderBottomWidth: 3,
      },
      headerTitleStyle: {
        fontSize: 38,
      },
      tabBarOptions: {
        activeTintColor: "rgb(245,87,108)",
        inactiveTintColor: "rgba(0,0,0,0.41)",

        // style: {
        //   borderTopLeftRadius: 30,
        //   borderTopRightRadius: 30,
        //   borderTopColor: "#fff",
        //   borderTopWidth: 0.5,
        //   backgroundColor: "#fff",
        //   shadowColor: "rgba(0, 0, 0, 0.19)",
        //   shadowRadius: 30,
        //   elevation: 5,
        //   shadowOpacity: 1,
        //   height: 55
        // },
        // tabStyle: {
        //   alignItems: "center",
        //   justifyContent: "center",
        //   paddingVertical: 4,
        //   backgroundColor: "#fff",
        //   borderTopLeftRadius: 30,
        //   borderTopRightRadius: 30,
        // }
      },
    },
  },
  News: {
    screen: News,
    headerStyle: {
        backgroundColor: '#2F95D6',
        borderBottomColor: '#ffffff',
        borderBottomWidth: 3,
      },
      headerTitleStyle: {
        fontSize: 38,
      },
    navigationOptions: {
      title: "ದೇವಸ್ಥಾನಗಳು",
      tabBarOptions: {
        activeTintColor: "rgb(245,87,108)",
        inactiveTintColor: "rgba(0,0,0,0.41)",
        // style: {
        //   borderTopLeftRadius: 30,
        //   borderTopRightRadius: 30,
        //   borderTopColor: "#fff",
        //   borderTopWidth: 0.5,
        //   backgroundColor: "#fff",
        //   shadowColor: "rgba(0, 0, 0, 0.19)",
        //   shadowRadius: 30,
        //   elevation: 5,
        //   shadowOpacity: 1,
        //   height: 55
        // },
        // tabStyle: {
        //   alignItems: "center",
        //   justifyContent: "center",
        //   paddingVertical: 4,
        //   backgroundColor: "#fff",
        //   borderTopLeftRadius: 30,
        //   borderTopRightRadius: 30,
        // }
      },
    },
  },
});

export default createAppContainer(TabNavigator);
