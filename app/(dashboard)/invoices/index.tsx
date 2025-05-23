import { FlashList } from "@shopify/flash-list";
import { Text, View } from "react-native";
import InvoiceListCard from "@/features/invoices/InvoiceListCard";
import Headline from "@/components/ui/Headline";
import SearchInvoices from "@/features/invoices/SearchInvoices";
import { useState } from "react";

const invoices = [
  {
    iid: "2d3c1d9a-cc07-4b5c-b39c-71f68762610c",
    invoice_number: "7X73BK8P-7X73BK8P-168731",
    invoice_date: "2025-05-13T08:42:06.789Z",
    invoice_amount: 191,
    uid: "153729e7-64fb-413e-b4cd-31c858e8c43a",
    seller: {
      sid: "151032b2-ea91-4705-8424-2332dc0a9477",
      businessName: "ŠTERKA",
      address: "ТРГ ДРАГОЉУБА ПЕТКОВИЋА 12",
      city: "ВЛАСОТИНЦЕ",
      pib: "113236519",
    },
  },
  {
    iid: "39ea5f40-09b5-4b5d-b07e-ee9f55beb4ab",
    invoice_number: "M4E2362K-M4E2362K-25424",
    invoice_date: "2025-05-11T22:09:46Z",
    invoice_amount: 2470.44,
    uid: "153729e7-64fb-413e-b4cd-31c858e8c43a",
    seller: {
      sid: "151032b2-ea91-4705-8424-2332dc0a9477",
      businessName: "TOP LEVEL ONE TOP LEVEL ONE TOP LEVEL ONE",
      address: "29. новембра ББ",
      city: "ВЛАСОТИНЦЕ",
      pib: "108943740",
    },
  },
  {
    iid: "2d3c1d9a-cc07-4b5c-b39c-71f68762610c",
    invoice_number: "7X73BK8P-7X73BK8P-168731",
    invoice_date: "2025-05-13T08:42:06.789Z",
    invoice_amount: 191,
    uid: "153729e7-64fb-413e-b4cd-31c858e8c43a",
    seller: {
      sid: "151032b2-ea91-4705-8424-2332dc0a9477",
      businessName: "ŠTERKA",
      address: "ТРГ ДРАГОЉУБА ПЕТКОВИЋА 12",
      city: "ВЛАСОТИНЦЕ",
      pib: "113236519",
    },
  },
  {
    iid: "39ea5f40-09b5-4b5d-b07e-ee9f55beb4ab",
    invoice_number: "7X73BK8P-7X73BK8P-168731",
    invoice_date: "2025-05-13T08:42:06.789Z",
    invoice_amount: 1391,
    uid: "153729e7-64fb-413e-b4cd-31c858e8c43a",
    seller: {
      sid: "151032b2-ea91-4705-8424-2332dc0a9477",
      businessName: "ŠTERKA",
      address: "ТРГ ДРАГОЉУБА ПЕТКОВИЋА 12",
      city: "ВЛАСОТИНЦЕ",
      pib: "113236519",
    },
  },
  {
    iid: "2d3c1d9a-cc07-4b5c-b39c-71f68762610c",
    invoice_number: "7X73BK8P-7X73BK8P-168731",
    invoice_date: "2025-05-13T08:42:06.789Z",
    invoice_amount: 191,
    uid: "153729e7-64fb-413e-b4cd-31c858e8c43a",
    seller: {
      sid: "151032b2-ea91-4705-8424-2332dc0a9477",
      businessName: "ŠTERKA",
      address: "ТРГ ДРАГОЉУБА ПЕТКОВИЋА 12",
      city: "ВЛАСОТИНЦЕ",
      pib: "113236519",
    },
  },
  {
    iid: "39ea5f40-09b5-4b5d-b07e-ee9f55beb4ab",
    invoice_number: "7X73BK8P-7X73BK8P-168731",
    invoice_date: "2025-05-13T08:42:06.789Z",
    invoice_amount: 1391,
    uid: "153729e7-64fb-413e-b4cd-31c858e8c43a",
    seller: {
      sid: "151032b2-ea91-4705-8424-2332dc0a9477",
      businessName: "ŠTERKA",
      address: "ТРГ ДРАГОЉУБА ПЕТКОВИЋА 12",
      city: "ВЛАСОТИНЦЕ",
      pib: "113236519",
    },
  },
  {
    iid: "2d3c1d9a-cc07-4b5c-b39c-71f68762610c",
    invoice_number: "7X73BK8P-7X73BK8P-168731",
    invoice_date: "2025-05-13T08:42:06.789Z",
    invoice_amount: 191,
    uid: "153729e7-64fb-413e-b4cd-31c858e8c43a",
    seller: {
      sid: "151032b2-ea91-4705-8424-2332dc0a9477",
      businessName: "ŠTERKA",
      address: "ТРГ ДРАГОЉУБА ПЕТКОВИЋА 12",
      city: "ВЛАСОТИНЦЕ",
      pib: "113236519",
    },
  },
  {
    iid: "39ea5f40-09b5-4b5d-b07e-ee9f55beb4ab",
    invoice_number: "7X73BK8P-7X73BK8P-168731",
    invoice_date: "2025-05-13T08:42:06.789Z",
    invoice_amount: 1391,
    uid: "153729e7-64fb-413e-b4cd-31c858e8c43a",
    seller: {
      sid: "151032b2-ea91-4705-8424-2332dc0a9477",
      businessName: "ŠTERKA",
      address: "ТРГ ДРАГОЉУБА ПЕТКОВИЋА 12",
      city: "ВЛАСОТИНЦЕ",
      pib: "113236519",
    },
  },
  {
    iid: "2d3c1d9a-cc07-4b5c-b39c-71f68762610c",
    invoice_number: "7X73BK8P-7X73BK8P-168731",
    invoice_date: "2025-05-13T08:42:06.789Z",
    invoice_amount: 191,
    uid: "153729e7-64fb-413e-b4cd-31c858e8c43a",
    seller: {
      sid: "151032b2-ea91-4705-8424-2332dc0a9477",
      businessName: "ŠTERKA",
      address: "ТРГ ДРАГОЉУБА ПЕТКОВИЋА 12",
      city: "ВЛАСОТИНЦЕ",
      pib: "113236519",
    },
  },
  {
    iid: "39ea5f40-09b5-4b5d-b07e-ee9f55beb4ab",
    invoice_number: "7X73BK8P-7X73BK8P-168731",
    invoice_date: "2025-05-13T08:42:06.789Z",
    invoice_amount: 1391,
    uid: "153729e7-64fb-413e-b4cd-31c858e8c43a",
    seller: {
      sid: "151032b2-ea91-4705-8424-2332dc0a9477",
      businessName: "ŠTERKA",
      address: "ТРГ ДРАГОЉУБА ПЕТКОВИЋА 12",
      city: "ВЛАСОТИНЦЕ",
      pib: "113236519",
    },
  },
  {
    iid: "2d3c1d9a-cc07-4b5c-b39c-71f68762610c",
    invoice_number: "7X73BK8P-7X73BK8P-168731",
    invoice_date: "2025-05-13T08:42:06.789Z",
    invoice_amount: 191,
    uid: "153729e7-64fb-413e-b4cd-31c858e8c43a",
    seller: {
      sid: "151032b2-ea91-4705-8424-2332dc0a9477",
      businessName: "ŠTERKA",
      address: "ТРГ ДРАГОЉУБА ПЕТКОВИЋА 12",
      city: "ВЛАСОТИНЦЕ",
      pib: "113236519",
    },
  },
  {
    iid: "39ea5f40-09b5-4b5d-b07e-ee9f55beb4ab",
    invoice_number: "7X73BK8P-7X73BK8P-168731",
    invoice_date: "2025-05-13T08:42:06.789Z",
    invoice_amount: 1391,
    uid: "153729e7-64fb-413e-b4cd-31c858e8c43a",
    seller: {
      sid: "151032b2-ea91-4705-8424-2332dc0a9477",
      businessName: "ŠTERKA",
      address: "ТРГ ДРАГОЉУБА ПЕТКОВИЋА 12",
      city: "ВЛАСОТИНЦЕ",
      pib: "113236519",
    },
  },
];

const InvoicesPage = () => {
  const [searchValue, setSearchValue] = useState("");

  const filteredInvoices = invoices.filter((invoice) =>
    invoice.seller.businessName
      .toLowerCase()
      .includes(searchValue.toLowerCase())
  );
  return (
    <View className="flex-1 p-6 bg-background">
      <SearchInvoices
        setSearchValue={setSearchValue}
        searchValue={searchValue}
      />

      {filteredInvoices.length !== 0 ? (
        <>
          <Text className="text-primary mb-3 font-semibold text-right me-2 text-[12px]">
            Ukupno: {filteredInvoices.length}
          </Text>
          <FlashList
            data={filteredInvoices}
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
