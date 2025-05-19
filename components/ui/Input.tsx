import React from "react";
import { TextInput, TextInputProps } from "react-native";

type InputProps = TextInputProps & {
  className?: string;
  placeholder?: string;
  ref?: any;
};
const Input = ({
  className = "",
  placeholder = "",
  value,
  onChangeText,
  keyboardType = "default",
  ref,
  ...rest
}: InputProps) => {
  return (
    <TextInput
      className={`bg-white/80 w-full px-3 py-3 rounded-lg border
       border-primary-light/30 placeholder:text-primary-light/70 focus:border-secondary-light ${className}`}
      placeholder={placeholder}
      value={value}
      onChangeText={onChangeText}
      keyboardType={keyboardType}
      {...rest}
    />
  );
};

export default Input;
