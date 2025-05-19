import { Alert, StyleSheet, Text, View } from "react-native";
import React from "react";
import OtpInput from "@/components/ui/OtpInput";
import Button from "@/components/ui/Button";

const OTPForm = ({
  otp,
  setOtp,
}: {
  otp: string[];
  setOtp: React.Dispatch<React.SetStateAction<string[]>>;
}) => {
  const handleVerifyOtp = () => {
    const enteredOtp = otp.join("");

    Alert.alert("Uneti kod je", `${enteredOtp}`);
  };

  return (
    <View>
      <OtpInput otp={otp} setOtp={setOtp} />
      <Button className="bg-secondary my-6" onPress={handleVerifyOtp}>
        Verifikuj OTP kod
      </Button>
    </View>
  );
};

export default OTPForm;

const styles = StyleSheet.create({});
