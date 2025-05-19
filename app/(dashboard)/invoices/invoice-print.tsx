import Card from "@/components/ui/Card";
import { useLocalSearchParams } from "expo-router";
import React from "react";
import { ScrollView, Text, View } from "react-native";

const InvoicePrintPage = () => {
  const { jurnal } = useLocalSearchParams();
  // console.log(jurnal);
  return (
    <Card className="flex-1 px-3">
      <ScrollView>
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
    </Card>
  );
};

export default InvoicePrintPage;
