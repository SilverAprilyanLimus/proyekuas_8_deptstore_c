import { sql } from '@vercel/postgres';
import {
  CustomerField,
  CustomersTableType,
  ProductField,
  InvoiceForm,
  TransactionsTable,
  User,
  Revenue,
<<<<<<< HEAD
  ProductsTableType,
  LatestCustomer,
  
=======
<<<<<<< HEAD
  CustomerForm,
  ProductForm,
  ProductsTable,
>>>>>>> cc14c59 (blom kelar)
} from './definitions';
import { formatCurrency } from './utils';
import { unstable_noStore as noStore } from 'next/cache';
<<<<<<< HEAD
import { customers } from './placeholder-data';
=======
<<<<<<< HEAD

const ITEMS_PER_PAGE = 6;

>>>>>>> 3cfa1fb (product, customer done. transaction, home need fix)
export async function fetchRevenue() {
  noStore();
  // Add noStore() here to prevent the response from being cached.
  // This is equivalent to in fetch(..., {cache: 'no-store'}).
  console.log('Fetching revenue data...');
    await new Promise((resolve) => setTimeout(resolve, 3000));
<<<<<<< HEAD
  try {
=======
=======
=======
  ProductsTableType,
  LatestCustomer,
  
} from './definitions';
import { formatCurrency } from './utils';
import { unstable_noStore as noStore } from 'next/cache';
import { customers } from './placeholder-data';
>>>>>>> 72076a0 (blom kelar)
export async function fetchRevenue() {
  noStore();
  // Add noStore() here to prevent the response from being cached.
  // This is equivalent to in fetch(..., {cache: 'no-store'}).
  console.log('Fetching revenue data...');
    await new Promise((resolve) => setTimeout(resolve, 3000));
  try {
>>>>>>> 7834da5 (product, customer done. transaction, home need fix)
>>>>>>> 3cfa1fb (product, customer done. transaction, home need fix)

    const data = await sql<Revenue>`SELECT * FROM revenue`;

    console.log('Data fetch completed after 3 seconds.');
<<<<<<< HEAD

=======
<<<<<<< HEAD
=======

>>>>>>> 7834da5 (product, customer done. transaction, home need fix)
>>>>>>> 3cfa1fb (product, customer done. transaction, home need fix)
    return data.rows;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch revenue data.');
  }
}
export async function fetchLatestCustomers() {
  noStore();
  try {
<<<<<<< HEAD
    const data = await sql<LatestCustomer>`
      SELECT customers.name, customers.image_url, customers.phone_number,
      FROM customers
=======
<<<<<<< HEAD
    const data = await sql<LatestInvoiceRaw>`
      SELECT invoices.amount, customers.name, customers.image_url, customers.email, invoices.id
      FROM invoices
      JOIN customers ON invoices.customer_id = customers.id
      ORDER BY invoices.date DESC
>>>>>>> cc14c59 (blom kelar)
      LIMIT 5`;

    const lastestCustomers = data.rows
    ;
    return lastestCustomers;
  } catch (error) {
    console.error('Database Error:', error);
<<<<<<< HEAD
    throw new Error('Failed to fetch the latest customers.');
=======
    throw new Error('Failed to fetch the latest invoices.');
=======
    const data = await sql<LatestCustomer>`
      SELECT customers.name, customers.image_url, customers.phone_number,
      FROM customers
      LIMIT 5`;

    const lastestCustomers = data.rows
    ;
    return lastestCustomers;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch the latest customers.');
>>>>>>> 72076a0 (blom kelar)
>>>>>>> cc14c59 (blom kelar)
  }
}

export async function fetchCardData() {
  noStore();
  try {
<<<<<<< HEAD
=======
<<<<<<< HEAD
    const invoiceCountPromise = sql`SELECT COUNT(*) FROM invoices`;
=======
>>>>>>> cc14c59 (blom kelar)
    // You can probably combine these into a single SQL query
    // However, we are intentionally splitting them to demonstrate
    // how to initialize multiple queries in parallel with JS.
    const transactionCountPromise = sql`SELECT COUNT(*) FROM transactions`;
<<<<<<< HEAD
    const customerCountPromise = sql`SELECT COUNT(*) FROM customers`;
<<<<<<< HEAD
=======

>>>>>>> e325b42 (dashboard benar dikit)
=======
>>>>>>> 72076a0 (blom kelar)
    const customerCountPromise = sql`SELECT COUNT(*) FROM customers`;
>>>>>>> cc14c59 (blom kelar)

    const data = await Promise.all([
      transactionCountPromise,
      customerCountPromise,
    ]);

<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> e325b42 (dashboard benar dikit)
=======
>>>>>>> cc14c59 (blom kelar)
    const numberOfTransactions = Number(data[0].rows[0].count ?? '0');
    const numberOfCustomers = Number(data[1].rows[0].count ?? '0');
    // const totalPaidInvoices = formatCurrency(data[2].rows[0].paid ?? '0');
    // const totalPendingInvoices = formatCurrency(data[2].rows[0].pending ?? '0');
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> e325b42 (dashboard benar dikit)
=======
>>>>>>> cc14c59 (blom kelar)

    return {
      numberOfCustomers,
      numberOfTransactions,
      // totalPaidInvoices,
      // totalPendingInvoices,
    };
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch card data.');
  }
}


<<<<<<< HEAD
  try {
    const transactions = await sql<TransactionsTable>`
      SELECT
<<<<<<< HEAD
=======
<<<<<<< HEAD
        invoices.id,
        invoices.amount,
        invoices.date,
        invoices.status,
        customers.name,
        customers.email,
        customers.image_url
      FROM invoices
      JOIN customers ON invoices.customer_id = customers.id
=======
>>>>>>> 3cfa1fb (product, customer done. transaction, home need fix)
      transactions.id,
      transactions.total_paid,
      transactions.date,
      customer.name,
<<<<<<< HEAD
<<<<<<< HEAD
      FROM transactions
      JOIN customers ON transactions.customer_id = customers.id
=======
      product.name,
=======
>>>>>>> cc14c59 (blom kelar)
      FROM transactions
<<<<<<< HEAD
      JOIN customers ON transactions.customer_id = customers.id JOIN products ON transactions.product_id = products.id
>>>>>>> 7834da5 (product, customer done. transaction, home need fix)
>>>>>>> 3cfa1fb (product, customer done. transaction, home need fix)
      WHERE
        customers.name ILIKE ${`%${query}%`} OR
<<<<<<< HEAD
        transactions.total_paid::text ILIKE ${`%${query}%`} OR
        transactions.date::text ILIKE ${`%${query}%`}
      ORDER BY transactions.date DESC
=======
        customers.email ILIKE ${`%${query}%`} OR
        invoices.amount::text ILIKE ${`%${query}%`} OR
        invoices.date::text ILIKE ${`%${query}%`} OR
        invoices.status ILIKE ${`%${query}%`}
      ORDER BY invoices.date DESC
=======
      JOIN customers ON transactions.customer_id = customers.id
      WHERE
        customers.name ILIKE ${`%${query}%`} OR
        transactions.total_paid::text ILIKE ${`%${query}%`} OR
        transactions.date::text ILIKE ${`%${query}%`}
      ORDER BY transactions.date DESC
>>>>>>> 72076a0 (blom kelar)
>>>>>>> cc14c59 (blom kelar)
      LIMIT ${ITEMS_PER_PAGE} OFFSET ${offset}
    `;

    return transactions.rows;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch transactions.');
  }
}
=======
>>>>>>> e325b42 (dashboard benar dikit)
export async function fetchTransactionsPages(query: string) {
  noStore();
  try {
    const count = await sql`SELECT COUNT(*)
    FROM transactions
    JOIN customers ON transactions.customer_id = customers.id
    JOIN products ON transactions.product_id = products.id
    WHERE
      customers.name ILIKE ${`%${query}%`} OR
<<<<<<< HEAD
      products.name ILIKE ${`%${query}%`} OR
      customers.phone_number ILIKE ${`%${query}%`} OR
      transactions.date::text ILIKE ${`%${query}%`}
=======
<<<<<<< HEAD
      customers.email ILIKE ${`%${query}%`} OR
      invoices.amount::text ILIKE ${`%${query}%`} OR
      invoices.date::text ILIKE ${`%${query}%`} OR
      invoices.status ILIKE ${`%${query}%`}
=======
      products.name ILIKE ${`%${query}%`} OR
      customers.phone_number ILIKE ${`%${query}%`} OR
      transactions.date::text ILIKE ${`%${query}%`}
>>>>>>> 72076a0 (blom kelar)
>>>>>>> cc14c59 (blom kelar)
  `;

  const totalPages = Math.ceil(Number(count.rows[0].count) );
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
    await new Promise((resolve) => setTimeout(resolve, 1000));
    const data = await sql<ProductsTableType>`
    SELECT
      products.id,
      products.name,
      products.price,
      products.bahan,
    FROM products
    LEFT JOIN transactions ON products.product_id = customers.id
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