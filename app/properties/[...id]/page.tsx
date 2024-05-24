'use client';
import React from 'react';
import {
  useRouter,
  useParams,
  useSearchParams,
  usePathname,
} from 'next/navigation';

const PropertyPage = () => {
  const router = useRouter();
  const { id } = useParams();
  const searchParams = useSearchParams();
  const name = searchParams.get('name');
  const pathname = usePathname();

  console.log('Hello from the browser');
  return (
    <div>
      <button onClick={() => router.push('/')} className='bg-blue-400 p-2'>
        Go Home
      </button>
      <p className='text-2xl p-3 mx-auto'>
        {id}, {name}, {pathname}
      </p>
    </div>
  );
};

export default PropertyPage;
