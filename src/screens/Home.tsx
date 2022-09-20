import { FC } from "react";
import { Text, StyleSheet } from "react-native";
import { Colors, Mixins } from "../styles";
import Button from "../shared/UI/Button";
import Logo from "@assets/images/shared/Logo.svg";
import { SafeAreaView, useSafeAreaInsets } from "react-native-safe-area-context";
import colors from "../styles/colors";

const Home: FC<any> = ({ navigation }) => {
  const topInsets = useSafeAreaInsets().top;

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>Добро пожаловать</Text>
      <Logo style={styles.logo} />
      <Button activeOpacity={1} backgroundColor={Colors.purple} color={Colors.white} disabled style={styles.button}
              title="Мне меньше 18"
              theme="situation" />
      <Button backgroundColor={Colors.purple} color={Colors.white} onPress={() => navigation.push("Success")}
              style={styles.button} title="Мне есть 18"
              theme="situation" />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.black,
    paddingHorizontal: Mixins.rs(25),
    justifyContent: "center",
  },
  text: {
    color: Colors.white,
    fontSize: Mixins.rs(24),
    alignSelf: "center",
  },
  logo: {
    alignSelf: "center",
    marginTop: Mixins.rs(50),
    marginBottom: Mixins.rs(141),
  },
  button: {
    marginVertical: Mixins.rs(11),
  },
});

export default Home;
