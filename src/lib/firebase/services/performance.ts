import {
	trace,
	getPerformance,
	type PerformanceTrace,
	type FirebasePerformance
} from '@firebase/performance';

import { firebase } from '..';

export type { PerformanceTrace };

export let performance: FirebasePerformance;

export const initPerformance = (): FirebasePerformance => {
	if (typeof window !== 'undefined') {
		performance = getPerformance(firebase);
	}

	return performance;
};

export const initPerformanceTrace = (name: string) => trace(performance, name);
