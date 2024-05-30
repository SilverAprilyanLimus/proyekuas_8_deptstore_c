import AcmeLogo from '@/app/ui/acme-logo';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import Image from 'next/image';
import { kanit, anton, freehand, inter } from '@/app/ui/fonts';
import { UserIcon, ArrowRightCircleIcon } from '@heroicons/react/20/solid';

export default function Page() {
  return (
    <main className="relative inset-0 bg-gradient-to-r from-transparent to-black z-1 flex min-h-screen flex-col p-6">
      <div className="absolute inset-0 z-0">
        <Image
          src="/bg-home1.jpg"
          layout="fill"
          objectFit="cover"
          className="hidden md:block"
          alt="Screenshots of the dashboard project showing desktop version"
        />
      </div>

      <header className='absolute top-0 right-5'>
        <Link
          href="/login"
          className="flex items-center gap-1 mt-5 rounded-3xl bg-opacity-75 px-10 border border-1 py-3 text-sm font-medium text-white transition hover:bg-gray-600 md:text-base hidden md:block"
        >
          <span>Login</span>
        </Link>
      </header>

      <div className="relative z-10 flex h-20 items-center rounded-full overflow-hidden w-16 h-16 border-4 border-orange-400  ">
        <Image
          src="/logo.jpg"
          alt="Akiong Store Logo"
          width={80}
          height={80}
          className="mr-4"
        />
        <AcmeLogo />
      </div>

      <div className="relative z-10 mt-4 flex grow flex-col gap-4 md:flex-row">
        <div className="flex flex-col justify-center gap-3 rounded-lg  px-6 py-10 ">
          <p className={`${freehand.className} text-6xl text-yellow-300 md:text-8xl md:leading-none`}>
            Akiong Store
          </p>
          <p className={`${inter.className} text-lg text-yellow-100 md:text-2xl md:leading-none`}>
            Kualitas pejabat harga merakyat
          </p>
        </div>
        <div className="relative h-screen"> {/* Parent container with relative positioning */}
    {/* <Link href="/dashboard">
      <div
      className="absolute bottom-4 right-4 flex items-center text-white text-[24px] hover:text-teal-500 p-4"
      >
        <p className={`${kanit.className} antialiased`}>
          Go to Dashboard
        </p>
        <ArrowRightCircleIcon className="w-6 mx-2" />
      </div>
    </Link> */}
  </div>
        <div className="flex flex-col justify-center gap-6 rounded-lgbg-opacity-75 px-6 py-10 md:w-2/5 md:px-20">
          {/* Konten tambahan dapat ditambahkan di sini */}
        </div>
      </div>
    </main>
  );
}
