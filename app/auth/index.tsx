import LoginForm from "@/features/auth/LoginForm";
import OTPForm from "@/features/auth/OTPForm";
import { useState } from "react";
import { Keyboard, TouchableWithoutFeedback, View } from "react-native";

const LoginPage = () => {
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [showOtp, setShowOtp] = useState(false);
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View className="flex-1 justify-center px-12 py-6 gap-6 bg-background">
        {!showOtp && <LoginForm setShowOtp={setShowOtp} />}

        {showOtp && <OTPForm otp={otp} setOtp={setOtp} />}
      </View>
    </TouchableWithoutFeedback>
  );
};

export default LoginPage;
