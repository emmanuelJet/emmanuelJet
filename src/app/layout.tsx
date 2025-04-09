import '@/styles/globals.css';

import Script from "next/script";
import type { Metadata } from 'next';
import { Open_Sans } from 'next/font/google';
import { AnimatePresence } from 'framer-motion';
import appConfig from '@/config/app.config';

const openSans = Open_Sans({
  variable: '--font-open-sans',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: appConfig.name,
  description: appConfig.headline,
};

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html
      lang='en-GB'
    >
      <head>
				<link rel='preconnect' href='https://firebase.googleapis.com' />
        <link rel='preconnect' href='https://cdnjs.cloudflare.com' />
        <link rel='preconnect' href='https://fonts.googleapis.com' />

        <Script id="theme-switcher" strategy="beforeInteractive">
          {`
            if (
              localStorage.getItem('theme') === 'dark' ||
              (!('theme' in localStorage) &&
                window.matchMedia('(prefers-color-scheme: dark)').matches)
            ) {
              document.documentElement.classList.add('dark');
            } else {
              document.documentElement.classList.remove('dark');
            }
          `}
        </Script>
			</head>
      <body
        className={`${openSans.variable} bg-light dark:bg-dark w-full min-h-screen h-full antialiased select-none`}
      >
        <AnimatePresence initial={false} mode="wait">
          {children}
        </AnimatePresence>
      </body>
    </html>
  );
}

export default RootLayout;
