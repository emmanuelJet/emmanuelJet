import Link from 'next/link'

import PageLayout from '@/components/PageLayout';
import { getPageConfig, getPageMetadata } from '@/utilities';

const pageConfig = getPageConfig('not-found');
export const metadata = getPageMetadata(pageConfig.name);

const NotFound = () => {
  const { title, description } = pageConfig;

  return (
    <PageLayout className='text-center'>
      <h1 className='text-6xl font-bold mb-4'>404</h1>
      <h2 className='text-3xl font-semibold mb-3'>{title}</h2>
      <p className='text-xl mb-6'>{description}</p>
      <Link
        href='/'
        className='inline-block px-6 py-3 rounded-md border-2 font-semibold hover:border-primary-700 hover:bg-primary-700 hover:text-white transition'
      >
        Go back home
      </Link>
    </PageLayout>
  )
}

export default NotFound;