'use client';

import { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';

const pageTransition = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -10 },
  transition: { duration: 0.4, ease: 'easeInOut' },
};

interface IPageLayoutProps {
  children: ReactNode;
  className?: string;
}

const PageLayout = ({ children, className = '' }: IPageLayoutProps) => {
  const pathname = usePathname();

  return (
    <motion.main
      key={pathname}
      initial='initial'
      animate='animate'
      exit='exit'
      variants={pageTransition}
      transition={pageTransition.transition}
      className={`min-h-screen flex flex-col items-center justify-center px-6 py-20 ${className} bg-[var(--color-bg)] text-[var(--color-text)] transition-all`}
    >
      {children}
    </motion.main>
  );
};

export default PageLayout;
