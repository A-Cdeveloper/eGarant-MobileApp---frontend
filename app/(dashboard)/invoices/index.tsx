import ErrorPage from "@/components/Error";
import LoadingPage from "@/components/Loading";
import Headline from "@/components/ui/Headline";
import InvoiceListCard from "@/features/invoices/InvoiceListCard";
import { useInvoices } from "@/features/invoices/hooks/useInvoices";
import { FlashList } from "@shopify/flash-list";
import { Text, View } from "react-native";

const InvoicesPage = () => {
  const { isPending, invoices, error } = useInvoices();
  //const [searchValue, setSearchValue] = useState("");

  if (isPending) {
    return <LoadingPage />;
  }

  if (error) {
    return <ErrorPage error={error} />;
  }

  // const filteredInvoices = invoices?.filter((invoice) =>
  //   invoice.seller.businessName
  //     .toLowerCase()
  //     .includes(searchValue.toLowerCase())
  // );

  return (
    <View className="flex-1 p-6 bg-background">
      {/* TODO */}
      {/* <SearchInvoices
        setSearchValue={setSearchValue}
        searchValue={searchValue}
      /> */}

      {invoices?.length !== 0 ? (
        <>
          <Text className="text-primary mb-3 font-semibold text-right me-2 text-[12px]">
            Ukupno: {invoices?.length}
          </Text>
          <FlashList
            data={invoices}
            className="gap-4 rounded-lg mb-24"
            renderItem={({ item }) => (
              <InvoiceListCard key={item.iid} item={item} />
            )}
            estimatedItemSize={200}
          />
        </>
      ) : (
        <View className="flex-1 items-center justify-center">
          <Headline level={2} className="text-center">
            Nema pronadjenih racuna.
          </Headline>
        </View>
      )}
    </View>
  );
};

export default InvoicesPage;
