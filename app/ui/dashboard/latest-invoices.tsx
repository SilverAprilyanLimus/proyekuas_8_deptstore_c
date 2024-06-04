import { ArrowPathIcon } from '@heroicons/react/24/outline';
import clsx from 'clsx';
import Image from 'next/image';
import { lusitana } from '@/app/ui/fonts';
import { LatestTransaction} from '@/app/lib/definitions';
import { transactions } from '@/app/lib/placeholder-data';
export default async function latestTransactions({
  latestTransactions,
}: {
  latestTransactions: LatestTransaction[];
}) {
  return (
    <div className="flex w-full flex-col md:col-span-4">
      <h2 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
        
      </h2>
      <div className="flex grow flex-col justify-between rounded-xl bg-gray-0 p-4">
        {/* NOTE: comment in this code when you get to this point in the course */}

        <div className="bg-white px-6">
          {latestTransactions.map((transaction, i) => {
            return (
              <div
                key={transaction.id}
                className={clsx(
                  'flex flex-row items-center justify-between py-4',
                  {
                    'border-t': i !== 0,
                  },
                )}
              >
                <div className="flex items-center">
                  <Image
                    src={transaction.image_url}
                    alt={`${transaction.name}'s profile picture`}
                    className="mr-4 rounded-full"
                    width={32}
                    height={32}
                  />
                  <div className="min-w-0">
                    <p className="truncate text-sm font-semibold md:text-base">
                      {transaction.name}
                    </p>
                    <p className="hidden text-sm text-gray-500 sm:block">
                      {transaction.total_paid}
                    </p>
                  </div>
                </div>
                <p
                  className={`${lusitana.className} truncate text-sm font-medium md:text-base`}
                >
                  {transaction.total_paid}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
