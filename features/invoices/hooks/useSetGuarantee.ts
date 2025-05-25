import { useMutation, useQueryClient } from "@tanstack/react-query";
import { setGuarantee } from "../api/setGuarantee";

export const useSetGuarantee = (iid: string, pid: string) => {
  const queryClient = useQueryClient();

  const {
    mutateAsync, // ✅ use mutateAsync instead of mutate
    isPending,
    data,
    error,
  } = useMutation({
    mutationFn: async (gperiod: number) =>
      await setGuarantee(iid, pid, gperiod),
    onSuccess: () => {
      // Invalidate the invoices list so it's updated after deletion
      queryClient.invalidateQueries({ queryKey: ["invoices", iid] });
    },
  });

  return { mutateAsync, isPending, data, error };
};
