
import { Card } from '@/app/ui/dashboard/cards';
import CardWrapper from '@/app/ui/dashboard/cards';
import RevenueChart from '@/app/ui/dashboard/revenue-chart';
<<<<<<< HEAD
<<<<<<< HEAD
import { lusitana, freehand } from '@/app/ui/fonts';
import { fetchCardData, fetchLatestCustomers } from '@/app/lib/data'; // Remove fetchLatestInvoices
import { Suspense } from 'react';
import CardWrapper from '@/app/ui/dashboard/cards';
import {
  RevenueChartSkeleton,
  LatestInvoicesSkeleton,
  CardsSkeleton,
} from '@/app/ui/skeletons';
import Image from 'next/image';
import LatestCustomers from '@/app/ui/dashboard/latest-invoices';

export default async function Page() {
  // const fetchLatestcustomers = await fetchLatestCustomers();
  const {
    numberOfTransactions,
    numberOfCustomers,
  } = await fetchCardData();

  return (
    <main className="relative min-h-screen">
      <div className="absolute inset-0 z-0">
        <Image
          src="/bg-dashboard.jpg"
          layout="fill"
          objectFit="cover"
          className="block"
          alt="Screenshots of the barbershop background"
        />
      </div>
      <div className="relative z-10 flex items-center jstify-center p-6 md:w-3/5 md:px-28 md:py-12">

        <h1 className={`${freehand.className} flex items-center text-gray-300 mb-1 text-5xl md:text-5xl bg-gradient pl-1 absolute top-0 left-0 mt-4 ml-4`}>
          Dashboard Homepage
        </h1>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <Suspense fallback={<CardsSkeleton />}>
            <CardWrapper />
          </Suspense>
          <Card title="Total Transactions" value={numberOfTransactions} type="transactions" />
          <Card title="Total Customers" value={numberOfCustomers} type="customers" />
        </div>
        <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8">
          <Suspense fallback={<RevenueChartSkeleton />}>
            <RevenueChart />
          </Suspense>
          {/* <LatestCustomers latestCustomers={fetchLatestcustomers} /> */}
          <div />
        </div>
      </div>
    </main>
  )
};
=======
import LatestInvoices from '@/app/ui/dashboard/latest-invoices';
=======
import latestTransactions from '@/app/ui/dashboard/latest-invoices';
>>>>>>> e325b42 (dashboard benar dikit)
// import LatestReservations from '@/app/ui/dashboard/latest-reservations';
import { lusitana } from '@/app/ui/fonts';
import { fetchCardData} from '@/app/lib/data';
import { Suspense } from 'react';
import { RevenueChartSkeleton, LatestInvoicesSkeleton ,CardsSkeleton} from '@/app/ui/skeletons';
import { Metadata } from 'next';
import { fetchRevenue, fetchLatestInvoices } from '@/app/lib/data';
import { LatestTransaction} from '@/app/lib/definitions'

export const metadata: Metadata = {
    title: 'Akiong Store Dashboard'
};




export default async function Page() {
  const revenue = await fetchRevenue();
  const latestTransactions = await fetchLatestInvoices();
  const {
    numberOfTransactions,
    numberOfCustomers
  } = await fetchCardData();
  return (
    <main>
      
      <h1 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
        Dashboard
      </h1>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
               <Suspense fallback={<CardsSkeleton />}>
          <CardWrapper />
        </Suspense>
        <Card title="Total Transactions" value={numberOfTransactions} type="transactions" />
        <Card title="Total Customers" value={numberOfCustomers} type="customers" />
        {/* <Card title="Total Invoices" value={total_paid} type="transactions" />
        <Card
          title="Total Customers"
          value={numberOfCustomers}
          type="customers"
        /> */}
      </div>
      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8">
      <Suspense fallback={<RevenueChartSkeleton />}>
          <RevenueChart />
        </Suspense>
        {/* <Suspense fallback={<LatestInvoicesSkeleton />}>
        <latestTransactions/>
        </Suspense> */}
              
       
         {/* <Suspense fallback={<LatestReservationsSkeleton/>}>
          <LatestReservations />
    </Suspense>  */}
   </div>
 
 </main>
);
}
>>>>>>> 928a016 (asdasdasd)
