import Link from 'next/link';
import Image from 'next/image';
import headshot from '../../public/media/brand/emmanueljet-headshot.png';
import { LinkedInIcon, GithubIcon, XIcon } from '@/components/Icons';

const Home = () => {
  return (
    <main className='min-h-screen flex flex-col items-center justify-center px-6 py-20 md:flex-row md:gap-16 bg-[var(--color-bg)] text-[var(--color-text)] transition-all'>
      {/* Headshot */}
      <div className='w-40 h-40 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-[var(--color-primary)] shadow-xl'>
        <Image
          src={headshot}
          alt='Emmanuel Joseph (JET) Headshot'
          width={256}
          height={256}
          className='object-cover w-full h-full'
          priority
        />
      </div>

      {/* Text content */}
      <div className='mt-10 md:mt-0 max-w-xl text-center md:text-left'>
        <h1 className='text-4xl md:text-5xl font-bold leading-tight'>
          Emmanuel Joseph <span className='text-[var(--color-primary-500)]'>(JET)</span>
        </h1>
        <p className='mt-4 text-lg leading-relaxed'>
          An experienced Web & Blockchain Engineer passionate about creating scalable backends, secure smart contracts, and AI-powered solutions for Africa and beyond.
        </p>

        {/* Social Links */}
        <div className='mt-6 flex justify-center md:justify-start gap-5'>
          <Link href='https://linkedin.com/in/emmanuelJet' target='_blank' aria-label='LinkedIn'>
            <LinkedInIcon />
          </Link>
          <Link href='https://x.com/emmanuelJet_' target='_blank' aria-label='X (formally Twitter)'>
            <XIcon />
          </Link>
          <Link href='https://github.com/emmanuelJet' target='_blank' aria-label='GitHub'>
            <GithubIcon />
          </Link>
        </div>
      </div>
    </main>
  );
}

export default Home;
