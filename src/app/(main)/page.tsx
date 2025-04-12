'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

import headshot from '../../../public/media/brand/emmanueljet-headshot.png';
import { LinkedInIcon, GithubIcon, XIcon } from '@/components/Icons';
import PageLayout from '@/components/PageLayout';
import me from '@/config/me.config';

const { name, socials } = me;

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: 'easeOut',
    },
  }),
};

const Home = () => {
  return (
    <PageLayout className='md:flex-row md:gap-16'>
      {/* Headshot */}
      <motion.div
        className='w-40 h-40 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-primary shadow-xl'
        variants={fadeInUp}
        initial='hidden'
        animate='visible'
        custom={0}
      >
        <Image
          src={headshot}
          alt={`${name.full} Headshot`}
          width={256}
          height={256}
          className='object-cover w-full h-full'
          priority
        />
      </motion.div>

      {/* Text content */}
      <motion.div
        className='mt-10 md:mt-0 max-w-xl text-center md:text-left'
        variants={fadeInUp}
        initial='hidden'
        animate='visible'
        custom={3}
      >
        <p className='text-lg md:text-xl font-medium text-primary-500 mb-2'>Hi, I am</p>
        <h1 className='text-4xl md:text-5xl font-semibold leading-tight'>
          {`${name.first} ${name.last}`} <span className='text-primary-500'>({name.nickname})</span>
        </h1>
        <p className='mt-4 text-lg leading-relaxed text-[var(--color-text)]'>
          An experienced Web & Blockchain Engineer passionate about creating scalable backends, secure smart contracts, and AI-powered solutions for Africa and beyond.
        </p>

        {/* Social Links */}
        <motion.div
          className='mt-6 flex justify-center md:justify-start gap-5'
          variants={fadeInUp}
          initial='hidden'
          animate='visible'
          custom={5}
        >
          <Link href={socials.linkedin} target='_blank' aria-label='LinkedIn'>
            <LinkedInIcon />
          </Link>
          <Link href={socials.x} target='_blank' aria-label='X (formally Twitter)'>
            <XIcon />
          </Link>
          <Link href={socials.github} target='_blank' aria-label='GitHub'>
            <GithubIcon />
          </Link>
        </motion.div>
      </motion.div>
    </PageLayout>
  );
};

export default Home;
