import { sql } from '@vercel/postgres';
import {
  CustomerField,
  CustomersTableType,
  ProductField,
  InvoiceForm,
  TransactionsTable,
  LatestInvoiceRaw,
  User,
  Revenue,
  ProductsTableType,
  
} from './definitions';
import { formatCurrency } from './utils';
import { unstable_noStore as noStore } from 'next/cache';
export async function fetchRevenue() {
  noStore();
  // Add noStore() here to prevent the response from being cached.
  // This is equivalent to in fetch(..., {cache: 'no-store'}).
  console.log('Fetching revenue data...');
    await new Promise((resolve) => setTimeout(resolve, 3000));
  try {

    const data = await sql<Revenue>`SELECT * FROM revenue`;

    console.log('Data fetch completed after 3 seconds.');

    return data.rows;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch revenue data.');
  }
}

export async function fetchLatestInvoices() {
  noStore();

  console.log('Fetching revenue data...');
  await new Promise((resolve) => setTimeout(resolve, 3000));


  // Kembalikan array kosong sebagai hasil
  return [];
}
export async function fetchCardData() {
  noStore();
  try {
    // You can probably combine these into a single SQL query
    // However, we are intentionally splitting them to demonstrate
    // how to initialize multiple queries in parallel with JS.
    const invoiceCountPromise = sql`SELECT COUNT(*) FROM invoices`;
    const customerCountPromise = sql`SELECT COUNT(*) FROM customers`;
    const invoiceStatusPromise = sql`SELECT
         SUM(CASE WHEN status = 'paid' THEN amount ELSE 0 END) AS "paid",
         SUM(CASE WHEN status = 'pending' THEN amount ELSE 0 END) AS "pending"
         FROM invoices`;

    const data = await Promise.all([
      invoiceCountPromise,
      customerCountPromise,
      invoiceStatusPromise,
    ]);

    const numberOfInvoices = Number(data[0].rows[0].count ?? '0');
    const numberOfCustomers = Number(data[1].rows[0].count ?? '0');
    const totalPaidInvoices = formatCurrency(data[2].rows[0].paid ?? '0');
    const totalPendingInvoices = formatCurrency(data[2].rows[0].pending ?? '0');

    return {
      numberOfCustomers,
      numberOfInvoices,
      totalPaidInvoices,
      totalPendingInvoices,
    };
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch card data.');
  }
}

const ITEMS_PER_PAGE = 6;
export async function fetchFilteredTransactions(
  query: string,
  currentPage: number,
) {
  const offset = (currentPage - 1) * ITEMS_PER_PAGE;

  try {
    const transactions = await sql<TransactionsTable>`
      SELECT
      transactions.id,
      transactions.total_paid,
      transactions.date,
      customer.name,
      product.name,
      FROM transactions
      JOIN customers ON transactions.customer_id = customers.id JOIN products ON transactions.product_id = products.id
      WHERE
        customers.name ILIKE ${`%${query}%`} OR
        customers.email ILIKE ${`%${query}%`} OR
        transactions.total_paid::text ILIKE ${`%${query}%`} OR
        transactions.date::text ILIKE ${`%${query}%`} OR
      ORDER BY transactions.date DESC
      LIMIT ${ITEMS_PER_PAGE} OFFSET ${offset}
    `;

    return transactions.rows;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch transactions.');
  }
}
export async function fetchTransactionsPages(query: string) {
  noStore();
  try {
    const count = await sql`SELECT COUNT(*)
    FROM transactions
    JOIN customers ON transactions.customer_id = customers.id
    JOIN products ON transactions.product_id = products.id
    WHERE
      customers.name ILIKE ${`%${query}%`} OR
      product.name ILIKE ${`%${query}%`} OR
      customers.phone_number ILIKE ${`%${query}%`} OR
      transactions.date::text ILIKE ${`%${query}%`}
  `;

  const totalPages = Math.ceil(Number(count.rows[0].count) / ITEMS_PER_PAGE);
  return totalPages;

  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch transaction.');
  }
}

export async function fetchTransactionsById(id: string) {
  noStore();
  try {
    const data = await sql<InvoiceForm>`
      SELECT
      transactions.id,
      transactions.customer_id,
      transactions.product_id,
      transactions.total_paid,
      transactions.date
      FROM transactions
      WHERE transactions.id = ${id};
    `;

    const transaction = data.rows.map((transaction) => ({
      ...transaction,
      // Convert amount from cents to dollars
      amount: transaction.amount / 100,
    }));

    return transaction[0];
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch invoice.');
  }
}

export async function fetchCustomers() {
  noStore();
  try {
    const data = await sql<CustomerField>`
      SELECT
        id,
        name
      FROM customers
      ORDER BY name ASC
    `;

    const customers = data.rows;
    return customers;
  } catch (err) {
    console.error('Database Error:', err);
    throw new Error('Failed to fetch all customers.');
  }
}
export async function fetchFilteredCustomers(query: string) {
  try {
    await new Promise((resolve) => setTimeout(resolve, 3000));
    const data = await sql<CustomersTableType>`
    SELECT
      customers.id,
      customers.name,
      customers.phone_number,
      customers.tanggal_lahir,
      customers.image_url,
    FROM customers
    LEFT JOIN transactions ON customers.id = transactions.customer_id
    WHERE
      customers.name ILIKE ${`%${query}%`} OR
        customers.email ILIKE ${`%${query}%`}
    GROUP BY customers.id, customers.name, customers.email, customers.image_url
    ORDER BY customers.name ASC
    `;


    const customers = data.rows.map((customer) => ({
      ...customer,
      total_pending: formatCurrency(customer.total_pending),
      total_paid: formatCurrency(customer.total_paid),
    }));


    return customers;
  } catch (err) {
    console.error('Database Error:', err);
    throw new Error('Failed to fetch customer table.');
  }
}


export async function getUser(email: string) {
  noStore();
  try {
    const user = await sql`SELECT * FROM users WHERE email=${email}`;
    return user.rows[0] as User;
  } catch (error) {
    console.error('Failed to fetch user:', error);
    throw new Error('Failed to fetch user.');
  }
}


export async function fetchFilteredProducts(query: string) {
  try {
    await new Promise((resolve) => setTimeout(resolve, 3000));
    const data = await sql<ProductsTableType>`
    SELECT
      products.id,
      products.name,
      products.price,
      products.bahan,
    FROM products
    LEFT JOIN transactions ON products.product_id = transactions.id
    WHERE
      products.name ILIKE ${`%${query}%`} OR
      products.bahan ILIKE ${`%${query}%`}
    GROUP BY products.id, products.name, products.price, products.bahan
    ORDER BY products.name ASC
    `;


    const products = data.rows.map((product) => ({
      ...product,
    }));


    return products;
  } catch (err) {
    console.error('Database Error:', err);
    throw new Error('Failed to fetch products table.');
  }
}


export async function fetchProducts() {
  noStore();
  try {
    const data = await sql<ProductField>`
      SELECT
        id,
        name
      FROM products
      ORDER BY name ASC
    `;

    const products = data.rows;
    return products;
  } catch (err) {
    console.error('Database Error:', err);
    throw new Error('Failed to fetch all products.');
  }
}