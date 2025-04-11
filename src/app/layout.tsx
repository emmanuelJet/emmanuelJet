import '@/styles/app.css';

import type { Metadata } from 'next';
import { Open_Sans } from 'next/font/google';

import ThemeToggle from '@/components/ThemeToggle';
import appConfig from '@/config/app.config';

const openSans = Open_Sans({
  weight: ['400', '600', '700'],
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
      className={`${openSans.variable} antialiased select-none`}
    >
      <head>
				<link rel='preconnect' href='https://firebase.googleapis.com' />
        <link rel='preconnect' href='https://cdnjs.cloudflare.com' />
        <link rel='preconnect' href='https://fonts.googleapis.com' />
			</head>
      <body
        className='bg-[var(--color-bg)] text-[var(--color-text)] transition-colors duration-300'
      >
        <div className="absolute top-4 right-4">
          <ThemeToggle />
        </div>
        {children}
      </body>
    </html>
  );
}

export default RootLayout;
