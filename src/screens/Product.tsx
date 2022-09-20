import { ScrollView, StyleSheet, Text, View } from "react-native";
import FastImage from "react-native-fast-image";
import { Colors, Mixins, Typography } from "@styles";
import { SafeAreaView } from "react-native-safe-area-context";
import { FONT_SEMIBOLD } from "../styles/typography";
import Button from "@shared/UI/Button";
import React from "react";

const Product = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.wrapper}>
        <ScrollView>
          <FastImage
            source={{ uri: "https://sun1-99.userapi.com/s/v1/ig2/uea9fv4b9z6T9jDlBzVj-SHIVFoVR6AzYv--C1Q6UiasLqjTgua7tTQKatiKPDQ7yLf_WvTQQZghxtr8RVw7gLhC.jpg?size=400x417&quality=95&crop=72,36,1404,1464&ava=1" }}
            style={styles.image}
          />
          <Text style={styles.title}>Курит сиги</Text>
          <Text style={styles.aboutTitle}>О продукте</Text>
          <Text style={styles.aboutItem}>Код товара: ZN-90086717</Text>
        </ScrollView>
        <Button backgroundColor={Colors.purple} color={Colors.white}
                style={styles.button}
                title="Добавить в корзину"
                theme="situation" />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  wrapper: {
    flex: 1,
    marginHorizontal: Mixins.rs(20),
  },
  image: {
    height: Mixins.rs(342),
    alignItems: "center",
  },
  title: {
    ...Typography.FONT_BOLD,
    color: Colors.black,
    marginTop: Mixins.rs(20),
    fontSize: Mixins.rs(24),
    lineHeight: Mixins.rs(29),
    textAlign: "center",
  },
  aboutTitle: {
    ...Typography.FONT_SEMIBOLD,
    color: Colors.black,
    fontSize: Mixins.rs(20),
    lineHeight: Mixins.rs(24),
    marginTop: Mixins.rs(32),
  },
  aboutItem: {
    color: Colors.grey,
    marginTop: Mixins.rs(14),
    fontSize: Mixins.rs(18),
    lineHeight: Mixins.rs(21),
  },
  button: {
    width: "100%",
    //position: "absolute",
    //bottom: Mixins.rs(70),
  },
});

export default Product;
