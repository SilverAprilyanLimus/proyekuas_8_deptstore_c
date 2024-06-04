import { Card } from '@/app/ui/dashboard/cards';
import RevenueChart from '@/app/ui/dashboard/revenue-chart';
import LatestInvoices from '@/app/ui/dashboard/latest-invoices';
import { lusitana, freehand } from '@/app/ui/fonts';
import { fetchCardData, fetchLatestInvoices } from '@/app/lib/data'; // Remove fetchLatestInvoices
import { Suspense } from 'react';
import CardWrapper from '@/app/ui/dashboard/cards';
import {
  RevenueChartSkeleton,
  LatestInvoicesSkeleton,
  CardsSkeleton,
} from '@/app/ui/skeletons';
import Image from 'next/image';

export default async function Page() {
  const latestInvoices = await fetchLatestInvoices();

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
  <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
    {/* <Card title="Collected" value={totalPaidInvoices} type="collected" />
    <Card title="Pending" value={totalPendingInvoices} type="pending" />
    <Card title="Total Invoices" value={numberOfInvoices} type="invoices" />
    <Card title="Total Customers" value={numberOfCustomers} type="customers" /> */}
  </div>
  <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8">
  <Suspense fallback={<RevenueChartSkeleton />}>
        <RevenueChart />
      </Suspense>
    <LatestInvoices latestInvoices={latestInvoices} />
    <div/>
  </div>
  </div>
</main>
  )};