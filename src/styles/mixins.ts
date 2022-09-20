import { Dimensions, PixelRatio } from "react-native";

const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;
const guidelineBaseWidth = 375;

const wp = widthPercent => {
  const elemWidth = typeof widthPercent === "number" ? widthPercent : parseFloat(widthPercent);
  return PixelRatio.roundToNearestPixel(screenWidth * elemWidth / 100);
};

const hp = heightPercent => {
  // Parse string percentage input and convert it to number.
  const elemHeight = typeof heightPercent === "number" ? heightPercent : parseFloat(heightPercent);

  // Use PixelRatio.roundToNearestPixel method in order to round the layout
  // size (dp) to the nearest one that correspons to an integer number of pixels.
  return PixelRatio.roundToNearestPixel(screenHeight * elemHeight / 100);
};


export const scaleSize = size => (screenWidth / guidelineBaseWidth) * size;

export const scaleFont = size => size * PixelRatio.getFontScale();

const dimensions = (top, right = top, bottom = top, left = right, property) => {
  let styles = {};

  styles[`${property}Top`] = top;
  styles[`${property}Right`] = right;
  styles[`${property}Bottom`] = bottom;
  styles[`${property}Left`] = left;

  return styles;
};

export const margin = (top, right, bottom, left) => {
  return dimensions(top, right, bottom, left, "margin");
};

export const padding = (top, right, bottom, left) => {
  return dimensions(top, right, bottom, left, "padding");
};

export const fullWidth = () => {
  return Dimensions.get("window").width;
};

export const fullHeight = () => {
  return Dimensions.get("window").height;
};

export const isSmall = (size = 325) => {
  return fullWidth() <= size || fullHeight() <= 667;
};

export const isSuperSmall = (size = 325) => {
  return fullWidth() <= size;
};

export const isSmallAspectRatio = () => {
  const aspectRatio = fullHeight() / fullWidth();
  return aspectRatio <= 1.67;
};

export const realWidth = () => {
  return Dimensions.get("window").width * Dimensions.get("window").scale;
};

export const rs = (size, direction = "w", baseWidth = 375, baseHeight = 812) => {
  if (direction === "w") {
    return wp((size / baseWidth) * 100);
  } else if (direction === "h") {
    return hp((size / baseHeight) * 100);
  }
};

export const defaultShadow = () => {
  return {
    shadowColor: "#8F9CCA",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.24,
    shadowRadius: 36,
  };
};

export const boxShadow = (
  color,
  offset = { height: 2, width: 2 },
  radius = 8,
  opacity = 0.2,
) => {
  return {
    shadowColor: color,
    shadowOffset: offset,
    shadowOpacity: opacity,
    shadowRadius: radius,
    elevation: radius,
  };
};

export const circleRadius = () => {
  return {
    borderRadius: Math.round(fullWidth() + fullHeight()) / 2,
  };
};
