import { Colors, Mixins, Typography } from "@styles";

export const themes = {
  search: {
    ...Typography.FONT_SEMIBOLD,
    backgroundColor: Colors.darkGrey,
    borderRadius: Mixins.rs(16),
    paddingVertical: Mixins.rs(17),
    paddingHorizontal: Mixins.rs(25),
    fontSize: Mixins.rs(17),
    lineHeight: Mixins.rs(22),
    color: Colors.white,
  },
};
