import { InvoiceType } from "@/types/types";

type InvoiceSuccessResponse = {
  success: true;
  data: InvoiceType;
  productsCount: number;
  productsWithWarrantyCount: number;
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
      Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJ1c2VySWQiOiIxIiwiaWF0IjoxNzQ4MDEwOTYwLCJleHAiOjE3NDgwMjUzNjB9.dr42aqHgOB8CGJ-UWmHB13sLs1-gcx-bNR7Je0e0K3s`,
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });

  const data = (await res.json()) as InvoiceResponse;
  return data;
}
