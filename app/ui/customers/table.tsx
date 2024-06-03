import Image from 'next/image';
import { lusitana } from '@/app/ui/fonts';
import Search from '@/app/ui/search';
import {
  CustomersTableType,
  FormattedCustomersTable,
} from '@/app/lib/definitions';
import { formatDateToLocal } from '@/app/lib/utils';
import { fetchFilteredCustomers, fetchCustomers } from '@/app/lib/data';

export default async function CustomersTable({
  customers,
  query,
  currentPage
}: {
  customers: FormattedCustomersTable[];
  query:string;
  currentPage:number;
}) {
  // const customers = await fetchFilteredCustomers(query);
  return (
    <div className="w-full">
      <h1 className={`${lusitana.className} mb-8 text-xl md:text-2xl`}>
        Customers
      </h1>
      <Search placeholder="Search customers..." />
      <div className="mt-6 flow-root">
        <div className="overflow-x-auto">
          <div className="inline-block min-w-full align-middle">
            <div className="overflow-hidden rounded-md bg-gray-100 p-2 md:pt-2">
              <div className="md:hidden">
                {customers?.map((customer) => (
                  <div
                    key={customer.id}
                    className="mb-2 w-full rounded-md bg-white p-4">
                    <div className="flex items-center justify-between border-b pb-4">
                      <div>
                        <div className="mb-2 flex items-center">
                          <div className="flex items-center gap-3">
                            <Image
                              src={customer.image_url}
                              className="rounded-full"
                              alt={`${customer.name}'s profile picture`}
                              width={28}
                              height={28}
                            />
                            <p>{customer.name}</p>
                          </div>
                        </div>
                        <p className="text-sm text-gray-500">
                          {customer.phone_number}
                        </p>
                      </div>
                      <p className="text-sm text-gray-500">
                          {formatDateToLocal(customer.tanggal_lahir)}
                        </p>
                    </div>
                  </div>
                ))}
              </div>
          <table className="hidden min-w-full text-gray-900 md:table">
            <thead className="rounded-lg text-left text-sm font-normal">
              <tr>
                <th scope="col" className="px-5 py-4 font-medium sm:pl-6">
                  Name
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Nomor Telepon
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Tanggal Lahir
                </th>
              </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 text-gray-900">
                  {customers.map((customer) => (
                    <tr key={customer.id} className="group">
                      <td className="whitespace-nowrap bg-white text-sm text-black sm:pl-6">
                        <div className="flex items-center gap-3">
                          <Image
                            src={customer.image_url}
                            className="rounded-full"
                            alt={`${customer.name}'s profile picture`}
                            width={28}
                            height={28}
                          />
                          <p>{customer.name}</p>
                        </div>
                      </td>
                      <td className="whitespace-nowrap bg-white px-5 py-5 text-sm">
                        {customer.phone_number}
                      </td>
                      <td className="whitespace-nowrap bg-white px-5 py-5 text-sm">
                        {formatDateToLocal(customer.tanggal_lahir)}
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
