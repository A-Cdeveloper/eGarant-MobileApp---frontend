type DeleteSuccessResponse = {
  success: true;
  message: string;
};

type DeleteErrorResponse = {
  success: false;
  error: {
    message: string;
  };
};

export type DeleteResponse = DeleteSuccessResponse | DeleteErrorResponse;

export const deleteInvoice = async (iid: string): Promise<DeleteResponse> => {
  const res = await fetch(`${process.env.EXPO_PUBLIC_API}/invoices/${iid}`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${process.env.EXPO_PUBLIC_TOKEN}`,
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });
  const data = (await res.json()) as DeleteResponse;
  return data;
};
