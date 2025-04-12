import meConfig from '@/config/me.config';
import appConfig from '@/config/app.config';
import type { IPageConfig } from '@/config/page.config';

const { url, tagline, description } = appConfig;
const { dob, name, email, country, socials } = meConfig;

export const schemaPageImageObject = (page: IPageConfig) => {
	return {
		'@type': 'ImageObject',
		name: `${page.title} SEO Banner`,
		description: `${name.username} seo banner`,
		contentUrl: 'https://firebasestorage.googleapis.com/v0/b/emmanueljet.appspot.com/o/brand%2Fseo%2Femmanueljet-seo-banner.jpg?alt=media&token=30005c4b-7b2c-4c25-ac21-a84afcd6c308',
		encodingFormat: 'image/jpeg',
		copyrightNotice: name.full,
		acquireLicensePage: url,
		creditText: name.full,
		height: 630,
		width: 1200,
		license: url,
		creator: {
			'@type': 'Person',
      honorificPrefix: 'Mr.',
      givenName: name.first,
      familyName: name.last,
      additionalName: name.middle,
      alternateName: name.username,
      gender: 'GenderType::Male',
      nationality: 'NG',
			name: name.full,
			url: url
		}
	};
}

export const schemaBreadcrumb = (page: IPageConfig) => ({
	'@type': 'BreadcrumbList',
	name: `${name.username} website breadcrumb`,
	numberOfItems: 2,
	itemListElement: [
		{
			'@type': 'ListItem',
			position: 1,
			name: 'Home',
			item: `${url}`
		},
		{
			'@type': 'ListItem',
			position: 2,
			name: page.title,
			item: page.url
		}
	]
});

export const schemaCreator = {
	'@type': 'Person',
	url: url,
	name: name.full,
  familyName: name.last,
  givenName: name.first,
	additionalName: name.middle,
	alternateName: name.username,
  ...(dob && { birthDate: new Date(dob).toISOString() }),
  gender: 'GenderType::Male',
  jobTitle: 'Lead Engineer',
	email: `mailto:${email}`,
  honorificPrefix: 'Mr.',
	description,
	image: {
		'@type': 'ImageObject',
		name: `${name.full}`,
		description: tagline,
		contentUrl: 'https://firebasestorage.googleapis.com/v0/b/emmanueljet.appspot.com/o/brand%2Fseo%2Femmanueljet-seo-image.png?alt=media&token=4c2658ae-afbd-41ce-84d7-5a1a7010ae49',
		acquireLicensePage: url,
		encodingFormat: 'image/jpeg',
		copyrightNotice: name.full,
		creditText: name.full,
		license: url,
		size: '122293',
		height: '512',
		width: '512',
		creator: {
			'@type': 'Person',
      honorificPrefix: 'Mr.',
      givenName: name.first,
      familyName: name.last,
      additionalName: name.middle,
      alternateName: name.username,
      gender: 'GenderType::Male',
      nationality: 'NG',
			name: name.full,
			url: url
		}
	},
  hasOccupation: {
    '@type': 'Occupation',
    name: 'Lead Engineer',
    mainEntityOfPage: url,
    description: 'Lead Engineer at Treate',
    educationRequirements: 'Bsc in Computer Science',
    occupationLocation: {
      '@type': 'Country',
      name: country,
      alternateName: 'NG'
    },
    estimatedSalary: {
      '@type': 'MonetaryAmount',
      name: 'Lead Engineer Monthly Salary',
      currency: 'NGN',
      minValue: 500000,
      maxValue: 2500000,
      value: 1000000,
    }
  },
	contactPoint: {
		'@type': 'ContactPoint',
		contactType: 'general inquiries',
		email: `mailto:${email}`,
		availableLanguage: {
			'@type': 'Language',
			name: 'English',
			alternateName: 'en-GB'
		}
	},
  nationality: {
    '@type': 'Country',
    name: country,
    alternateName: 'NG'
  },
	address: {
		'@type': 'PostalAddress',
		streetAddress: '',
		addressLocality: 'Ado-Ekiti',
		addressRegion: 'Ekiti',
		postalCode: '360001',
		addressCountry: 'NG'
	},
  brand: {
    '@type': 'Organization',
    legalName: 'Treate Innovative Solutions Limited',
    url: 'https://treate.ng',
    leiCode: 'RC 1788851',
    name: 'Treate'
  },
  worksFor: {
    '@type': 'Organization',
    legalName: 'Ship Pack LLC',
    url: 'https://theshippack.com',
    duns: '119192712',
    name: 'ShipPack'
  },
	sameAs: [
    ...Object.values(socials)
  ]
}


