import '@/styles/globals.css';
import type { Metadata } from 'next';
import { Open_Sans } from 'next/font/google';

export const metadata: Metadata = {
  title: 'Emmanuel Joseph (JET)',
  description: 'Building the Future as a Web Engineer with Blockchain Technologies.',
};

const openSans = Open_Sans({
	display: 'swap',
	subsets: ['latin'],
	variable: '--font-open-sans',
	style: ['normal', 'italic'],
	weight: ['300', '400', '500', '600', '700', '800']
});

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html
			lang='en-GB'
			className={`${openSans.variable} select-none`}
		>
      <head>
				<link rel='preconnect' href='https://firebase.googleapis.com' />
			</head>
      <body className='font-sans text-info'>{children}</body>
    </html>
  );
}

export default RootLayout;
