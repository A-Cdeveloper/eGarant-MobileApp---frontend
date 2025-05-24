import { GuaranteeType } from "@/types/types";

type GuaranteesSuccessResponse = {
  success: true;
  data: {
    total: number;
    guarantees: GuaranteeType[];
  };
};

type GuaranteesErrorResponse = {
  success: false;
  error: {
    message: string;
  };
};

export type GuaranteesResponse =
  | GuaranteesSuccessResponse
  | GuaranteesErrorResponse;

export const getGuarantees = async (): Promise<GuaranteesResponse> => {
  const res = await fetch(
    `${process.env.EXPO_PUBLIC_API}/invoices/guarantees`,
    {
      headers: {
        Authorization: `Bearer ${process.env.EXPO_PUBLIC_TOKEN}`,
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    }
  );

  const data = (await res.json()) as GuaranteesResponse;
  return data;
};
