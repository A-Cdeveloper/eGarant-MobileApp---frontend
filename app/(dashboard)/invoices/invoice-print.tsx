import { Ionicons } from "@expo/vector-icons";
import { useLocalSearchParams, useRouter } from "expo-router";
import React from "react";
import { Pressable, ScrollView, Text } from "react-native";
const InvoicePrintPage = () => {
  const { jurnal, iid } = useLocalSearchParams();
  const router = useRouter();
  return (
    <ScrollView className="flex-1 px-4 py-12 relative">
      <Pressable
        onPress={() => router.replace(`/invoices/${iid}`)}
        className="absolute -top-8 right-0 flex-row items-center justify-center gap-2 px-0"
      >
        {/* <Text className="text-lg font-bold">Zatvori</Text> */}
        <Ionicons name={"close-circle"} size={30} style={{ marginStart: 8 }} />
      </Pressable>
      <Text
        style={{
          fontFamily: "monospace", // ensures alignment
          textAlign: "left",
          fontSize: 13,
          lineHeight: 22,
          width: "90%",
        }}
      >
        {jurnal}
      </Text>
    </ScrollView>
  );
};

export default InvoicePrintPage;
