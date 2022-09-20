import { scaleFont } from "./mixins";
import { FontStyle, FontWeight } from "./interfaces/ITypography";

// FONT FAMILY
export const FONT_FAMILY_REGULAR = "SF-Pro-Rounded-Regular";
export const FONT_FAMILY_MEDIUM = "SF-Pro-Rounded-Medium";
export const FONT_FAMILY_SEMIBOLD = "SF-Pro-Rounded-Semibold";
export const FONT_FAMILY_BOLD = "SF-Pro-Rounded-Bold";
export const FONT_FAMILY_BLACK = "SF-Pro-Rounded-Black";

// FONT SIZE
export const FONT_SIZE_52 = scaleFont(52);
export const FONT_SIZE_46 = scaleFont(46);
export const FONT_SIZE_36 = scaleFont(36);
export const FONT_SIZE_30 = scaleFont(30);
export const FONT_SIZE_28 = scaleFont(28);
export const FONT_SIZE_24 = scaleFont(24);
export const FONT_SIZE_22 = scaleFont(22);
export const FONT_SIZE_20 = scaleFont(20);
export const FONT_SIZE_18 = scaleFont(18);
export const FONT_SIZE_17 = scaleFont(17);
export const FONT_SIZE_16 = scaleFont(16);
export const FONT_SIZE_15 = scaleFont(15);
export const FONT_SIZE_14 = scaleFont(14);
export const FONT_SIZE_13 = scaleFont(13);
export const FONT_SIZE_12 = scaleFont(12);
export const FONT_SIZE_11 = scaleFont(11);

// LINE HEIGHT
export const LINE_HEIGHT_20 = scaleFont(20);
export const LINE_HEIGHT_16 = scaleFont(16);

// FONT STYLE

export const FONT_REGULAR: FontStyle = {
  //fontFamily: FONT_FAMILY_REGULAR,
  fontWeight: FontWeight.Regular,
};

export const FONT_MEDIUM: FontStyle = {
  //fontFamily: FONT_FAMILY_MEDIUM,
  fontWeight: FontWeight.Medium,
};

export const FONT_SEMIBOLD: FontStyle = {
  //fontFamily: FONT_FAMILY_SEMIBOLD,
  fontWeight: FontWeight.Semibold,
};

export const FONT_BOLD: FontStyle = {
  //fontFamily: FONT_FAMILY_BOLD,
  fontWeight: FontWeight.Bold,
};

export const FONT_BLACK: FontStyle = {
  //fontFamily: FONT_FAMILY_BLACK,
  fontWeight: FontWeight.Black,
};
