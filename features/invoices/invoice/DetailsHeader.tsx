import { StyleSheet, Text, View } from "react-native";
import { formatDate, formatPrice } from "@/lib/utils";
import Card from "@/components/ui/Card";

const DetailsHeader = ({
  invoice_number,
  invoice_date,
  invoice_amount,
}: {
  invoice_number: string | undefined;
  invoice_date: string;
  invoice_amount: number;
}) => {
  return (
    // <View className="border-b bg-white p-4 border-primary-light/30 py-3 w-full gap-1">
    <Card>
      <Text className="font-bold text-2xl text-primary">
        {formatPrice(invoice_amount)}
      </Text>
      <Text className=" text-primary-light">
        Broj računa: <Text className="font-semibold">{invoice_number}</Text>
      </Text>
      <Text className=" text-primary-light">
        Datum:{" "}
        <Text className="font-semibold">
          {formatDate(new Date(invoice_date))}
        </Text>
      </Text>
    </Card>
    // </View>
  );
};

export default DetailsHeader;

const styles = StyleSheet.create({});
