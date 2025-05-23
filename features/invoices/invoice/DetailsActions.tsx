import Button from "@/components/ui/Button";
import { useRouter } from "expo-router";
import { StyleSheet, Text, View } from "react-native";
import { useDeleteInvoice } from "../hooks/useDeleteInvoice";
import LoadingPage from "@/components/Loading";
import ErrorPage from "@/components/Error";

const DetailsActions = ({ jurnal, iid }: { jurnal: string; iid: string }) => {
  const router = useRouter();
  const {
    mutateAsync: deleteInvoiceMutation,
    isPending,
    error,
  } = useDeleteInvoice(iid as string);

  if (isPending) {
    return <LoadingPage />;
  }

  if (error) {
    return <ErrorPage error={error.message} />;
  }

  const handleDelete = async () => {
    try {
      await deleteInvoiceMutation(); // ✅ wait for deletion and query invalidation
      router.replace("/invoices"); // ✅ replaces current screen with updated list
    } catch (e) {
      console.error("Failed to delete:", e);
    }
  };

  return (
    <View
      className="absolute bottom-0 p-4  flex-row items-center 
  justify-between w-full bg-background gap-2"
    >
      <Button
        onPress={() =>
          router.push({
            pathname: "/invoices/invoice-print",
            params: { jurnal, iid },
          })
        }
        className="bg-primary py-2 w-1/2 max-w-[48%]"
      >
        <Text className="text-sm">Prikaz računa</Text>
      </Button>
      <Button
        onPress={handleDelete}
        className="bg-danger py-2 w-1/2 max-w-[48%]"
      >
        <Text className="text-sm">Obriši račun</Text>
      </Button>
    </View>
  );
};

export default DetailsActions;

const styles = StyleSheet.create({});
