import { useQuery } from "@tanstack/react-query";
import { InvoiceResponse, getInvoice } from "../api/getInvoice";

export function useInvoice(iid: string) {
  const { isPending, data } = useQuery<InvoiceResponse>({
    queryKey: ["invoices", iid],
    queryFn: () => getInvoice(iid as string),
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
