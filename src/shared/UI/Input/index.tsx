import { FC } from "react";
import { TextInput } from "react-native";
import { Colors } from "@styles";
import { InputProps } from "./interfaces";
import { icons } from "./icons";
import { themes } from "./themes";

const Input: FC<InputProps> = ({
                                 backgroundColor,
                                 color = Colors.white,
                                 onChange,
                                 style,
                                 title,
                                 theme,
                               }) => {
  return (
    <>
      {/*{icons[theme]}*/}
      <TextInput onChangeText={onChange} placeholder={title} placeholderTextColor={Colors.white}
                 style={[themes[theme], style]}>

      </TextInput>
    </>
  );
};

export default Input;
