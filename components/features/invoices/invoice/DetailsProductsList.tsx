import React from "react";
import { View } from "react-native";

import ProductDetails from "./DetailsData";

const DetailsProductsList = ({ products, invoice_date }: any) => {
  return (
    <View className="flex-1 py-3 w-full gap-0">
      {products.map((product: any) => (
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
