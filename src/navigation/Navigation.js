import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import OnboardingScreen from "../screens/OnBoardingScreen/OnboardingScreen";
import WelcomeScreen from "../screens/OnBoardingScreen/WelcomeScreen";
import LoginScreen from "../screens/Authentications/Login&Forgot/LoginScreen";
import ForgotPasswordScreen from "../screens/Authentications/Login&Forgot/ForgotPasswordScreen";
import ForgotPasswordCodeConfirmationScreen from "../screens/Authentications/Login&Forgot/ForgotPasswordCodeConfirmationScreen";

const Stack = createNativeStackNavigator();
function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>

        <Stack.Screen name="OnboardingScreen" component={OnboardingScreen} />
        <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="ForgotPasswordScreen" component={ForgotPasswordScreen} />
        <Stack.Screen name="ForgotPasswordCodeConfirmationScreen" component={ForgotPasswordCodeConfirmationScreen} />
      
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;
