import "dotenv/config";

export default ({ config }) => ({
  ...config,
  name: "E-GARANT",
  slug: "e-garant",
  scheme: "e-garant",
  version: "1.0.0",
  orientation: "portrait",
  icon: "./assets/icon.png",
  userInterfaceStyle: "light",
  newArchEnabled: true,
  splash: {
    image: "./assets/splash.png",
    resizeMode: "cover",
    backgroundColor: "#f57a5c",
  },
  ios: {
    supportsTablet: true,
    config: {
      googleMapsApiKey: process.env.EXPO_PUBLIC_GOOGLE_API,
    },
  },
  android: {
    adaptiveIcon: {
      foregroundImage: "./assets/icon.png",
      backgroundColor: "#f57a5c",
    },
    edgeToEdgeEnabled: true,
    package: "com.acdeveloper.qrcodeapp",
    config: {
      googleMaps: {
        apiKey: process.env.EXPO_PUBLIC_GOOGLE_API,
      },
    },
  },
  web: {
    favicon: "./assets/favicon.png",
  },
  plugins: ["expo-router", "expo-font", "expo-camera", "expo-maps"],
  extra: {
    router: {},
    eas: {
      projectId: "ca7cb898-59ae-4eb0-aa38-acdd0fa72827",
    },
  },
});
