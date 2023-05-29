import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import OnboardingScreen from "../screens/OnBoardingScreen/OnboardingScreen";
import WelcomeScreen from "../screens/OnBoardingScreen/WelcomeScreen";
import LoginScreen from "../screens/Authentications/Login&Forgot/LoginScreen";
import ForgotPasswordScreen from "../screens/Authentications/Login&Forgot/ForgotPasswordScreen";
import ForgotPasswordCodeConfirmationScreen from "../screens/Authentications/Login&Forgot/ForgotPasswordCodeConfirmationScreen";
import CreateNewPasswordScreen from "../screens/Authentications/Login&Forgot/CreateNewPasswordScreen";
import RegisterScreenName from "../screens/Authentications/Register/RegisterScreenName";
import RegisterDetailsScreen from "../screens/Authentications/Register/RegisterDetailsScreen";
import RegisterCreatePasswordScreen from "../screens/Authentications/Register/RegisterCreatePasswordScreen";
import RegisterUploadPhotoScreen from "../screens/Authentications/Register/RegisterUploadPhotoScreen";
import Tabs from "./Tabs";
import PlanYourDeliveryScreen from "../screens/PlanTheDelivery/PlanYourDeliveryScreen";
import PlanMapScreen from "../screens/PlanTheDelivery/PlanMapScreen";
import SchedulePickupScreen from "../screens/PlanTheDelivery/SchedulePickupScreen";
import ChoosePaymentMethodScreen from "../screens/PlanTheDelivery/ChoosePaymentMethodScreen";
import MapTrackingScreen from "../screens/Tracking Package/MapTrackingScreen";
import ActivityDeliveryDetails from "../screens/Activity/ActivityDeliveryDetails";

const Stack = createNativeStackNavigator();
function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>

        <Stack.Screen name="OnboardingScreen" component={OnboardingScreen} />
        <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
     {/* Login and Forgot Password Screen */}
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="ForgotPasswordScreen" component={ForgotPasswordScreen} />
        <Stack.Screen name="ForgotPasswordCodeConfirmationScreen" component={ForgotPasswordCodeConfirmationScreen} />
        <Stack.Screen name="CreateNewPasswordScreen" component={CreateNewPasswordScreen} />
         
        {/* Register Screens */}
        <Stack.Screen name="RegisterScreenName" component={RegisterScreenName} />
        <Stack.Screen name="RegisterDetailsScreen" component={RegisterDetailsScreen} />
        <Stack.Screen name="RegisterCreatePasswordScreen" component={RegisterCreatePasswordScreen} />
        <Stack.Screen name="RegisterUploadPhotoScreen" component={RegisterUploadPhotoScreen} />

        {/* Tab screens */}
        {/* <Stack.Screen name="HomeScreen" component={HomeScreen} /> */}
        <Stack.Screen name="tabs" component={Tabs} />
        
        {/* Plan The delivery */}
        <Stack.Screen name="PlanYourDeliveryScreen" component={PlanYourDeliveryScreen} />
        <Stack.Screen name="PlanMapScreen" component={PlanMapScreen} />
        <Stack.Screen name="SchedulePickupScreen" component={SchedulePickupScreen} />
        <Stack.Screen name="ChoosePaymentMethodScreen" component={ChoosePaymentMethodScreen} />
        
        {/* Tracking */}
        <Stack.Screen name="MapTrackingScreen" component={MapTrackingScreen} />
        
        {/* Activity */}
        <Stack.Screen name="ActivityDeliveryDetails" component={ActivityDeliveryDetails} />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;
