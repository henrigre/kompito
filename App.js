import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import LoadingScreen from "./app/screens/LoadingScreen";
import LoginScreen from "./app/screens/LoginScreen";
import RegisterScreen from "./app/screens/RegisterScreen";
import HomeScreen from "./app/screens/HomeScreen";

import * as firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyBsl8SXGwjeK8JcWRMReGI1heh-qXiQur8",
  authDomain: "kompit-dd1f4.firebaseapp.com",
  projectId: "kompit-dd1f4",
  storageBucket: "kompit-dd1f4.appspot.com",
  messagingSenderId: "1013953128658",
  appId: "1:1013953128658:web:1d81ccbd4c1d4ed184e50b",
  //measurementId: "G-VF4BZGL3NB",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
//firebase.analytics();

const AppStack = createStackNavigator({
  Home: HomeScreen,
});

const AuthStack = createStackNavigator({
  Login: LoginScreen,
  Register: RegisterScreen,
});

export default createAppContainer(
  createSwitchNavigator(
    {
      Loading: LoadingScreen,
      App: AppStack,
      Auth: AuthStack,
    },
    {
      initialRouteName: "Loading",
    }
  )
);
