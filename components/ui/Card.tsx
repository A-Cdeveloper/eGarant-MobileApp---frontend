import clsx from "clsx";
import React from "react";
import { View } from "react-native";

const Card = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <View
      className={clsx(
        "border bg-white p-4 border-primary-light/20 py-3 w-full gap-1 rounded-lg",
        className
      )}
    >
      {children}
    </View>
  );
};

export default Card;
