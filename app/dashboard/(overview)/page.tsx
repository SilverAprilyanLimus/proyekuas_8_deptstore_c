
import { Card } from '@/app/ui/dashboard/cards';
import CardWrapper from '@/app/ui/dashboard/cards';
import RevenueChart from '@/app/ui/dashboard/revenue-chart';
import LatestInvoices from '@/app/ui/dashboard/latest-invoices';
// import LatestReservations from '@/app/ui/dashboard/latest-reservations';
import { lusitana } from '@/app/ui/fonts';
import { fetchCardData} from '@/app/lib/data';
import { Suspense } from 'react';
import { RevenueChartSkeleton, LatestInvoicesSkeleton ,CardsSkeleton} from '@/app/ui/skeletons';
import { Metadata } from 'next';


export const metadata: Metadata = {
    title: 'Akiong Store Dashboard'
};




export default async function Page() {
 
  return (
    <main>
      <h1 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
        Dashboard
      </h1>
      {/* <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
               <Suspense fallback={<CardsSkeleton />}>
          <CardWrapper />
        </Suspense>
        <Card title="Collected" value={totalPaidInvoices} type="collected" />
        <Card title="Pending" value={totalPendingInvoices} type="pending" />
        <Card title="Total Invoices" value={total_paid} type="transactions" />
        <Card
          title="Total Customers"
          value={numberOfCustomers}
          type="customers"
        />
      </div> */}
      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8">
      <Suspense fallback={<RevenueChartSkeleton />}>
          <RevenueChart />
        </Suspense>
        <Suspense fallback={<LatestInvoicesSkeleton />}>
        </Suspense>
         {/* <Suspense fallback={<LatestReservationsSkeleton/>}>
          <LatestReservations />
    </Suspense>  */}
   </div>
 
 </main>
);
}
