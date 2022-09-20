import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./src/screens/Home";
import { StyleSheet } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Contacts from "@screens/Contacts";
import Back from "@assets/images/shared/Back.svg";
import Catalog from "@screens/Catalog";
import Product from "@screens/Product";
import CatalogNavigator from "./src/navigation/navigators/CatalogNavigator";
import { DefaultConfig, hideHeader } from "./src/navigation/configs/default";
import Success from "@screens/Success";

const App = () => {
  const Stack = createNativeStackNavigator();

  return (
    <SafeAreaProvider style={styles.container}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={Home} options={hideHeader} />
          <Stack.Screen name="Shop" component={CatalogNavigator} options={hideHeader} />
          <Stack.Screen name="Contacts" component={Contacts}
                        options={({ navigation }) => DefaultConfig(navigation, "Контакты")} />
          <Stack.Screen name="Success" component={Success} options={hideHeader} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
