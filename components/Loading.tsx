import React from "react";
import { ActivityIndicator, View } from "react-native";

const LoadingPage = () => {
  return (
    <View className="flex-1 items-center justify-center">
      <ActivityIndicator size="large" color={"#252d3e"} />
    </View>
  );
};

export default LoadingPage;
