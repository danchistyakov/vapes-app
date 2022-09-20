import React from "react";
import Back from "@assets/images/shared/Back.svg";

export const hideHeader = { headerShown: false };

export const DefaultConfig = (navigation, title) => ({
  headerShadowVisible: false,
  headerLeft: (props) => (
    <Back {...props} onPress={() => navigation.goBack()} />
  ),
  title,
});
