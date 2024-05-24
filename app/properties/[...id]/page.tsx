'use client';
import React from 'react';
import { useRouter } from 'next/navigation';

const PropertyPage = () => {
  const router = useRouter();

  console.log('Hello from the console');
  return <div>PropertyPage</div>;
};

export default PropertyPage;
