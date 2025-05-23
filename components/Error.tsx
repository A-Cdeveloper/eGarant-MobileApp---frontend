import React from "react";
import { View } from "react-native";
import Headline from "./ui/Headline";

const ErrorPage = ({ error }: { error: string }) => {
  return (
    <View className="flex-1 items-center justify-center">
      <Headline level={2} className="text-center">
        {error}
      </Headline>
    </View>
  );
};

export default ErrorPage;
