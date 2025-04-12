import type { MetadataRoute } from 'next';

import pageConfig from '@/config/page.config';

const currentDateISOString = new Date().toISOString();
const filteredPages = Object.values(pageConfig).filter(page => page.isErrorPage !== true);
 
const sitemap = (): MetadataRoute.Sitemap => {
  const appSitemap: MetadataRoute.Sitemap = filteredPages.map((page) => ({
		url: page.url,
		changeFrequency: 'monthly',
		lastModified: currentDateISOString,
		priority: page.path === '/' ? 1 : 0.8,
    images: [
      'https://firebasestorage.googleapis.com/v0/b/emmanueljet.appspot.com/o/brand%2Fseo%2Femmanueljet-seo-banner.jpg?alt=media&token=30005c4b-7b2c-4c25-ac21-a84afcd6c308',
      'https://firebasestorage.googleapis.com/v0/b/emmanueljet.appspot.com/o/brand%2Fseo%2Femmanueljet-seo-image.png?alt=media&token=4c2658ae-afbd-41ce-84d7-5a1a7010ae49'
    ]
	}));

	return appSitemap;

}

export default sitemap;