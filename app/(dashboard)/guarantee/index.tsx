import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Headline from "@/components/ui/Headline";
import { useGuarantees } from "@/features/invoices/hooks/useGuarantees";
import LoadingPage from "@/components/Loading";
import ErrorPage from "@/components/Error";
import { FlashList } from "@shopify/flash-list";
import GuaranteeItem from "@/features/invoices/guarantee/GuaranteeItem";

const GuaranteePage = () => {
  const { isPending, data, error } = useGuarantees();
  //const [searchValue, setSearchValue] = useState("");

  if (isPending) {
    return <LoadingPage />;
  }

  if (error) {
    return <ErrorPage error={error} />;
  }

  return (
    <View className="flex-1 p-6 bg-background">
      {data?.guarantees.length !== 0 ? (
        <>
          <Text className="text-primary mb-3 font-semibold text-right me-2 text-[12px]">
            Ukupno: {data?.total}
          </Text>
          <FlashList
            data={data?.guarantees}
            className="gap-4 rounded-lg mb-24"
            renderItem={({ item }) => <GuaranteeItem guarantee={item} />}
            estimatedItemSize={200}
          />
        </>
      ) : (
        <View className="flex-1 items-center justify-center">
          <Headline level={2} className="text-center">
            Nema proizvoda pod garancijom.
          </Headline>
        </View>
      )}
    </View>
  );
};

export default GuaranteePage;
