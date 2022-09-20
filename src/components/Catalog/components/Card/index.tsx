import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import FastImage from "react-native-fast-image";
import { Colors, Mixins, Typography } from "@styles";

const Card = ({ style }) => {
  return (
    <View style={[{ ...styles.container }, ...style]}>
      <FastImage
        source={{ uri: "https://sun1-99.userapi.com/s/v1/ig2/uea9fv4b9z6T9jDlBzVj-SHIVFoVR6AzYv--C1Q6UiasLqjTgua7tTQKatiKPDQ7yLf_WvTQQZghxtr8RVw7gLhC.jpg?size=400x417&quality=95&crop=72,36,1404,1464&ava=1" }}
        style={styles.image} />
      <Text style={styles.title}>EFIR Pro 3000 — Арбуз-Лёд</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.white,
  },
  image: {
    width: Mixins.rs(100),
    height: Mixins.rs(112),
    borderWidth: Mixins.rs(2),
    borderColor: "rgba(143, 0, 255, 0.09)",
    borderRadius: Mixins.rs(10),
  },
  title: {
    ...Typography.FONT_MEDIUM,
    fontSize: Mixins.rs(10),
    marginTop: Mixins.rs(8),
    maxWidth: Mixins.rs(80),
  },
});

export default Card;
