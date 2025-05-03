import type { FirebaseOptions } from 'firebase/app';

export interface IFirebaseConfig {
	appOptions: FirebaseOptions;
	recaptchaKey?: string;
	databaseId?: string;
}

const firebaseConfig: IFirebaseConfig = {
	appOptions: {
		appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
		apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
		projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
		authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
		storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
		measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
		messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID
	},
	recaptchaKey: process.env.NEXT_PUBLIC_FIREBASE_RECAPTCHA_KEY,
	databaseId: process.env.NEXT_PUBLIC_FIREBASE_DATABASE_ID
};

export default firebaseConfig;
