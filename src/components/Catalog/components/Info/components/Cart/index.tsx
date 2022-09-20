import { StyleSheet, Text, View } from "react-native";
import { Colors, Mixins, Typography } from "@styles";
import CartIcon from "@assets/images/catalog/cart.svg";

const Cart = () => {
  return (
    <View style={styles.container}>
      <CartIcon />
      <View style={styles.amountContainer}>
        <Text style={styles.amountValue}>23</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: Mixins.rs(26),
  },
  amountContainer: {
    backgroundColor: Colors.purple,
    paddingHorizontal: Mixins.rs(8),
    borderRadius: Mixins.rs(29),
    marginLeft: "auto",
  },
  amountValue: {
    ...Typography.FONT_SEMIBOLD,
    color: Colors.white,
  },
});

export default Cart;
