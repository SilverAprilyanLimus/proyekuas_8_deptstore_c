import Pagination from '@/app/ui/invoices/pagination';
import Search from '@/app/ui/search';
<<<<<<< HEAD:app/dashboard/invoices/page.tsx
import Table from '@/app/ui/invoices/table';
import { CreateInvoice } from '@/app/ui/invoices/buttons';
import { lusitana } from '@/app/ui/fonts';
import { InvoicesTableSkeleton } from '@/app/ui/skeletons';
import { Suspense } from 'react';
import { fetchInvoicesPages } from '@/app/lib/data';
=======
import Table from '@/app/ui/transactions/table';
// import { CreateInvoices } from '@/app/ui/invoices/buttons';
import { lusitana } from '@/app/ui/fonts';
import { InvoicesTableSkeleton } from '@/app/ui/skeletons';
import { Suspense } from 'react';
import { fetchTransactionsPages } from '@/app/lib/data';
import { Metadata } from 'next';
import { transactions } from '@/app/lib/placeholder-data';
>>>>>>> 7834da5 (product, customer done. transaction, home need fix):app/dashboard/transactions/page.tsx
 
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
<<<<<<< HEAD:app/dashboard/invoices/page.tsx

  const totalPages = await fetchInvoicesPages(query);

=======
  // const totalPages = await fetchTransactionsPages(query);
>>>>>>> 7834da5 (product, customer done. transaction, home need fix):app/dashboard/transactions/page.tsx
  return (
    <div className="w-full">
      <div className="flex w-full items-center justify-between">
        <h1 className={`${lusitana.className} text-2xl`}>Invoices</h1>
      </div>
      <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
<<<<<<< HEAD:app/dashboard/invoices/page.tsx
        <Search placeholder="Search invoices..." />
        <CreateInvoice />
=======
        <Search placeholder="Search transactions..." />
        {/* <CreateInvoices /> */}
>>>>>>> 7834da5 (product, customer done. transaction, home need fix):app/dashboard/transactions/page.tsx
      </div>
       <Suspense key={query + currentPage} fallback={<InvoicesTableSkeleton />}>
        <Table transactions={transactions}  query={query} currentPage={currentPage} />
      </Suspense>
      <div className="mt-5 flex w-full justify-center">
        <Pagination totalPages={totalPages} />
      </div>
    </div>
  );
}