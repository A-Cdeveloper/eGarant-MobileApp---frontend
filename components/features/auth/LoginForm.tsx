import { Alert, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";
import { Link } from "expo-router";

const LoginForm = ({
  setShowOtp,
}: {
  setShowOtp: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const [email, setEmail] = useState("");

  const handleSendEmail = () => {
    if (!email.includes("@")) {
      Alert.alert("Greška", "Unesite validan email.");
      return;
    }

    const code = "123456";
    setShowOtp(true);
    Alert.alert("OTP poslat", `Kod za testiranje: ${code}`);
  };

  return (
    <View>
      <Input
        placeholder="Unesite email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />
      <Button className="bg-secondary my-6" onPress={handleSendEmail}>
        Uloguj se
      </Button>
      <Text className="text-center">
        Nemate nalog?{" "}
        <Link
          href="auth/register"
          className="underline text-secondary font-semibold"
        >
          Registrujte se.
        </Link>
      </Text>
    </View>
  );
};

export default LoginForm;

const styles = StyleSheet.create({});
