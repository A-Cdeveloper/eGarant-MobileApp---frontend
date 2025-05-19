import { useRouter } from "expo-router";
import React from "react";
import { Pressable, Text, TouchableOpacity, View } from "react-native";

const Widget = ({
  position,
  children,
  count,
  variant = "primary",
  href,
}: {
  position: string;
  children: React.ReactNode;
  count: number;
  variant: "primary" | "secondary";
  href: string;
}) => {
  const router = useRouter();
  return (
    <Pressable
      className={`absolute ${position}`}
      onPress={() => router.push(href)}
    >
      <View
        className={`p-0 border-[10px] ${
          variant === "primary" ? "border-primary" : "border-secondary"
        } bg-white w-[170px] h-[170px] rounded-full justify-center`}
      >
        <Text
          className={`text-center font-bold text-5xl ${
            variant === "primary" ? "text-primary" : "text-secondary"
          } font-inter-bold`}
        >
          {count}
        </Text>
        <Text className="text-primary text-center font-bold uppercase -mt-2">
          {children}
        </Text>
      </View>
    </Pressable>
  );
};

export default Widget;
