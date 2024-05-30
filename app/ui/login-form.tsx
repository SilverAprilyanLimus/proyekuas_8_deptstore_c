import { lusitana } from '@/app/ui/fonts';
import {
  AtSymbolIcon,
  KeyIcon,
  ExclamationCircleIcon,
} from '@heroicons/react/24/outline';
import { ArrowRightIcon } from '@heroicons/react/20/solid';
import { Button } from './button';


export default function LoginForm() {
  return (
 <main className="relative min-h-screen flex items-center justify-center p-6 leading-normal">
        <div className="absolute inset-0 bg-gradient-to-r from- to-black opacity-70 z-1"></div>
      <div className="relative z-10 flex items-center justify-center w-full max-w-md">
        <form className="w-full bg-gradient-to-br from-gray-600 to-gray-800 to-black rounded-lg p-6">
          <h1 className={`${lusitana.className} mb-3 ml-2 font-bold text-2xl text-teal-50 leading-[5]  `}>
            Login Page
          </h1>
          <div className="mb-4">
            <label className="block text-xs font-medium text-gray-900" htmlFor="email">
              
            </label>
            <div className="relative mt-1">
              <input
                className="peer block w-full rounded-3xl border border-gray-200 py-[9px] pl-10 text-sm outline-none placeholder:text-gray-500"
                id="email"
                type="email"
                name="email"
                placeholder="Enter your email address"
                required
              />
              <AtSymbolIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-xs font-medium text-gray-900" htmlFor="password">
              
            </label>
            <div className="relative mt-1">
              <input
                className="peer block w-full rounded-3xl border border-gray-200 py-[9px] pl-10 text-sm outline-none placeholder:text-gray-500"
                id="password"
                type="password"
                name="password"
                placeholder="Enter password"
                required
                minLength={6}
              />
              <KeyIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
            </div>
          </div>
          <LoginButton />
          <div className="flex h-8 items-end space-x-1 mt-4" aria-live="polite" aria-atomic="true">
            {/* Add form errors here */}
          </div>
        </form>
      </div>
    </main>
  );
}

function LoginButton() {
  return (
    <Button className="mt-4 w-full hover:bg-yellow-500">
      Login <ArrowRightIcon className="ml-auto h-5 w-5 text-gray-50" />
    </Button>
  );
}