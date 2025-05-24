import { useQuery } from "@tanstack/react-query";
import { GuaranteesResponse, getGuarantees } from "../api/getGuarantees";

export function useGuarantees() {
  const { isPending, data } = useQuery<GuaranteesResponse>({
    queryKey: ["guarantees"],
    queryFn: getGuarantees,
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
