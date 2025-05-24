import { UserType } from "@/types/types";

type ProfileSuccessResponse = {
  success: true;
  data: {
    user: UserType;
    invoiceCount: number;
    productsGaranteeCount: number;
  };
};

type ProfileErrorResponse = {
  success: false;
  error: {
    message: string;
  };
};

export type ProfileResponse = ProfileSuccessResponse | ProfileErrorResponse;

export const getProfile = async () => {
  const response = await fetch(`${process.env.EXPO_PUBLIC_API}/profile`, {
    headers: {
      Authorization: `Bearer ${process.env.EXPO_PUBLIC_TOKEN}`,
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });
  const data = (await response.json()) as ProfileResponse;

  return data;
};
