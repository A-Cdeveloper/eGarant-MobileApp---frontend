type SellerType = {
  businessName: string;
  address: string;
  city: string;
  pib: string;
};

type Product = {
  pid: string;
  name: string;
  quantity: number;
  gperiod: number | null;
  price: number;
};

export type InvoiceType = {
  iid: string;
  invoice_number: string;
  invoice_date: string;
  invoice_amount: number;
  seller: SellerType;
  products: Product[];
};
