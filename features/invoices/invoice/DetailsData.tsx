import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import { formatPrice } from "@/lib/utils";
import DetailsGaranteeShow from "./DetailsGaranteeShow";
import DetailsGaranteeForm from "./DetailsGaranteeForm";
import { Ionicons } from "@expo/vector-icons";
import Card from "@/components/ui/Card";

const ProductDetails = ({ product, invoice_date }: any) => {
  const [showGaranteeForm, setShowGaranteeForm] = useState(false);
  return (
    <Card
      key={product.pid}
      className="rounded-none border-x-0 flex-row flex-wrap items-center justify-between"
    >
      <View className="w-1/2">
        <Text className="font-bold uppercase">{product.name}</Text>
        <Text className="font-normal text-[12px]">kol. {product.quantity}</Text>
      </View>

      <View className="flex-row items-center justify-center gap-x-4">
        <Text className="font-semibold">{formatPrice(product.price)}</Text>
        {product.gperiod === null && (
          <TouchableOpacity
            onPress={() => setShowGaranteeForm((prev) => !prev)}
          >
            <Ionicons
              name={showGaranteeForm ? "bag-remove" : "bag-add"}
              size={22}
              className="-mt-2"
              color={"#252d3e"}
            />
          </TouchableOpacity>
        )}
      </View>

      {product.gperiod !== null && (
        <DetailsGaranteeShow
          gperiod={product.gperiod}
          invoice_date={invoice_date}
        />
      )}
      {showGaranteeForm && <DetailsGaranteeForm />}
    </Card>
  );
};

export default ProductDetails;

const styles = StyleSheet.create({});
