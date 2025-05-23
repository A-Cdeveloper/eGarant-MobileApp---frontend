import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { useRouter } from "expo-router";

import { formatPrice, formatDate } from "@/lib/utils";
import Card from "@/components/ui/Card";

const InvoiceListCard = ({ item }: any) => {
  const router = useRouter();
  return (
    <TouchableOpacity onPress={() => router.push(`/invoices/${item.iid}`)}>
      <Card className="flex-row items-center justify-between mb-1">
        <View className="w-2/3">
          <Text className="font-bold">{item.seller.businessName}</Text>
          <Text className="text-[12px] text-primary-light">
            {formatDate(item.invoice_date)}
          </Text>
          <Text className="text-[12px] text-primary-light">
            Artikli pod garancijom ({item.productsWithWarrantyCount})
          </Text>
        </View>
        <View className="w-1/3">
          <Text className="w-full text-right">
            {formatPrice(item.invoice_amount)}
          </Text>
        </View>
      </Card>
    </TouchableOpacity>
  );
};

export default InvoiceListCard;

const styles = StyleSheet.create({});
