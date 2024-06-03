import Image from 'next/image';
import { lusitana } from '@/app/ui/fonts';
import Search from '@/app/ui/search';
import {
  ProductsTableType,
  FormattedProductsTable,
} from '@/app/lib/definitions';
import { fetchFilteredTransactions } from '@/app/lib/data';
import { products } from '@/app/lib/placeholder-data';


export default async function ProductsTable({
  query,
  currentPage
}: {
  products: FormattedProductsTable[];
  query:string;
  currentPage:number;
}) {
  const products = await fetchFilteredTransactions(query, currentPage)
  return (
    <div className="w-full">
      <h1 className={`${lusitana.className} mb-8 text-xl md:text-2xl`}>
      </h1>
      <Search placeholder="Search customers..." />
      <div className="mt-6 flow-root">
        <div className="overflow-x-auto">
          <div className="inline-block min-w-full align-middle">
            <div className="overflow-hidden rounded-md bg-gray-100 p-2 md:pt-2">
              <div className="md:hidden">
                {products?.map((product) => (
                  <div
                    key={product.name}
                    className="mb-2 w-full rounded-md bg-white p-4">
                    <div className="flex items-center justify-between border-b pb-4">
                      <div>
                        <div className="mb-2 flex items-center">
                            <p>{product.name}</p>
                        </div>
                        <p className="text-sm text-gray-500">
                          {product.price}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
          <table className="hidden min-w-full text-gray-900 md:table">
            <thead className="rounded-lg text-left text-sm font-normal">
              <tr>
                <th scope="col" className="px-5 py-4 font-medium sm:pl-6">
                  Product Name
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Harga
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Bahan
                </th>
              </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 text-gray-900">
                  {products.map((product) => (
                    <tr key={product.name} className="group">
                      <td className="whitespace-nowrap bg-white text-sm text-black sm:pl-6">
                          <p>{product.name}</p>
                      </td>
                      <td className="whitespace-nowrap bg-white px-5 py-5 text-sm">
                        {product.price}
                      </td>
                      <td className="whitespace-nowrap bg-white px-5 py-5 text-sm">
                        {product.bahan}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}