import appConfig from '@/config/app.config';

export * from './modules/page.utility';
export * from './modules/schema.utility';
export * from './modules/metadata.utility';

const { version, environment } = appConfig;

export const isProduction = (): boolean => {
	return environment === 'production';
}

export const getIconPath = (
	relativePath: string
): string => {
	const brandIconBaseUrl = `/media/icons`;
	return `${brandIconBaseUrl}/${relativePath}?v=${version}`;
}

export const getVersionedFaviconPath = (): string => {
  return `/favicon.ico?v=${version}`;
}
