import {
	getApp,
	getApps,
	initializeApp
} from 'firebase/app';

import firebaseConfig from '@/config/firebase.config';

export * from './services/analytics';
export * from './services/performance';

const { appOptions } = firebaseConfig;
Object.entries(appOptions).forEach(([key, value]) => {
  if (typeof value === 'string' && !value.trim()) {
    throw new Error(`Missing Firebase configuration property: ${key}`);
  }
});

export const firebase = !getApps().length
  ? initializeApp(appOptions) : getApp();
