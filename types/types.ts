export type Invoice = {
  iid: string;
  invoice_number: string;
  invoice_date: string;
  invoice_amount: number;
  seller: {
    businessName: string;
    address: string;
    city: string;
    pib: string;
  };
};
