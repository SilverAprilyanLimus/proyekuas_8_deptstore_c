import {
  BanknotesIcon,
  ClockIcon,
  UserGroupIcon,
  InboxIcon,
} from '@heroicons/react/24/outline';
import { fetchCardData } from '@/app/lib/data'; 
import { lusitana } from '@/app/ui/fonts';

const iconMap = {
  collected: BanknotesIcon,     
  pending: ClockIcon,            
  transactions: InboxIcon,       
  customers: UserGroupIcon,      
};

export default async function CardWrapper() {
  const {
    numberOfInvoices,          
    numberOfCustomers,          
    totalPaidInvoices,          
    totalPendingInvoices,       
  } = await fetchCardData();

  return (
    <>
      <Card title="Collected" value={totalPaidInvoices} type="collected" />
      <Card title="Pending" value={totalPendingInvoices} type="pending" />
      <Card title="Total Transactions" value={numberOfInvoices} type="transactions" />
      <Card title="Total Customers" value={numberOfCustomers} type="customers" />
    </>
  );
}

export function Card({
  title,
  value,
  type,
}: {
  title: string;
  value: number | string;
  type: 'transactions' | 'customers' | 'pending' | 'collected';
}) {
  const Icon = iconMap[type];

  return (
    <div className="rounded-xl bg-yellow-100 p-2 shadow-lg hover:bg-yellow-200">
      <div className="flex p-4">
        {Icon ? <Icon className="h-5 w-5 text-yellow-500" /> : null}
        <h3 className="ml-2 text-sm font-medium text-yellow-700">{title}</h3>
      </div>
      <p
        className={`${lusitana.className}
          truncate rounded-xl bg-white px-4 py-8 text-center text-2xl text-yellow-800`}
      >
        {value}
      </p>
    </div>
  );
}
