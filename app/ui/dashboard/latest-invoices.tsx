import { ArrowPathIcon } from '@heroicons/react/24/outline';
import clsx from 'clsx';
import Image from 'next/image';
import { lusitana } from '@/app/ui/fonts';
<<<<<<< HEAD
<<<<<<< HEAD
import { LatestCustomer } from '@/app/lib/definitions';
import { fetchLatestCustomers } from '@/app/lib/data';

  
export default async function LatestCustomers(){
  const latestCustomers = await fetchLatestCustomers();
=======
=======
>>>>>>> cc14c59 (blom kelar)
import { LatestTransaction} from '@/app/lib/definitions';
import { transactions } from '@/app/lib/placeholder-data';
export default async function latestTransactions({
  latestTransactions,
}: {
  latestTransactions: LatestTransaction[];
}) {
<<<<<<< HEAD
>>>>>>> 928a016 (asdasdasd)
=======
=======
import { LatestCustomer } from '@/app/lib/definitions';
import { fetchLatestCustomers } from '@/app/lib/data';

  
export default async function LatestCustomers(){
  const latestCustomers = await fetchLatestCustomers();
>>>>>>> 72076a0 (blom kelar)
>>>>>>> cc14c59 (blom kelar)
  return (
    <div className="flex w-full flex-col md:col-span-4">
      <h2 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
        
      </h2>
      <div className="flex grow flex-col justify-between rounded-xl bg-gray-0 p-4">
        {/* NOTE: comment in this code when you get to this point in the course */}

        <div className="bg-white px-6">
<<<<<<< HEAD
<<<<<<< HEAD
          {latestCustomers.map((Customer, i) => {
            return (
              <div
                key={Customer.id}
=======
=======
>>>>>>> cc14c59 (blom kelar)
          {latestTransactions.map((transaction, i) => {
            return (
              <div
                key={transaction.id}
<<<<<<< HEAD
>>>>>>> 928a016 (asdasdasd)
=======
=======
          {latestCustomers.map((Customer, i) => {
            return (
              <div
                key={Customer.id}
>>>>>>> 72076a0 (blom kelar)
>>>>>>> cc14c59 (blom kelar)
                className={clsx(
                  'flex flex-row items-center justify-between py-4',
                  {
                    'border-t': i !== 0,
                  },
                )}
              >
                <div className="flex items-center">
                  <Image
<<<<<<< HEAD
<<<<<<< HEAD
                    src={Customer.image_url}
                    alt={`${Customer.name}'s profile picture`}
=======
                    src={transaction.image_url}
                    alt={`${transaction.name}'s profile picture`}
>>>>>>> 928a016 (asdasdasd)
=======
                    src={transaction.image_url}
                    alt={`${transaction.name}'s profile picture`}
=======
                    src={Customer.image_url}
                    alt={`${Customer.name}'s profile picture`}
>>>>>>> 72076a0 (blom kelar)
>>>>>>> cc14c59 (blom kelar)
                    className="mr-4 rounded-full"
                    width={32}
                    height={32}
                  />
                  <div className="min-w-0">
                    <p className="truncate text-sm font-semibold md:text-base">
<<<<<<< HEAD
<<<<<<< HEAD
                      {Customer.name}
                    </p>
                    <p className="hidden text-sm text-gray-500 sm:block">
                      {Customer.email}
=======
=======
>>>>>>> cc14c59 (blom kelar)
                      {transaction.name}
                    </p>
                    <p className="hidden text-sm text-gray-500 sm:block">
                      {transaction.total_paid}
<<<<<<< HEAD
>>>>>>> 928a016 (asdasdasd)
=======
=======
                      {Customer.name}
                    </p>
                    <p className="hidden text-sm text-gray-500 sm:block">
                      {Customer.email}
>>>>>>> 72076a0 (blom kelar)
>>>>>>> cc14c59 (blom kelar)
                    </p>
                  </div>
                </div>
                <p
                  className={`${lusitana.className} truncate text-sm font-medium md:text-base`}
                >
<<<<<<< HEAD
<<<<<<< HEAD
                  {Customer.amount}
=======
                  {transaction.total_paid}
>>>>>>> 928a016 (asdasdasd)
=======
                  {transaction.total_paid}
=======
                  {Customer.amount}
>>>>>>> 72076a0 (blom kelar)
>>>>>>> cc14c59 (blom kelar)
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
