// import Pagination from '@/app/ui/customers/pagination';
import Search from '@/app/ui/search';
import Table from '@/app/ui/customers/table';
// import { CreateCustomer } from '@/app/ui/customers/buttons';
import { lusitana } from '@/app/ui/fonts';
import { CustomersTableSkeleton } from '@/app/ui/skeletons';
import { Suspense } from 'react';
import { customers } from '@/app/lib/placeholder-data';
import { fetchCustomers } from '@/app/lib/data';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Customers',
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


  return (
    <div className="w-full">
      <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
        {/* <CreateCustomer /> */}
      </div>
      <Suspense key={query + currentPage } fallback={<CustomersTableSkeleton />}>
        <Table customers={customers} query={query} currentPage={currentPage} />
      </Suspense>
      <div className="mt-5 flex w-full justify-center">
      {/* <Pagination totalPages={currentPage} /> */}
      </div>
    </div>
  );
}