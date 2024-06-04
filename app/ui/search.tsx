'use client';

import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { useSearchParams, usePathname, useRouter } from 'next/navigation';
import { useDebouncedCallback } from 'use-debounce';

<<<<<<< HEAD
export default async function Search({ placeholder }: { placeholder: string }) {


=======
<<<<<<< HEAD
export default function Search({ placeholder }: { placeholder: string }) {
  
=======
export default async function Search({ placeholder }: { placeholder: string }) {


>>>>>>> 7834da5 (product, customer done. transaction, home need fix)
>>>>>>> 3cfa1fb (product, customer done. transaction, home need fix)
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

<<<<<<< HEAD

    const handleSearch = useDebouncedCallback((term) => {
    console.log(`Searching... ${term}`);
=======
<<<<<<< HEAD
  const handleSearch = useDebouncedCallback((term) => {
    console.log(`Searching... ${term}`);

    const params = new URLSearchParams(searchParams.toString());

=======

    const handleSearch = useDebouncedCallback((term) => {
    console.log(`Searching... ${term}`);
>>>>>>> 3cfa1fb (product, customer done. transaction, home need fix)
    
    const params = new URLSearchParams(searchParams);
    
    params.set('query', term);
<<<<<<< HEAD
=======
>>>>>>> 7834da5 (product, customer done. transaction, home need fix)
>>>>>>> 3cfa1fb (product, customer done. transaction, home need fix)
    if (term) {
      params.set('page', '1');
    } else {
      params.delete('query');
    }
    replace(`${pathname}?${params.toString()}`);
  }, 400);
<<<<<<< HEAD
  
=======
<<<<<<< HEAD
=======
  
>>>>>>> 7834da5 (product, customer done. transaction, home need fix)
>>>>>>> 3cfa1fb (product, customer done. transaction, home need fix)

  return (
    <div className="relative flex flex-1 flex-shrink-0">
      <label htmlFor="search" className="sr-only">
        Search
      </label>
      <input
        className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
        placeholder={placeholder}
        onChange={(e) => {
          handleSearch(e.target.value);
        }}
        defaultValue={searchParams.get('query')?.toString()}
      />
      <MagnifyingGlassIcon className="absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
    </div>
  );
}
