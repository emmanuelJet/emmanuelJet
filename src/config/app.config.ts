import packageInfo from '../../package.json';

export interface IAppConfig {
  name: string;
  url: string;
  version: string;
  tagline: string;
  launchedAt: string;
  description: string;
  environment: string;
  keywords: Array<string>;
};

const appConfig: IAppConfig = {
  name: process.env.NEXT_PUBLIC_APP_NAME || 'Emmanuel Joseph (JET)',
  url: process.env.NEXT_PUBLIC_APP_URL || 'https://emmanueljet.com',
  version: process.env.NEXT_PUBLIC_APP_VERSION || packageInfo.version,
  environment: process.env.NEXT_PUBLIC_APP_ENVIRONMENT || process.env.NODE_ENV,
  launchedAt: process.env.NEXT_PUBLIC_APP_LAUNCHED_AT || '2025-04-28T00:00:00.000Z',
  tagline: process.env.NEXT_PUBLIC_APP_TAGLINE || 'Building the future with Blockchain Tech as a Web Engineer',
  description: process.env.NEXT_PUBLIC_APP_DESCRIPTION || 'Emmanuel Joseph (JET) is a Web and Blockchain Engineer with a passion for building the future with blockchain technology',
  keywords: process.env.NEXT_PUBLIC_APP_KEYWORDS ? process.env.NEXT_PUBLIC_APP_KEYWORDS.split(', ') : [
    'JET',
    'emmanueljet',
    'Emmanuel Joseph',
    'Emmanuel Joseph (JET)',
    'Web and Blockchain Developer',
    'Web and Blockchain Engineer',
    'Blockchain Developer',
    'Blockchain Engineer',
    'Software Developer',
    'Software Engineer',
    'Web3 Developer',
    'Web3 Engineer',
    'Web Developer',
    'Web Engineer',
    'Nigeria',
    'Africa',
  ],
}

export default appConfig;
