export type SellerType = {
  sid: string;
  businessName: string;
  address: string;
  city: string;
  pib: string;
};

export type ProductType = {
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
  productsWithWarrantyCount: number;
};

export type InvoiceTypeWithProducts = InvoiceType & {
  productsCount: number;
  jurnal: string;
  products: ProductType[];
};

export type GuaranteeType = ProductType & {
  invoice: Omit<InvoiceType, "invoice_amount" | "productsWithWarrantyCount"> & {
    seller: Omit<SellerType, "pib">;
  };
};

export type UserType = {
  email: string;
  fullName: string;
  phone: string;
  updatedAt: string;
};
