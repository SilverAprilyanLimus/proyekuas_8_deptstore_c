// import Pagination from '@/app/ui/customers/pagination';
import Search from '@/app/ui/search';
import Table from '@/app/ui/products/table';
<<<<<<< HEAD
// import { CreateCustomer } from '@/app/ui/customers/buttons';
<<<<<<< HEAD
import { kanit, lusitana } from '@/app/ui/fonts';
=======
<<<<<<< HEAD
import { CreateProduct } from '@/app/ui/products/buttons';
import { lusitana } from '@/app/ui/fonts';
import { fetchProductsPages } from '@/app/lib/data';
=======
// import { CreateCustomer } from '@/app/ui/customers/buttons';
import { kanit, lusitana } from '@/app/ui/fonts';
>>>>>>> 72076a0 (blom kelar)
>>>>>>> cc14c59 (blom kelar)
import { ProductsTableSkeleton } from '@/app/ui/skeletons';
=======
import { kanit,lusitana } from '@/app/ui/fonts';
import { CustomersTableSkeleton, ProductsTableSkeleton } from '@/app/ui/skeletons';
>>>>>>> e325b42 (dashboard benar dikit)
import { Suspense } from 'react';
import { products} from '@/app/lib/placeholder-data';

import { Metadata } from 'next';
import Image from 'next/image';

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
      </div>
      <div className="relative z-10 opacity-80 p-6 md:p-12">
        <div className="flex w-full items-center justify-between">
        <h1 className={`${lusitana.className} text-2xl`}>Products</h1>
<<<<<<< HEAD
=======
      </div>
<<<<<<< HEAD
      <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
        <Search placeholder="Search products..." />
        <CreateProduct />
      </div>
      <Suspense key={query + currentPage} fallback={<ProductsTableSkeleton />}>
        <Table query={query} currentPage={currentPage} />
      </Suspense>
  
      <div className="mt-5 flex w-full justify-center">
=======
      <div className="relative z-10 opacity-80 p-6 md:p-12">
        <div className="flex w-full items-center justify-between">
<<<<<<< HEAD
>>>>>>> 3cfa1fb (product, customer done. transaction, home need fix)
=======
        <h1 className={`${lusitana.className} text-2xl`}>Products</h1>
>>>>>>> cc14c59 (blom kelar)
        </div>
        <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
          {/* <CreateCustomer /> */}
        </div>
<<<<<<< HEAD
<<<<<<< HEAD
        <Suspense key={query + currentPage} fallback={<ProductsTableSkeleton />}>
<<<<<<< HEAD
          <Table products={products} query={query} currentPage={currentPage} />
=======
          <Table products={products} currentPage={currentPage} />
>>>>>>> e325b42 (dashboard benar dikit)
        </Suspense>
        {/* <div className="mt-5 flex w-full justify-center">
=======
        <Suspense key={query + currentPage} fallback={<CustomersTableSkeleton />}>
=======
        <Suspense key={query + currentPage} fallback={<ProductsTableSkeleton />}>
>>>>>>> cc14c59 (blom kelar)
          <Table products={products} query={query} currentPage={currentPage} />
        </Suspense>
        {/* <div className="mt-5 flex w-full justify-center">
>>>>>>> 7834da5 (product, customer done. transaction, home need fix)
>>>>>>> 3cfa1fb (product, customer done. transaction, home need fix)
        <Pagination totalPages={totalPages} />
      </div> */}
      </div>
    </div>
  );
}