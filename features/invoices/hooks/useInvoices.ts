import { useQuery } from "@tanstack/react-query";
import { InvoicesResponse, getInvoices } from "../api/getInvoices";
import { Invoice } from "@/types/types";

type InvoicesResult = {
  isPending: boolean;
  invoices: Invoice[] | null;
  error: string | null;
};

export function useInvoices(): InvoicesResult {
  const { isPending, data } = useQuery<InvoicesResponse>({
    queryKey: ["invoices"],
    queryFn: () => getInvoices(),
  });

  if (isPending) {
    return { isPending, invoices: null, error: null };
  }

  if (data?.success) {
    return { isPending, invoices: data.data.invoices, error: null };
  }

  return {
    isPending,
    invoices: null,
    error: data?.error?.message ?? "Došlo je do greske",
  };
}
