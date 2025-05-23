import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteInvoice } from "../api/deleteInvoice";

export const useDeleteInvoice = (iid: string) => {
  const queryClient = useQueryClient();

  const {
    mutateAsync, // ✅ use mutateAsync instead of mutate
    isPending,
    data,
    error,
  } = useMutation({
    mutationFn: async () => await deleteInvoice(iid),
    onSuccess: () => {
      // Invalidate the invoices list so it's updated after deletion
      queryClient.invalidateQueries({ queryKey: ["invoices"] });
    },
  });

  return { mutateAsync, isPending, data, error };
};
