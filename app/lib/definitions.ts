// This file contains type definitions for your data.
// It describes the shape of the data, and what data type each property should accept.
// For simplicity of teaching, we're manually defining these types.
// However, these types are generated automatically if you're using an ORM such as Prisma.
export type User = {
  id: string;
  name: string;
  email: string;
  password: string;
};

export type Customer = {
  id: string;
  name: string;
  email: string;
  image_url: string;
};
export type Product = {
  id: string;
  name: string;
  price:number;
  bahan:string;
};

export type transactions = {
  id: string;
  customer_id: string;
  products_id: string;
  phone_number: string;
  total_paid: number;
  date: string;
};

export type Invoice = {
  id:string;
  customer_id: string;
  amount: number;
  date: string;
  // In TypeScript, this is called a string union type.
  // It means that the "status" property can only be one of the two strings: 'pending' or 'paid'.
  status: 'pending' | 'paid';
};

export type Revenue = {
  month: string;
  revenue: number;
};

export type LatestTransaction= {
  id: string;
  name: string;
  image_url: string;
  email: string;
<<<<<<< HEAD
  amount: string;
};

export type LatestCustomer = {
  id: string;
  name: string;
  image_url: string;
  email: string;
  amount: string;
};

// The database returns a number for amount, but we later format it to a string with the formatCurrency function
export type LatestInvoiceRaw = Omit<LatestInvoice, 'amount'> & {
  amount: number;
=======
  total_paid: string;
>>>>>>> 928a016 (asdasdasd)
};

export type InvoicesTable = {
  id: string;
  customer_id: string;
  name: string;
  email: string;
  image_url: string;
  date: string;
  amount: number;
  status: 'pending' | 'paid';
};
export type TransactionsTable = {
  name: string;
  id: string;
  customer_id: string;
  products_id: string;
  total_paid: number;
  date: string;
  price: number;
};


export type TransactionsTableType = {
  id: string;
  name: string;
  
  date: string;
  phone_number: string;
  tanggal_lahir: Date;
  image_url: string;
  total_paid: number;
};

export type CustomersTableType = {
  id: string;
  name: string;
  price: number;
  phone_number: string;
  tanggal_lahir: Date;
  image_url: string;
  total_invoices: number;
  total_pending: number;
  total_paid: number;
};

export type ProductsTableType = {
  id: string;
  name: string;
  price: number;
  bahan: string;

};

export type FormattedCustomersTable = {
  id: string;
  name: string;
  
  image_url: string;
  tanggal_lahir: string;
  phone_number: string;
  total_invoices: number;
  total_pending: string;
  total_paid: string;
};
export type FormattedTransactionsTable = {
  id: string;
  customer_id: string;
  product_id: string;
  total_paid: string;
  date: string;
};
export type FormattedProductsTable = {
  id: string;
  name: string;
  price: number;
  bahan: string;
};

export type CustomerField = {
  id: string;
  name: string;
};

export type ProductField = {
  id: string;
  name: string;
};


export type InvoiceForm = {
  id: string;
  customer_id: string;
  amount: number;
  status: 'pending' | 'paid';
};
