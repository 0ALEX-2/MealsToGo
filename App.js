import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React from "react";
import { ThemeProvider } from "styled-components/native";
import {
  useFonts as useOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";
import { Ionicons } from "@expo/vector-icons";
import { theme } from "./src/infrastructure/theme";
import { RestaurantsScreen } from "./src/features/restaurants/screens/restaurants.screen";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Settings, Text } from "react-native";
import { SafeArea } from "./src/components/utility/safe-area.component";
const Tab = createBottomTabNavigator();
export default function App() {
  const [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  });
  const [latoLoaded] = useLato({
    Lato_400Regular,
  });

  if (!oswaldLoaded || !latoLoaded) {
    return null;
  }
  const Map = () => (
    <SafeArea>
      <Text>Map</Text>
    </SafeArea>
  );
  const Settings = () => (
    <SafeArea>
      <Text>Settings</Text>
    </SafeArea>
  );
  const TAB_ICON = {
    Restaurants: "restaurant",
    Map: "map",
    Settings: "settings",
  };
  const createScreenOptions = ({ route }) => {
    const iconName = TAB_ICON[route.name];
    return {
      tabBarIcon: ({ size, color }) => (
        <Ionicons name={iconName} size={size} color={color} />
      ),
    };
  };

  return (
    <>
      <ThemeProvider theme={theme}>
        <NavigationContainer>
          <Tab.Navigator
            // screenOptions={({ route }) => ({
            //   tabBarIcon: ({ color, size }) => {
            //     let iconName;

            //     if (route.name === "Restautants") {
            //       iconName = "restaurant";
            //     } else if (route.name === "Settings") {
            //       iconName = "settings";
            //     } else if (route.name === "Map") {
            //       iconName = "map";
            //     }

            //     // You can return any component that you like here!
            //     return <Ionicons name={iconName} size={size} color={color} />;
            //   },
            // })}
            screenOptions={createScreenOptions}
            tabBarOptions={{
              activeTintColor: "tomato",
              inactiveTintColor: "gray",
            }}
          >
            <Tab.Screen name="Restaurants" component={RestaurantsScreen} />
            <Tab.Screen name="Map" component={Map} />
            <Tab.Screen name="Settings" component={Settings} />
          </Tab.Navigator>
        </NavigationContainer>
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}
