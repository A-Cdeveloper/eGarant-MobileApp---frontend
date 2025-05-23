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
      Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJ1c2VySWQiOiIxIiwiaWF0IjoxNzQ4MDM0NDUzLCJleHAiOjE3NDgwNDg4NTN9.HzfXTm9H92FNsrVps5Yd2Jl8GAAz0MAYFhRKmxLM_JY`,
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });
  const data = (await res.json()) as DeleteResponse;
  return data;
};
