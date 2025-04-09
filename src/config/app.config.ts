import packageInfo from '../../package.json';

export interface IAppConfig {
  name: string;
  url: string;
  version: string;
  headline: string;
  environment: string;
};

const appConfig: IAppConfig = {
  name: process.env.NEXT_PUBLIC_APP_NAME || 'Emmanuel Joseph (JET)',
  url: process.env.NEXT_PUBLIC_APP_URL || 'https://emmanueljet.com',
  version: process.env.NEXT_PUBLIC_APP_VERSION || packageInfo.version,
  headline: process.env.NEXT_PUBLIC_APP_HEADLINE || packageInfo.description,
  environment: process.env.NEXT_PUBLIC_APP_ENVIRONMENT || process.env.NODE_ENV,
}

export default appConfig;
