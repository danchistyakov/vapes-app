import { StyleSheet } from "react-native";
import { Mixins, Typography } from "@styles";

export const styles = StyleSheet.create({
  container: {
    borderRadius: Mixins.rs(69),
    backgroundColor: "#FAFF00",
  },
  disabledButton: {
    backgroundColor: "#383838",
  },
  text: {
    textAlign: "center",
    fontSize: Mixins.rs(15),
    ...Typography.FONT_SEMIBOLD,
    fontWeight: "600",
  },
  disabledText: {
    color: "#C7C7CC",
  },
});
