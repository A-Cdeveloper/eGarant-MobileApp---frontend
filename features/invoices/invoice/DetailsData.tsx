import Card from "@/components/ui/Card";
import { formatPrice } from "@/lib/utils";
import { ProductType } from "@/types/types";
import { Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import DetailsGaranteeForm from "./DetailsGaranteeForm";
import DetailsGaranteeShow from "./DetailsGaranteeShow";

const ProductDetails = ({
  product,
  invoice_date,
}: {
  product: ProductType;
  invoice_date: string;
}) => {
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
        {product.gperiod === 0 && (
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

      {product.gperiod !== 0 && (
        <DetailsGaranteeShow
          gperiod={product.gperiod as number}
          invoice_date={invoice_date}
          removeGuarantee={true}
        />
      )}
      {showGaranteeForm && <DetailsGaranteeForm />}
    </Card>
  );
};

export default ProductDetails;
