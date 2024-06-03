import { GiftIcon } from '@heroicons/react/24/outline';
import { freehand, kanit } from '@/app/ui/fonts'; 
import Image from 'next/image';
export default function AcmeLogo() {
  return (
    <div className={`${freehand.className} flex flex-row items-center leading-none`}>
    <p className='flex items-center text-orange-100' style={{ fontSize: '50px' }}>
      {/* <GiftIcon className={`${freehand.className} flex h-12 w-12 align-center text-blue-100 rounded-2xl`} style={{ marginRight: '8px', strokeWidth: '2'}} /> */}
      <span  style={{ fontWeight: 'bold' }}>Akiong Department Store</span>
    </p>
  </div>
  
  );
}
