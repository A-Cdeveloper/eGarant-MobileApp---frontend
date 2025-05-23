import { InvoiceType } from "@/types/types";

type InvoicesSuccessResponse = {
  success: true;
  data: {
    invoices: Omit<InvoiceType, "products">[];
    total: number;
  };
};

type InvoicesErrorResponse = {
  success: false;
  error: {
    message: string;
  };
};

export type InvoicesResponse = InvoicesSuccessResponse | InvoicesErrorResponse;

export async function getInvoices(): Promise<InvoicesResponse> {
  const res = await fetch(`${process.env.EXPO_PUBLIC_API}/invoices`, {
    headers: {
      Authorization: `Bearer ${process.env.EXPO_TOKEN}`,
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });

  const data = (await res.json()) as InvoicesResponse;
  return data;
}
