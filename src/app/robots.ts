import type { MetadataRoute } from 'next';

import appConfig from '@/config/app.config';

const { url } = appConfig;
const robots = (): MetadataRoute.Robots => {
	return {
		rules: {
			userAgent: '*',
			allow: [
				'/',
				'/*.png?*$',
				'/*.jpg?*$',
				'/*.svg?*$',
				'/*.ico?*$'
			],
			disallow: [
				'/404',
				'/500'
			]
		},
		sitemap: `${url}/sitemap.xml`
	};
}

export default robots;
