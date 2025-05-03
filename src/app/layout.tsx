'use client';
import '@/styles/app.css';

import { Open_Sans } from 'next/font/google';
import { usePathname } from 'next/navigation';
import { AnimatePresence } from 'framer-motion';

import { getPageSchema, getPageConfigByPath } from '@/utilities';
import ThemeToggle from '@/components/ThemeToggle';
import AppProvider from '@/providers';

const openSans = Open_Sans({
  weight: ['400', '500', '600', '700'],
  variable: '--font-open-sans',
  subsets: ['latin'],
});

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const pathname = usePathname();
	const page = getPageConfigByPath(pathname);

  return (
    <html
      lang='en-GB'
      className={`${openSans.variable} antialiased select-none`}
    >
      <head>
        <link rel='preconnect' href='https://firebase.googleapis.com' />
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <script
					type='application/ld+json'
					dangerouslySetInnerHTML={{
						__html: JSON.stringify(getPageSchema(page))
					}}
				/>
      </head>
      <body
        className='text-gray-900 dark:text-gray-50 transition-colors duration-300'
      >
        <AppProvider>
          <div className='absolute top-4 right-4 z-50'>
            <ThemeToggle />
          </div>

          <AnimatePresence mode='wait'>
            {children}
          </AnimatePresence>
        </AppProvider>
      </body>
    </html>
  );
}

export default RootLayout;
