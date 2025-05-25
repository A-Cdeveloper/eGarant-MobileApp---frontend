type SetSuccessResponse = {
  success: true;
  message: string;
};

type SetErrorResponse = {
  success: false;
  error: {
    message: string;
  };
};

export type SetResponse = SetSuccessResponse | SetErrorResponse;

export const setGuarantee = async (
  iid: string,
  pid: string,
  gperiod: number
): Promise<SetResponse> => {
  const res = await fetch(`${process.env.EXPO_PUBLIC_API}/invoices/${iid}`, {
    method: "PATCH",
    headers: {
      Authorization: `Bearer ${process.env.EXPO_PUBLIC_TOKEN}`,
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      gperiod,
      pid,
    }),
  });
  const data = (await res.json()) as SetResponse;

  return data;
};
