  import Image from 'next/image';
  import { lusitana } from '@/app/ui/fonts';
  import Search from '@/app/ui/search';
  import {
    FormattedTransactionsTable,
    TransactionsTableType
  } from '@/app/lib/definitions';
  import { transactions } from '@/app/lib/placeholder-data';
import { fetchFilteredTransactions } from '@/app/lib/data';
import { Query } from '@vercel/postgres';


  export default async function TransactionsTable({
    transactions,
    query,
    currentPage,
  }: {
    transactions : FormattedTransactionsTable[];
    query: string;
    currentPage: number;
  }) {
    // const transactions = await fetchFilteredTransactions(query, currentPage);
    return (
      <div className="w-full">
        <Search placeholder="Search Transactions..." />
        <div className="mt-6 flow-root">
          <div className="overflow-x-auto">
            <div className="inline-block min-w-full align-middle">
              <div className="overflow-hidden rounded-md bg-gray-100 p-2 md:pt-0">
                <div className="md:hidden">
                  {transactions?.map((transactions) => (
                    <div
                      key={transactions.id}
                      className="mb-2 w-full rounded-md bg-white p-4"
                    >
                      <div className="flex items-center justify-between border-b pb-4">
                        <div>
                          <div className="mb-2 flex items-center">
                            <div className="flex items-center gap-3">
                              <p>{transactions.customer_id}</p>
                            </div>
                          </div>
                          <p className="text-sm text-gray-500">
                            {transactions.total_paid}
                          </p>
                          <p className="text-sm text-gray-500">
                            {transactions.total_paid}
                          </p>
                          <p className="text-sm text-gray-500">
                            {transactions.date}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <table className="hidden min-w-full rounded-md text-gray-900 md:table">
                  <thead className="rounded-md bg-gray-100 text-left text-sm font-normal">
                    <tr>
                      
                    <th scope="col" className="px-4 py-5 font-medium text-left sm:pl-6">
                        Customer Name
                      </th>
                      <th scope="col" className="px-4 py-5 font-medium text-left sm:pl-6">
                        Product Name
                      </th>
                      <th scope="col" className="px-4 py-5 font-medium text-left sm:pl-3">
                      Total Paid  
                      </th>
                      <th scope="col" className="px-4 py-5 font-medium text-left sm:pl-3">
                      Date
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 text-gray-900">
                    {transactions.map((transaction) => (
                      <tr key={transaction.id} className="group">
                        <td className="whitespace-nowrap bg-white py-5 pl-4 pr-3 text-sm text-black sm:pl-6">
                          <div className="flex items-center gap-3">
                          
                            <p>{transaction.customer_id}</p>
                          </div>
                        </td>
                        <td className="whitespace-nowrap bg-white px-4 py-5 text-sm">
                          {transaction.product_id}
                        </td>
                        <td className="whitespace-nowrap bg-white px-4 py-5 text-sm">
                          {transaction.total_paid}
                        </td>
                        <td className="whitespace-nowrap bg-white px-4 py-5 text-sm">
                          {transaction.date}
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



