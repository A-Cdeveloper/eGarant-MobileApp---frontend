import React, { useRef } from "react";
import { TextInput, View } from "react-native";

const OtpInput = ({
  otp,
  setOtp,
}: {
  otp: string[];
  setOtp: React.Dispatch<React.SetStateAction<string[]>>;
}) => {
  const inputsRef = useRef<Array<TextInput | null>>([]);

  const handleChange = (text: string, index: number) => {
    if (/^\d$/.test(text)) {
      const newOtp = [...otp];
      newOtp[index] = text;
      setOtp(newOtp);
      if (index < 5) {
        inputsRef.current[index + 1]?.focus();
      }
    } else if (text === "") {
      const newOtp = [...otp];
      newOtp[index] = "";
      setOtp(newOtp);
    }
  };

  const handleKeyPress = (e: any, index: number) => {
    if (e.nativeEvent.key === "Backspace" && otp[index] === "") {
      if (index > 0) {
        inputsRef.current[index - 1]?.focus();
      }
    }
  };

  return (
    <View className="flex-row justify-between space-x-4">
      {otp.map((digit, index) => (
        <TextInput
          key={index}
          className="w-12 h-14 border border-primary-light/30 text-center text-2xl bg-white"
          keyboardType="number-pad"
          maxLength={1}
          ref={(el) => {
            inputsRef.current[index] = el;
          }}
          onChangeText={(text) => handleChange(text, index)}
          onKeyPress={(e) => handleKeyPress(e, index)}
          value={digit}
        />
      ))}
    </View>
  );
};

export default OtpInput;
