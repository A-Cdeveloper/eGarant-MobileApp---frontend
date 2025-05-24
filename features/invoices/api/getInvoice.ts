import { InvoiceTypeWithProducts } from "@/types/types";

type InvoiceSuccessResponse = {
  success: true;
  productsCount: number;
  productsWithWarrantyCount: number;
  data: InvoiceTypeWithProducts;
};

type InvoiceErrorResponse = {
  success: false;
  error: {
    message: string;
  };
};

export type InvoiceResponse = InvoiceSuccessResponse | InvoiceErrorResponse;

export async function getInvoice(iid: string): Promise<InvoiceResponse> {
  const res = await fetch(`${process.env.EXPO_PUBLIC_API}/invoices/${iid}`, {
    headers: {
      Authorization: `Bearer ${process.env.EXPO_PUBLIC_TOKEN}`,
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });

  const data = (await res.json()) as InvoiceResponse;
  return data;
}
