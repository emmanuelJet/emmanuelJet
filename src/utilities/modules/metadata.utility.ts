import meConfig from '@/config/me.config';

export interface IMetadataImage {
	alt: string;
	url: string | URL;
	width: string | number;
	height: string | number;
}

export const getMetadataImages = (): IMetadataImage[] => {
	return [
		{
			url: 'https://firebasestorage.googleapis.com/v0/b/emmanueljet.appspot.com/o/brand%2Fseo%2Femmanueljet-seo-image.png?alt=media&token=4c2658ae-afbd-41ce-84d7-5a1a7010ae49',
			width: 512,
			height: 512,
			alt: `${meConfig.name.username} logo`
		},
    {
			url: 'https://firebasestorage.googleapis.com/v0/b/emmanueljet.appspot.com/o/brand%2Fseo%2Femmanueljet-seo-banner.jpg?alt=media&token=30005c4b-7b2c-4c25-ac21-a84afcd6c308',
			width: 1200,
			height: 630,
			alt: `${meConfig.name.username} seo banner`
		}
	];
}
