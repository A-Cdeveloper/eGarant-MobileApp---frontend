type SellerType = {
  businessName: string;
  address: string;
  city: string;
  pib: string;
};

export type Product = {
  pid: string;
  name: string;
  quantity: number;
  gperiod: number | null;
  price: number;
  jurnal: string;
};

export type InvoiceType = {
  iid: string;
  invoice_number: string;
  invoice_date: string;
  invoice_amount: number;
  jurnal: string;
  seller: SellerType;
  products: Product[];
  _count: number;
};
