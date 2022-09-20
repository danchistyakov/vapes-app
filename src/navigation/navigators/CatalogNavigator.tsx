import React from "react";
import Catalog from "@screens/Catalog";
import Back from "@assets/images/shared/Back.svg";
import Product from "@screens/Product";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { DefaultConfig } from "../configs/default";

const CatalogNavigator = () => {
  const CatalogStack = createNativeStackNavigator();

  return (
    <CatalogStack.Navigator initialRouteName="Catalog">
      <CatalogStack.Screen name="Catalog" component={Catalog}
                           options={({ navigation }) => DefaultConfig(navigation, "Каталог")} />
      <CatalogStack.Screen name="Product" component={Product}
                           options={({ navigation, route }: any) => DefaultConfig(navigation, route.params.title)} />
    </CatalogStack.Navigator>
  );
};

export default CatalogNavigator;
