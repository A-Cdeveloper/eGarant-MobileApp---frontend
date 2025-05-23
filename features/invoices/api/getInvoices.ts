import { Invoice } from "@/types/types";

type InvoicesSuccessResponse = {
  success: true;
  data: {
    invoices: Invoice[];
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
      Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJ1c2VySWQiOiIxIiwiaWF0IjoxNzQ4MDEwOTYwLCJleHAiOjE3NDgwMjUzNjB9.dr42aqHgOB8CGJ-UWmHB13sLs1-gcx-bNR7Je0e0K3s`,
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });

  const data = (await res.json()) as InvoicesResponse;
  return data;
}
