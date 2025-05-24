import Card from "@/components/ui/Card";
import { formatDate, formatPrice } from "@/lib/utils";
import { GuaranteeType } from "@/types/types";
import { useRouter } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";
import DetailsGaranteeShow from "../invoice/DetailsGaranteeShow";

const GuaranteeItem = ({ guarantee }: { guarantee: GuaranteeType }) => {
  const router = useRouter();

  return (
    <TouchableOpacity
      onPress={() => router.push(`invoices/${guarantee.invoice.iid}`)}
    >
      <Card key={guarantee.pid} className="rounded-none border-x-0">
        <View className="w-full gap-1">
          <Text className="font-normal text-[12px]">
            Datum prometa:{" "}
            {formatDate(new Date(guarantee.invoice.invoice_date))}
          </Text>
          <Text className="font-normal text-[12px]">
            {guarantee.invoice.seller.businessName}
          </Text>
          <Text className="font-normal text-[12px]">
            {guarantee.invoice.seller.address}, {guarantee.invoice.seller.city}
          </Text>
        </View>

        <View className="w-full flex-row items-center justify-between mt-4">
          <View className="w-1/2">
            <Text className="font-bold uppercase">{guarantee.name}</Text>
          </View>

          <View className="flex-row items-center justify-center gap-x-4">
            <Text className="font-semibold">
              {formatPrice(guarantee.price)}
            </Text>
          </View>
        </View>

        {guarantee.gperiod !== 0 && (
          <DetailsGaranteeShow
            gperiod={guarantee.gperiod as number}
            invoice_date={guarantee.invoice.invoice_date}
            removeGuarantee={false}
          />
        )}
      </Card>
    </TouchableOpacity>
  );
};

export default GuaranteeItem;
