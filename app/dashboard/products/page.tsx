// import Pagination from '@/app/ui/customers/pagination';
import Search from '@/app/ui/search';
import Table from '@/app/ui/products/table';
// import { CreateCustomer } from '@/app/ui/customers/buttons';
import { lusitana } from '@/app/ui/fonts';
import { CustomersTableSkeleton } from '@/app/ui/skeletons';
import { Suspense } from 'react';
import { products } from '@/app/lib/placeholder-data';
// import { fetchInvoicesPages } from '@/app/lib/data';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Products',
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

//   const totalPages = await fetchInvoicesPages(query);

  return (
    <div className="w-full">
      <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
        {/* <CreateCustomer /> */}
      </div>
      <Suspense key={query + currentPage} fallback={<CustomersTableSkeleton />}>
        <Table products={products} query={query} currentPage={currentPage} />
      </Suspense>
      <div className="mt-5 flex w-full justify-center">
      {/* <Pagination totalPages={currentPage} /> */}
      </div>
    </div>
  );
}