'use client'
import { UserGroupIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import { useState } from 'react';

export default function LoginPage() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });


  return (
      <main className="relative min-h-screen flex items-center justify-center p-6 bg-gradient-to-b from-amber-200 to-yellow-500">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden flex w-full max-w-4xl">
        <div className="relative w-1/2">
          <Image
            src="/gam-login.jpg"
            layout="fill"
            objectFit="cover"
            alt="Photography background"
            className="z-0"
          />
        </div>
        <div className="w-1/2 p-8">
        <UserGroupIcon className="h-10 w-10 mt-1 rounded-full border-2 border-gray-800" /> 
          <h2 className="text-2xl font-bold mb-9">Login</h2>
            <div className="relative mt-1 ">
            <input
                className="peer block w-full rounded-3xl border border-gray-400 py-[9px] pl-10 text-sm outline-none placeholder:text-gray-500"
                id="email"
                type="email"
                name="email"
                placeholder="Enter your email address"
                required
              />
            </div>
            <div className="relative mt-1">
            <input
                className="peer block w-full rounded-3xl border border-gray-400 py-[9px] pl-10 text-sm outline-none placeholder:text-gray-500 mt-3"
                id="password"
                type="password"
                name="password"
                placeholder="Enter password"
                required
                minLength={6}
              />
            </div>
            <div className="flex items-center justify-between">
              <button
                type="button"
                className="bg-gray-500 text-white px-4 py-2 mt-10 rounded-md"
                onClick={() => setFormData({
                  email: '',
                  password: '',
                })}
              >
                Cancel
              </button>
              <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 rounded-md mt-10"
              >
                Login
              </button>
            </div>
        </div>
      </div>
    </main>
  );
}
