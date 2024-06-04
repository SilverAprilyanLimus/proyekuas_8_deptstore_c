// This file contains placeholder data that you'll be replacing with real data in the Data Fetching chapter:
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
    id: 'f6cbbdf2-2cb0-41d1-adeb-e35437644ba1',
    name: 'Felix 40',
    phone_number: '08404040',
    tanggal_lahir: '2004-10-22' ,
    image_url: '/customers/balazs-orban.png',
  },
  {
    id: '93123a6e-2d9a-4b82-93f5-8a8ad9d05a19',
    name: 'Michael Novotny',
    phone_number: '0834040',
    tanggal_lahir: '2004-11-12' ,
    image_url: '/customers/balazs-orban.png',
  },
  {
    id: '5346547a-38a2-46fd-9c0d-d8e0a80eb376',
    name: 'Evil Rabbit',
    phone_number: '0843200',
    tanggal_lahir: '2004-03-02' ,
    image_url: '/customers/balazs-orban.png',
  },
  {
    id:'7979c7e9-c535-4ddc-98b0-ea4a0abcb882',
    name: 'Emil Kowalski',
    phone_number: '08404040',
    tanggal_lahir: '2007-04-22' ,
    image_url: '/customers/balazs-orban.png',
  },
];

const products = [
  {
    id: '78bbe7a5-124a-4551-8a0f-5170cab3e456',
    name: 'Oversized Shirt A',
    price: 15000,
    bahan: 'cotton' ,
  },
  {
    id: '78bbe7a5-124a-4551-8a0f-5170cab3e456',
    name: 'Oversized Shirt B',
    price: 15000,
    bahan: 'cotton' ,
  },
  {
    id: '42c4addc-dafe-4bdc-96c3-13cbf70db9ff',
    name: 'Oversized Hoddie A',
    price: 21000 ,
    bahan: 'cotton' ,
  },
  {
    id: '7486e288-efd9-436e-8642-8dd49ef17671',
    name: 'Work Shirt A',
    price: 70000,
    bahan: 'Polyester' ,
  },
];

const transactions= [
  {
    customer_id: customers[0].id,
    product_id: products[0].id,
    phone_number: '08123',
    total_paid: 210000,  
    date: '2024-05-20',
  },
  {
    customer_id: customers[1].id,
    product_id: products[1].id,
    phone_number: '08123',
    total_paid: 120000,
    date: '2024-05-20',
  },
  {
    customer_id: customers[2].id,
    product_id: products[2].id,
    phone_number: '08123',
    total_paid: 210000,
    date: '2024-05-20',
  },
  {
    customer_id: customers[3].id,
    product_id: products[3].id,
    phone_number: '08123',
    total_paid: 75000,
    date: '2024-05-20',
  },
];
const revenue = [
  { month: 'Jan', revenue: 210000 },
  { month: 'Feb', revenue: 180000 },
  { month: 'Mar', revenue: 220000 },
  { month: 'Apr', revenue: 250000 },
  { month: 'May', revenue: 230000 },
  { month: 'Jun', revenue: 320000 },
  { month: 'Jul', revenue: 350000 },
  { month: 'Aug', revenue: 370000 },
  { month: 'Sep', revenue: 250000 },
  { month: 'Oct', revenue: 280000 },
  { month: 'Nov', revenue: 300000 },
  { month: 'Dec', revenue: 480000 },
];

module.exports = {
  users,
  customers,
  transactions,
  products,
  revenue,
};
