import {
	logEvent,
	getAnalytics,
	type Analytics,
	type EventParams,
	type EventNameString
} from '@firebase/analytics';

import { firebase } from '..';

interface ITrackAnalyticsEvent {
	event: EventNameString;
	params?: EventParams;
}

export let analytics: Analytics | null = null;

export const initAnalytics = (): Analytics | null => {
	if (typeof window !== 'undefined') {
		analytics = getAnalytics(firebase);
	}

	return analytics;
};

export const trackAnalyticsEvent = (
	data: ITrackAnalyticsEvent
): void => {
  if (analytics) {
    const { event, params } = data;
    logEvent(analytics, event as string, params); 
  }
};
