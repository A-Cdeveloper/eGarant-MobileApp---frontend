import { useQuery } from "@tanstack/react-query";
import { ProfileResponse, getProfile } from "../api/getProfile";

export const useProfile = () => {
  const { isPending, data } = useQuery<ProfileResponse>({
    queryKey: ["profile"],
    queryFn: getProfile,
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
};
