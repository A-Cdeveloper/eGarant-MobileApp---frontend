import React from "react";
import { Text } from "react-native";
import clsx from "clsx";

type HeadlineProps = {
  children: React.ReactNode;
  level?: 1 | 2 | 3;
  className?: string;
};

const headlineFontSizes = {
  1: "text-2xl",
  2: "text-xl",
  3: "text-lg",
};

const Headline = ({ children, className, level = 1 }: HeadlineProps) => {
  return (
    <Text
      className={clsx(
        headlineFontSizes[level],
        "w-full text-primary font-inter font-bold",
        className
      )}
    >
      {children}
    </Text>
  );
};

export default Headline;
