import Link from 'next/link'

const NotFound = () => {
  return (
    <main className='min-h-screen flex flex-col items-center justify-center px-6 py-20 md:flex-row md:gap-16 bg-[var(--color-bg)] text-[var(--color-text)] transition-all'>
      <div className='flex flex-col items-center'>
        <h1 className='text-6xl font-bold'>404</h1>
        <p className='mt-4 text-lg'>Page Not Found</p>
        <Link href='/' className='mt-6 text-[var(--color-primary)] rounded-lg border-2 border-solid bg-dark px-4 py-2
        font-semibold hover:border-primary-700'>
          Go Home
        </Link>
      </div>
    </main>
  )
}

export default NotFound;