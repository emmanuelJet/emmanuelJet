import type { Metadata } from 'next';

import pageConfig, {
  type IPageConfig,
  type PageName,
} from '@/config/page.config';
import meConfig from '@/config/me.config';
import appConfig from '@/config/app.config';
import { getMetadataImages } from './metadata.utility';
import { getIconPath, getVersionedFaviconPath } from '..';
import { schemaCreator, schemaBreadcrumb, schemaPageImageObject } from './schema.utility';

const { name, email, country, socials } = meConfig;
const { url, name: appName, launchedAt } = appConfig;

export const getPageConfig = (page: PageName): IPageConfig => {
	try {
		return pageConfig[page];
	} catch {
		throw new Error(`Page configuration not found for ${page}`);
	}
};

export const getPageConfigByPath = (path: string | null): IPageConfig => {
	if (!path) {
		return getPageConfig('not-found');
	}

	for (const page in pageConfig) {
		if (pageConfig[page].path === path) {
			return pageConfig[page];
		}
	}

	return getPageConfig('not-found');
};

export const getPageName = (page: IPageConfig): string => {
	return `${page.title} - ${page.subtitle}`;
};

export const getPageMetadata = (page: PageName): Metadata => {
  const pageConfig = getPageConfig(page);
	const metadataImages = getMetadataImages();
  const arrayedSocials = Object.values(socials);
  const metadataTitle = getPageName(pageConfig);
	const { url: pageUrl, isErrorPage, description, keywords } = pageConfig;

  const twitterUrl = new URL(socials.x);
  const twitterHandle = `@${twitterUrl.pathname.split('/')[1]}`;

	const pageMetadata: Metadata = {
    title: metadataTitle,
    publisher: 'Firebase',
		creator: `${name.full}`,
		referrer: 'strict-origin-when-cross-origin',
		metadataBase: new URL(url),
		category: 'Personal',
		generator: 'Next.js',
    description,
    keywords,
		alternates: {
			canonical: pageUrl
		},
		authors: {
			name: `${name.full}`,
			url: url
		},
		formatDetection: {
			email: true,
			address: true,
			telephone: true
		},
		robots: {
			index: !isErrorPage,
			follow: !isErrorPage,
			nocache: isErrorPage,
			noimageindex: isErrorPage
		},
		icons: {
			shortcut: {
				url: getVersionedFaviconPath(),
				type: 'image/x-icon',
				sizes: '64x64'
			},
			icon: {
				url: getIconPath('icon-512-maskable.png'),
				type: 'image/png',
				sizes: '512x512'
			},
			apple: {
				url: getIconPath('apple-touch-icon.png'),
				type: 'image/png',
				sizes: '180x180'
			}
		},
		twitter: {
			card: 'summary_large_image',
			creator: twitterHandle,
			site: twitterHandle,
			title: metadataTitle,
			description: description,
			images: metadataImages
		},
		openGraph: {
			locale: 'en-GB',
			type: 'website',
			url: pageUrl,
      emails: email,
			siteName: appName,
			title: metadataTitle,
      countryName: country,
			description: description,
			images: metadataImages
		},
		other: {
			'og:see_also': arrayedSocials
		},
	};

	return pageMetadata;
}

export const getPageSchema = (page: IPageConfig) => {
  const pageName = getPageName(page);
	const { url, path, title, subtitle, keywords, schemaType, description } = page;

  const pageSchema = {
    '@context': 'https://schema.org',
    '@type': schemaType,
    url: url,
    name: pageName,
    headline: subtitle,
    alternateName: title,
    mainEntityOfPage: url,
    datePublished: launchedAt,
    description,
    keywords,
    ...(path === '/' && {
			image: schemaPageImageObject(page)
		}),
		...(path !== '/' && {
			primaryImageOfPage: schemaPageImageObject(page)
		}),
    ...(path !== '/' && { breadcrumb: schemaBreadcrumb(page) }),
    creator: schemaCreator,
  };

  return pageSchema;
}
