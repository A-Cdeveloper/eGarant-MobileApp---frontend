import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import { Link } from "expo-router";
import React, { useState } from "react";
import { Alert, Text, View } from "react-native";

const RegisterForm = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const handleSendEmail = () => {
    if (fullName === "" || email === "") {
      Alert.alert("Greška", "Ime i prezime i email moraju biti popunjeni.");
      return;
    }
    if (!email.includes("@")) {
      Alert.alert("Greška", "Unesite validan email.");
      return;
    }

    const user = {
      fullName,
      email,
      phone,
    };

    Alert.alert("Unesti podaci", `${JSON.stringify(user, null, 2)}`);
  };

  return (
    <View className="gap-3">
      <Input
        placeholder="Ime i prezime"
        value={fullName}
        onChangeText={setFullName}
        keyboardType="default"
      />
      <Input
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />
      <Input
        placeholder="Telefon"
        value={phone}
        onChangeText={setPhone}
        keyboardType="phone-pad"
      />
      <Button className="bg-secondary my-6" onPress={handleSendEmail}>
        Kreiraj nalog
      </Button>
      <Text className="text-center">
        Imate nalog?{" "}
        <Link href="auth/" className="underline text-secondary font-semibold">
          Prijavite se.
        </Link>
      </Text>
    </View>
  );
};

export default RegisterForm;
