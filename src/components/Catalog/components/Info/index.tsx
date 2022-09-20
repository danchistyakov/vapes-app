import React from "react";
import Smoke from "@assets/images/catalog/smoke.svg";
import { StyleSheet, Text, View } from "react-native";
import { Mixins, Typography } from "@styles";
import Cart from "@components/Catalog/components/Info/components/Cart";

const Info = () => {
  return (
    <View style={styles.container}>
      <View style={styles.left}>
        <Smoke style={styles.icon} />
        <Text style={styles.title}>Каталог</Text>
      </View>
      <Cart />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: Mixins.rs(20),
  },
  left: {
    flexDirection: "row",
    alignItems: "center",
  },
  icon: {
    marginRight: Mixins.rs(14),
  },
  title: {
    ...Typography.FONT_BOLD,
    fontSize: Mixins.rs(24),
    lineHeight: Mixins.rs(29),
  },
});

export default Info;
