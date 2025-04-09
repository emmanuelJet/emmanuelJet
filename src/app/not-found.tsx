import Link from 'next/link'

import Layout from '@/components/Layout';
import AnimatedText from '@/components/AnimatedText';
import TransitionEffect from '@/components/TransitionEffect';

const NotFound = () => {
  return (
    <>
      <TransitionEffect />
      <main className='h-[100vh] w-full dark:bg-dark '>
        <Layout className='relative !bg-transparent !pt-16 flex flex-col items-center justify-center'>
          <AnimatedText text='404' />
          <AnimatedText text='Page Not Found.' className='!text-7xl' />
          <Link
            href='/'
            className='self-center !mt-4 inline-block rounded-lg border-2 border-solid bg-dark px-4 py-2 font-semibold text-light hover:border-dark hover:bg-light hover:text-dark dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light hover:dark:border-light'
          >
            Go To Home
          </Link>
        </Layout>
      </main>
    </>
  )
}

export default NotFound;