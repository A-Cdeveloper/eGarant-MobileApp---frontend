import RegisterForm from "@/features/auth/RegisterForm";
import { Link } from "expo-router";
import React from "react";
import { Keyboard, Text, TouchableWithoutFeedback, View } from "react-native";

const RegisterPage = () => {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View className="flex-1 justify-center px-12 py-6 gap-6 bg-background">
        <RegisterForm />
      </View>
    </TouchableWithoutFeedback>
  );
};

export default RegisterPage;
