import React from "react";
import { View } from "react-native";

import ProductDetails from "./ProductDetails";
import { ProductType } from "@/types/types";

const DetailsProductsList = ({
  products,
  invoice_date,
  iid,
}: {
  products: ProductType[];
  invoice_date: string;
  iid: string;
}) => {
  return (
    <View className="flex-1 py-3 w-full gap-0">
      {products.map((product: ProductType) => (
        <ProductDetails
          product={product}
          key={product.pid}
          invoice_date={invoice_date}
          iid={iid}
        />
      ))}
    </View>
  );
};

export default DetailsProductsList;
