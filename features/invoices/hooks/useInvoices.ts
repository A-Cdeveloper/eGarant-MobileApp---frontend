import { useQuery } from "@tanstack/react-query";
import { InvoicesResponse, getInvoices } from "../api/getInvoices";

export function useInvoices() {
  const { isPending, data } = useQuery<InvoicesResponse>({
    queryKey: ["invoices"],
    queryFn: () => getInvoices(),
  });

  if (isPending) {
    return { isPending, data: null, error: null };
  }

  if (data?.success) {
    return { isPending, data: data.data, error: null };
  }

  return {
    isPending,
    data: null,
    error: data?.error?.message ?? "Došlo je do greske",
  };
}
