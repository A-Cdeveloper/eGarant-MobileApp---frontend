import { useLocalSearchParams, useRouter } from "expo-router";

import { ScrollView } from "react-native";

import DetailsHeader from "@/components/features/invoices/invoice/DetailsHeader";
import DetailsProductsList from "@/components/features/invoices/invoice/DetailsProductsList";
import DetailsSeller from "@/components/features/invoices/invoice/DetailsSeller";

import DetailsActions from "@/components/features/invoices/invoice/DetailsActions";

const invoice = {
  iid: "2d3c1d9a-cc07-4b5c-b39c-71f68762610c",
  invoice_number: "7X73BK8P-7X73BK8P-168731",
  invoice_date: "2024-12-13T08:42:06.789Z",
  invoice_amount: 2460.45,
  jurnal: `============ ФИСКАЛНИ РАЧУН ============
               108943740
             TOP LEVEL ONE
            1098097-BS DODO
           29. новембра ББ
               Власотинце
Касир:                              5020
ЕСИР број:                   888/1.3.4.6
-------------ПРОМЕТ ПРОДАЈА-------------
Артикли
========================================
Назив   Цена         Кол.         Укупно
EVO EP BMB 95/л (Ђ)
       173,00     14,280        2.470,44
----------------------------------------
Укупан износ:                   2.470,44
Платна картица:                 2.470,44
========================================
Ознака       Име      Стопа        Порез
Ђ           О-ПДВ   20,00%        411,74
----------------------------------------
Укупан износ пореза:              411,74
========================================
ПФР време:           12.05.2025. 0:09:46
ПФР број рачуна: M4E2362K-M4E2362K-25424
Бројач рачуна:             24948/25424ПП
========================================
======== КРАЈ ФИСКАЛНОГ РАЧУНА =========`,
  uid: "153729e7-64fb-413e-b4cd-31c858e8c43a",
  seller: {
    sid: "151032b2-ea91-4705-8424-2332dc0a9477",
    businessName: "ŠTERKA",
    address: "ТРГ ДРАГОЉУБА ПЕТКОВИЋА 12",
    city: "ВЛАСОТИНЦЕ",
    pib: "113236519",
  },
  products: [
    {
      pid: "1a2b3c4d-0001",
      product_name: "Papir za štampanje",
      quantity: 5,
      unit: "paket",
      price: 450,
      gperiod: 3,
    },
    {
      pid: "1a2b3c4d-0002",
      product_name: "Toner za štampač",
      quantity: 2,
      unit: "kom",
      price: 3200,
      gperiod: 6,
    },
    {
      pid: "1a2b3c4d-0003",
      product_name: "Sveska A4",
      quantity: 20,
      unit: "kom",
      price: 120,
      gperiod: null,
    },
    {
      pid: "1a2b3c4d-0004",
      product_name: "Hemijska olovka",
      quantity: 50,
      unit: "kom",
      price: 35,
      gperiod: null,
    },
    {
      pid: "1a2b3c4d-0005",
      product_name: "Fascikla sa gumicom",
      quantity: 10,
      unit: "kom",
      price: 95,
      gperiod: 18,
    },
    {
      pid: "1a2b3c4d-0006",
      product_name: "Koverte C5",
      quantity: 100,
      unit: "kom",
      price: 18,
      gperiod: 12,
    },
    {
      pid: "1a2b3c4d-0007",
      product_name: "Marker za belu tablu",
      quantity: 12,
      unit: "kom",
      price: 70,
      gperiod: null,
    },
    {
      pid: "1a2b3c4d-0008",
      product_name: "Stoni kalendar",
      quantity: 8,
      unit: "kom",
      price: 650,
      gperiod: null,
    },
    {
      pid: "1a2b3c4d-0009",
      product_name: "Kutija za dokumenta",
      quantity: 4,
      unit: "kom",
      price: 890,
      gperiod: null,
    },
    {
      pid: "1a2b3c4d-0010",
      product_name:
        "Stapici za lepljenje (pištolj) Stapici za lepljenje (pištolj)",
      quantity: 30,
      unit: "kom",
      price: 25,
      gperiod: 6,
    },
  ],
};

const InvoiceDetailPage = () => {
  const { iid } = useLocalSearchParams();
  const router = useRouter();
  const {
    invoice_number,
    invoice_date,
    invoice_amount,
    products,
    seller,
    jurnal,
  } = invoice;

  return (
    <>
      <ScrollView
        className="flex-1 px-4 relative bg-background"
        contentContainerStyle={{ paddingBottom: 80 }}
      >
        <DetailsHeader
          invoice_number={invoice_number}
          invoice_date={invoice_date}
          invoice_amount={invoice_amount}
        />

        <DetailsProductsList products={products} invoice_date={invoice_date} />

        <DetailsSeller seller={seller} />
      </ScrollView>
      <DetailsActions jurnal={jurnal} iid={iid as string} />
    </>
  );
};

export default InvoiceDetailPage;
