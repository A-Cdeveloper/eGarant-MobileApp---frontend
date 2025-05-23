import { useLocalSearchParams, useRouter } from "expo-router";

import { ScrollView } from "react-native";

import DetailsHeader from "@/features/invoices/invoice/DetailsHeader";
import DetailsProductsList from "@/features/invoices/invoice/DetailsProductsList";
import DetailsSeller from "@/features/invoices/invoice/DetailsSeller";

import DetailsActions from "@/features/invoices/invoice/DetailsActions";
import { useInvoice } from "@/features/invoices/hooks/useInvoice";
import LoadingPage from "@/components/Loading";
import ErrorPage from "@/components/Error";
import { ProductType, SellerType } from "@/types/types";

const InvoiceDetailPage = () => {
  const { iid } = useLocalSearchParams();

  const { isPending, data, error } = useInvoice(iid as string);

  if (isPending) {
    return <LoadingPage />;
  }

  if (error) {
    return <ErrorPage error={error} />;
  }

  return (
    <>
      <ScrollView
        className="flex-1 px-4 relative bg-background"
        contentContainerStyle={{ paddingBottom: 80, paddingTop: 20 }}
      >
        <DetailsHeader
          invoice_number={data?.invoice_number} //data?.invoice.invoice_number as string}
          invoice_date={data?.invoice_date as string}
          invoice_amount={data?.invoice_amount as number}
        />
        <DetailsSeller seller={data?.seller as SellerType} />

        <DetailsProductsList
          products={data?.products as ProductType[]}
          invoice_date={data?.invoice_date as string}
          iid={iid as string}
        />
      </ScrollView>
      <DetailsActions jurnal={data?.jurnal as string} iid={iid as string} />
    </>
  );
};

export default InvoiceDetailPage;
