import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Check from "@assets/images/success/check.svg";
import { StyleSheet, Text } from "react-native";
import { Colors, Mixins, Typography } from "@styles";

const Success = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Check style={styles.image} />
      <Text style={styles.title}>Заявка оформлена</Text>
      <Text style={styles.description}>Скоро с вами свяжется наш менеджер, чтобы уточнить детали</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    paddingHorizontal: Mixins.rs(25),
    justifyContent: "center",
  },
  image: {
    alignSelf: "center",
  },
  title: {
    ...Typography.FONT_BOLD,
    fontSize: Mixins.rs(24),
    lineHeight: Mixins.rs(29),
    textAlign: "center",
    marginTop: Mixins.rs(60),
  },
  description: {
    ...Typography.FONT_SEMIBOLD,
    fontSize: Mixins.rs(18),
    lineHeight: Mixins.rs(21),
    color: Colors.grey,
    textAlign: "center",
    marginTop: Mixins.rs(12),
  },
});

export default Success;
