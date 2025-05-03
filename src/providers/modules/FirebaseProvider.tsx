'use client';

import { useLayoutEffect } from 'react';

import { initPerformance } from '@/lib/firebase';

const FirebaseProvider = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  useLayoutEffect(() => {
    if (typeof window !== 'undefined') {
      initPerformance();
    }

  }, []);

  return <>{children}</>;
};

export default FirebaseProvider;
