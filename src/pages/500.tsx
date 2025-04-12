import '@/styles/app.css';

import Head from 'next/head';

import PageLayout from '@/components/PageLayout';
import ThemeToggle from '@/components/ThemeToggle';
import { getPageName, getPageConfig, getPageSchema } from '@/utilities';

const Error500 = () => {
	const page = getPageConfig('error-500');
	const { url, title, keywords, description } = page;

	return (
		<>
			<Head>
				<title>{getPageName(page)}</title>
				<link rel='canonical' href={url} />
				<meta name='description' content={description} />
				<meta name='keywords' content={keywords.join(', ')} />
				<script
					type='application/ld+json'
					dangerouslySetInnerHTML={{
						__html: JSON.stringify(getPageSchema(page))
					}}
				/>
			</Head>
      <div className='bg-[var(--color-bg)] text-[var(--color-text)] transition-colors duration-300'>
        <div className='absolute top-4 right-4 z-50'>
          <ThemeToggle />
        </div>
        <PageLayout className='text-center'>
          <h1 className='text-6xl font-bold mb-4'>500</h1>
          <h2 className='text-3xl font-semibold mb-2'>{`Oops! ${title}`}</h2>
          <p className='text-xl'>{description}</p>
        </PageLayout>
      </div>
		</>
	);
}

export default Error500;
