module.exports = {
  presets: ["module:metro-react-native-babel-preset"],
  plugins: [
    [
      "module-resolver",
      {
        //root: ["./src"],
        extensions: [
          ".ios.ts",
          ".android.ts",
          ".ts",
          ".ios.tsx",
          ".android.tsx",
          ".tsx",
          ".jsx",
          ".js",
          ".json",
        ],
        alias: {
          "@assets": "./src/assets",
          "@components": "./src/components",
          "@constants": "./src/constants",
          "@helpers": "./src/helpers",
          "@navigations": "./src/navigations",
          "@screens": "./src/screens",
          "@shared": "./src/shared",
          "@styles": "./src/styles",
          "@utils": "./src/utils",
        },
      },
    ],
  ],
};
