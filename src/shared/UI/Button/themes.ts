import { Colors, Mixins } from "@styles";

export const themes = {
  action: {
    button: {
      borderRadius: Mixins.rs(69),
      paddingVertical: Mixins.rs(15),
      backgroundColor: Colors.yellow,
      marginVertical: Mixins.rs(10),
    },
    text: {
      fontSize: Mixins.rs(20),
      lineHeight: Mixins.rs(25),
      color: Colors.black,
    },
  },
  default: {
    button: {
      padding: Mixins.rs(20),
      margin: Mixins.rs(20),
    },
  },
  edit: {
    button: {
      borderRadius: Mixins.rs(69),
      paddingHorizontal: Mixins.rs(18),
      paddingVertical: Mixins.rs(7),
      backgroundColor: Colors.white,
    },
    text: {
      fontSize: Mixins.rs(13),
      lineHeight: Mixins.rs(18),
      color: Colors.black,
    },
  },
  situation: {
    button: {
      borderRadius: Mixins.rs(69),
      paddingVertical: Mixins.rs(18),
    },
    text: {
      fontSize: Mixins.rs(20),
      lineHeight: Mixins.rs(25),
      color: Colors.white,
    },
  },
};
