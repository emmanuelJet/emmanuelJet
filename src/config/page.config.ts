import appConfig from '@/config/app.config';

export type PageName = 'home' | 'not-found' | 'error-500';

export interface IPageConfig {
	url: string;
	path: string;
	title: string;
  name: PageName;
	subtitle: string;
  schemaType: string;
	description: string;
	isErrorPage: boolean;
	keywords: Array<string>;
}

const {
	url,
	name,
	tagline,
  keywords,
	description,
} = appConfig;

/**
 * An object of the website page configuration data
 * arranged with page name by sitemap order.
 */
const pageConfig: { [page: string]: IPageConfig } = {
	home: {
		path: '/',
		title: name,
    name: 'home',
		url: `${url}/`,
		subtitle: tagline,
		isErrorPage: false,
		schemaType: 'WebSite',
		description: description,
		keywords: [
      ...keywords,
      'Who is JET?',
      'Who is Emmanuel Joseph?',
			'Who is Emmanuel Joseph (JET)?',
		]
	},
	'not-found': {
		path: '/404',
		subtitle: name,
    name: 'not-found',
		url: `${url}/404`,
		isErrorPage: true,
		schemaType: 'WebPage',
		title: 'Page Not Found',
		description: 'The page you are looking for does not exist, has been removed, name changed or is temporarily unavailable.',
		keywords: [
			'404',
			'Not Found',
			'Error 404',
			'Page Not Found',
      ...keywords,
		]
	},
	'error-500': {
		path: '/500',
		subtitle: name,
    name: 'error-500',
		url: `${url}/500`,
		isErrorPage: true,
		schemaType: 'WebPage',
		title: 'Server Error',
		description: `Something went wrong on our end. We are working to fix it. Please try again later.`,
		keywords: [
			'500',
			'Error 500',
			'Server Error',
			'Internal Server Error',
      ...keywords,
		]
	}
};

export default pageConfig;