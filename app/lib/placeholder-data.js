// This file contains placeholder data that you'll be replacing with real data in the Data Fetching chapter:

const { date } = require("zod");

// https://nextjs.org/learn/dashboard-app/fetching-data
const users = [
  {
    id: '410544b2-4001-4271-9855-fec4b6a6442a',
    name: 'User',
    email: 'user@nextmail.com',
    password: '123456',
  },
];

const customers = [
  {
    id: '3958dc9e-712f-4377-85e9-fec4b6a6442a',
    name: 'Rendi Fauman',
    phone_number: '08123',
    tanggal_lahir: '2004-03-05' ,
  },
  {
    id: '3958dc9e-742f-4377-85e9-fec4b6a6442a',
    name: 'Aurelia Kurnia',
    phone_number: '08133',
    tanggal_lahir: '2004-07-18' ,
  },
  {
    id: '3958dc9e-737f-4377-85e9-fec4b6a6442a',
    name: 'Felix 40',
    phone_number: '08404040',
    tanggal_lahir: '2004-10-22' ,
  },
  {
    id: '50ca3e18-62cd-11ee-8c99-0242ac120002',
    name: 'Rendi Fauman',
    phone_number: '08404040',
    tanggal_lahir: '2004-10-22' ,
  },
  {
    id: '3958dc9e-787f-4377-85e9-fec4b6a6442a',
    name: 'Steph Dietz',
    phone_number: '08404040',
    tanggal_lahir: '2004-10-22' ,
  },
  {
    id: '76d65c26-f784-44a2-ac19-586678f7c2f2',
    name: 'Michael Novotny',
    phone_number: '0834040',
    tanggal_lahir: '2004-11-12' ,
  },
  {
    id: 'd6e15727-9fe1-4961-8c5b-ea44a9bd81aa',
    name: 'Evil Rabbit',
    phone_number: '0843200',
    tanggal_lahir: '2004-03-02' ,
  },
  {
    id: '126eed9c-c90c-4ef6-a4a8-fcf7408d3c66',
    name: 'Emil Kowalski',
    phone_number: '08404040',
    tanggal_lahir: '2007-04-22' ,
  },
  {
    id: 'CC27C14A-0ACF-4F4A-A6C9-D45682C144B9',
    name: 'Amy Burns',
    phone_number: '084090',
    tanggal_lahir: '2002-07-02' ,
  },
  {
    id: '13D07535-C59E-4157-A011-F8D2EF4E0CBB',
    name: 'Balazs Orban',
    phone_number: '0812040',
    tanggal_lahir: '2001-11-30' ,
  },
];

const products = [
  {
    id: '3958dc9e-712f-4377-85e9-fec4b6a6442a',
    product_name: 'Oversized Shirt A',
    price: 15,
    bahan: 'cotton' ,
  },
  {
    id: '3958dc9e-712f-4377-85e9-fec4b6a6442a',
    product_name: 'Oversized Shirt B',
    price: 15 ,
    bahan: 'cotton' ,
  },
  {
    id: '3958dc9e-712f-4377-85e9-fec4b6a6442a',
    product_name: 'Oversized Hoddie A',
    price: 21 ,
    bahan: 'cotton' ,
  },
  {
    id: '3958dc9e-712f-4377-85e9-fec4b6a6442a',
    product_name: 'Work Shirt A',
    price: 7 ,
    bahan: 'Polyester' ,
  },
  {
    id: '3958dc9e-712f-4377-85e9-fec4b6a6442a',
    product_name: 'Jeans Pant A',
    price: 12 ,
    bahan: 'Denim' ,
  },
  {
    id: '3958dc9e-712f-4377-85e9-fec4b6a6442a',
    product_name: 'Denim Jacket',
    price: 26,
    bahan: 'Demin' ,
  },
  {
    id: '3958dc9e-712f-4377-85e9-fec4b6a6442a',
    product_name: 'Casual Pants A',
    price: 9 ,
    bahan: 'silk' ,
  },
  {
    id: '3958dc9e-712f-4377-85e9-fec4b6a6442a',
    product_name: 'Short Pants A',
    price: 7 ,
    bahan: 'Silk' ,
  },
  {
    id: '3958dc9e-712f-4377-85e9-fec4b6a6442a',
    product_name: 'Short Pants B',
    price: 5 ,
    bahan: 'Denim' ,
  },
  {
    id: '3958dc9e-712f-4377-85e9-fec4b6a6442a',
    product_name: 'Warm Cloth A',
    price: 13 ,
    bahan: 'Wool' ,
  },
];

const transactions= [
  {
    customer_id: customers[0].id,
    phone_number: '08123',
    total_paid: 45,  
    date: '2024-05-20',
  },
  {
    customer_id: customers[1].id,
    phone_number: '08123',
    total_paid: 12,
    date: '2024-05-20',
  },
  {
    customer_id: customers[4].id,
    phone_number: '08123',
    total_paid: 56,
    date: '2024-05-20',
  },
  {
    customer_id: customers[3].id,
    phone_number: '08123',
    total_paid: 32,
    date: '2024-05-20',
  },
  {
    customer_id: customers[5].id,
    phone_number: '08123',
    total_paid: 78,
    date: '2024-05-20',
  },
  {
    customer_id: customers[7].id,
    phone_number: '08123',
    total_paid: 11,
    date: '2024-05-20',
  },
  {
    customer_id: customers[6].id,
    phone_number: '08123',
    total_paid: 26,
    date: '2024-05-20',
  },
  {
    customer_id: customers[3].id,
    phone_number: '08123',
    total_paid: 16,
    date: '2024-05-20',
  },
  {
    customer_id: customers[4].id,
    phone_number: '08123',
    total_paid: 34,
    date: '2024-05-20',
  },
  {
    customer_id: customers[5].id,
    phone_number: '08123',
    total_paid: 28,
    date: '2024-05-20',
  },
  {
    customer_id: customers[1].id,
    phone_number: '08123',
    total_paid: 90,
    date: '2024-05-20',
  },
  {
    customer_id: customers[5].id,
    phone_number: '08123',
    total_paid: 113,
    date: '2024-05-20',
  },
  {
    customer_id: customers[2].id,
    phone_number: '08123',
    total_paid: 13,
    date: '2024-05-20',
  },
  {
    customer_id: customers[0].id,
    phone_number: '08123',
    total_paid: 9,
    date: '2024-05-20',
  },
  {
    customer_id: customers[2].id,
    phone_number: '08123',
    total_paid: 19,
    date: '2024-05-20',
  },
];


const revenue = [
  { month: 'Jan', revenue: 2000 },
  { month: 'Feb', revenue: 1800 },
  { month: 'Mar', revenue: 2200 },
  { month: 'Apr', revenue: 2500 },
  { month: 'May', revenue: 2300 },
  { month: 'Jun', revenue: 3200 },
  { month: 'Jul', revenue: 3500 },
  { month: 'Aug', revenue: 3700 },
  { month: 'Sep', revenue: 2500 },
  { month: 'Oct', revenue: 2800 },
  { month: 'Nov', revenue: 3000 },
  { month: 'Dec', revenue: 4800 },
];

module.exports = {
  users,
  customers,
  transactions,
  products,
};
