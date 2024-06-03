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
  
    name: 'Felix 40',
    phone_number: '08404040',
    tanggal_lahir: '2004-10-22' ,
    image_url: '/customers/balazs-orban.png',
  },
  {
  
    name: 'Michael Novotny',
    phone_number: '0834040',
    tanggal_lahir: '2004-11-12' ,
    image_url: '/customers/balazs-orban.png',
  },
  {
 
    name: 'Evil Rabbit',
    phone_number: '0843200',
    tanggal_lahir: '2004-03-02' ,
    image_url: '/customers/balazs-orban.png',
  },
  {

    name: 'Emil Kowalski',
    phone_number: '08404040',
    tanggal_lahir: '2007-04-22' ,
    image_url: '/customers/balazs-orban.png',
  },
];

const products = [
  {
    
    product_name: 'Oversized Shirt A',
    price: 15,
    bahan: 'cotton' ,
  },
  {
    product_name: 'Oversized Shirt B',
    price: 15 ,
    bahan: 'cotton' ,
  },
  {
    product_name: 'Oversized Hoddie A',
    price: 21 ,
    bahan: 'cotton' ,
  },
  {
    product_name: 'Work Shirt A',
    price: 7 ,
    bahan: 'Polyester' ,
  },
];

const transactions= [
  {
    customer_id: 'f6cbbdf2-2cb0-41d1-adeb-e35437644ba1',
    product_id: '78bbe7a5-124a-4551-8a0f-5170cab3e456',
    phone_number: '08123',
    total_paid: 21,  
    date: '2024-05-20',
  },
  {
    customer_id: '93123a6e-2d9a-4b82-93f5-8a8ad9d05a19',
    product_id: '78bbe7a5-124a-4551-8a0f-5170cab3e456',
    phone_number: '08123',
    total_paid: 15,
    date: '2024-05-20',
  },
  {
    customer_id: '5346547a-38a2-46fd-9c0d-d8e0a80eb376',
    product_id: '42c4addc-dafe-4bdc-96c3-13cbf70db9ff',
        phone_number: '08123',
    total_paid: 21,
    date: '2024-05-20',
  },
  {
    customer_id:' 7979c7e9-c535-4ddc-98b0-ea4a0abcb882',
    product_id: '7486e288-efd9-436e-8642-8dd49ef17671',
    phone_number: '08123',
    total_paid: 21,
    date: '2024-05-20',
  },
];


module.exports = {
  users,
  customers,
  transactions,
  products,
};
