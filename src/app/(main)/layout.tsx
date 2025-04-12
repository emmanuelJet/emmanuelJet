import { getPageMetadata } from '@/utilities';

export const metadata = getPageMetadata('home');

const HomeLayout = ({
	children
}: Readonly<{
	children: React.ReactNode;
}>) => {
	return <>{children}</>;
}

export default HomeLayout;
