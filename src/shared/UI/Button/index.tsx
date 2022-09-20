import { FC } from "react";
import { ButtonProps } from "./interfaces";
import { styles } from "./styles";
import { Text, TouchableOpacity } from "react-native";
import { themes } from "./themes";

const Button: FC<ButtonProps> = ({
                                   activeOpacity,
                                   backgroundColor,
                                   color = "#151515",
                                   disabled = false,
                                   onPress,
                                   style,
                                   title,
                                   theme,
                                 }) => {
  return (
    <TouchableOpacity
      activeOpacity={activeOpacity}
      onPress={!disabled ? onPress : undefined}
      style={[styles.container, { backgroundColor }, themes[theme]?.button ?? {}, disabled ? styles.disabledButton : {}, style]}
    >
      <Text
        style={[styles.text, themes[theme]?.text ?? {}, { color }, disabled ? styles.disabledText : {}]}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;
