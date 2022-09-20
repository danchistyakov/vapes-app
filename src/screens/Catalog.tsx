import { FlatList, StyleSheet, TouchableOpacity, useWindowDimensions, View } from "react-native";
import { Colors, Mixins } from "@styles";
import { SafeAreaView } from "react-native-safe-area-context";
import Card from "@components/Catalog/components/Card";
import Info from "@components/Catalog/components/Info";

const Catalog = ({ navigation }) => {
  const items = ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""];
  const windowWidth = useWindowDimensions().width;

  const renderItem = ({ index }) => (
    <TouchableOpacity onPress={() => navigation.navigate("Product", { title: "Разработчик" })}>
      <Card style={[
        {
          width: (windowWidth - Mixins.rs(54)) / 3,
          height: Mixins.rs(154),
        },
      ]} />
    </TouchableOpacity>
  );
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.wrapper}>
        <Info />
        <FlatList
          data={items}
          numColumns={3}
          renderItem={renderItem}
          initialNumToRender={21}
          getItemLayout={(data, index) => (
            { length: Mixins.rs(154), offset: Mixins.rs(154) * index, index }
          )}
          maxToRenderPerBatch={10}
        />
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
    marginHorizontal: Mixins.rs(20),
    alignItems: "center",
  },
  title: {
    color: Colors.black,
    fontSize: Mixins.rs(24),
    lineHeight: Mixins.rs(29),
  },
});

export default Catalog;
