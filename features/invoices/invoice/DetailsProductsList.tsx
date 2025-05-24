import React from "react";
import { View } from "react-native";

import ProductDetails from "./DetailsData";
import { ProductType } from "@/types/types";

const DetailsProductsList = ({
  products,
  invoice_date,
}: {
  products: ProductType[];
  invoice_date: string;
}) => {
  return (
    <View className="flex-1 py-3 w-full gap-0">
      {products.map((product: ProductType) => (
        <ProductDetails
          product={product}
          key={product.pid}
          invoice_date={invoice_date}
        />
      ))}
    </View>
  );
};

export default DetailsProductsList;
