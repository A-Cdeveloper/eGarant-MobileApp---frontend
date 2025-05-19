import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

const Button = ({
  onPress,
  children,
  className,
  ...props
}: {
  onPress: () => void;
  children: React.ReactNode;
  className?: string;
  [key: string]: any;
}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={onPress}
      className={`w-full py-2 rounded-xl ${className}`}
      {...props}
    >
      <Text className="text-white text-lg uppercase text-center font-inter-semibold">
        {children}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({});
