import Pagination from '@/app/ui/invoices/pagination';
import Search from '@/app/ui/search';
import Table from '@/app/ui/transactions/table';
// import { CreateInvoices } from '@/app/ui/invoices/buttons';
import { lusitana } from '@/app/ui/fonts';
import { InvoicesTableSkeleton, TransactionsTableSkeleton } from '@/app/ui/skeletons';
import { Suspense } from 'react';
import { fetchTransactionsPages } from '@/app/lib/data';
import { Metadata } from 'next';
import { transactions } from '@/app/lib/placeholder-data';
import Image from 'next/image';
export const metadata: Metadata = {
  title: 'Transactions',
};


export default async function Page({
  searchParams,
}: {
  searchParams?: {
    query?: string;
    page?: string;
  };
}) {
  const query = searchParams?.query || '';
  const currentPage = Number(searchParams?.page) || 1;
  // const totalPages = await fetchTransactionsPages(query);
  return (
    <div className="relative w-full min-h-screen">
    <div className="absolute inset-0 z-0">
      <Image
        src="/bg-dashboard.jpg"
        layout="fill"
        objectFit="cover"
        className="block"
        alt="Screenshots of the barbershop background"
      />
      <div className='relative z-10 opacity-80 p-6 md:p-12'>
      <div className="flex w-full items-center justify-between">
        <h1 className={`${lusitana.className} text-2xl`}>Transactions</h1>
      </div>
      <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
        <Search placeholder="Search transactions..." />
        {/* <CreateInvoices /> */}
      </div>
       <Suspense key={query + currentPage} fallback={<TransactionsTableSkeleton />}>
        <Table transactions={transactions}  query={query} currentPage={currentPage} />
      </Suspense>
      <div className="mt-5 flex w-full justify-center">
        {/* <Pagination totalPages={totalPages} /> */}
      </div>
    </div>
     </div>
    </div>
  );
}
