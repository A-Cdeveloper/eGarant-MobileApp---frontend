import Button from "@/components/ui/Button";
import { useRouter } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

const DetailsActions = ({ jurnal, iid }: { jurnal: string; iid: string }) => {
  const router = useRouter();
  return (
    <View
      className="absolute bottom-0 p-4  flex-row items-center 
  justify-between w-full bg-warning gap-2"
    >
      <Button
        onPress={() =>
          router.replace({
            pathname: "/invoices/invoice-print",
            params: { jurnal },
          })
        }
        className="bg-primary py-2 w-1/2 max-w-[48%]"
      >
        <Text className="text-sm">Prikaz računa</Text>
      </Button>
      <Button onPress={() => {}} className="bg-danger py-2 w-1/2 max-w-[48%]">
        <Text className="text-sm">Obriši račun</Text>
      </Button>
    </View>
  );
};

export default DetailsActions;

const styles = StyleSheet.create({});
