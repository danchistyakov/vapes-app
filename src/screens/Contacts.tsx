import React from "react";
import { Image, StyleSheet, Text } from "react-native";
import Button from "@shared/UI/Button";
import { Colors, Mixins, Typography } from "@styles";
import { SafeAreaView } from "react-native-safe-area-context";

const Contacts = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <Image source={require("@assets/images/contacts/clip.png")} style={styles.image} />
      <Text style={styles.title}>Для связи с нами</Text>
      <Text style={styles.subtitle}>Мы всегда на связи и готовы поддержать наших клиентов</Text>
      <Button backgroundColor={Colors.purple} color={Colors.white}
              style={styles.button}
              title="Написать в Telegram"
              theme="situation" />
      <Button backgroundColor={Colors.black} color={Colors.white}
              style={styles.button}
              title="Позвонить"
              theme="situation" />
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
    marginBottom: Mixins.rs(20),
    width: Mixins.rs(300),
    height: Mixins.rs(300),
  },
  title: {
    ...Typography.FONT_SEMIBOLD,
    color: Colors.black,
    fontSize: Mixins.rs(24),
    alignSelf: "center",
    marginBottom: Mixins.rs(12),
  },
  subtitle: {
    ...Typography.FONT_SEMIBOLD,
    color: Colors.grey,
    fontSize: Mixins.rs(21),
    alignSelf: "center",
    marginBottom: Mixins.rs(60),
  },
  button: {
    marginVertical: Mixins.rs(11),
  },
});

export default Contacts;
