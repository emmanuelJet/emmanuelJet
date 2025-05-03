'use client';

import {
	setConsent,
	type ConsentStatusString,
	setAnalyticsCollectionEnabled
} from 'firebase/analytics';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

import {
  initAnalytics,
  initPerformanceTrace,
  type PerformanceTrace,
} from '@/lib/firebase';
import Button from './Button';
import useCookie from '@/hooks/useCookie';

const COOKIE_CONSENT_KEY = 'cookie_consent';
const CONSENT_GRANTED = 'granted';
const CONSENT_DENIED = 'denied';

const CookieConsentBanner = () => {
  const [bannerTrace, setBannerTrace] = useState<PerformanceTrace | undefined>(undefined);
  const [consentCookie, setConsentCookie] = useCookie(COOKIE_CONSENT_KEY);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const analytics = initAnalytics();
    const acceptanceStatus = consentCookie === CONSENT_GRANTED;
    const consentStatus: ConsentStatusString = acceptanceStatus ? CONSENT_GRANTED : CONSENT_DENIED;

    if (analytics) {
      setAnalyticsCollectionEnabled(analytics, acceptanceStatus);
      setConsent({
        functionality_storage: consentStatus,
        analytics_storage: consentStatus,
        security_storage: consentStatus,
      });
    }

    if (consentCookie === undefined || consentCookie === null) {
      setIsVisible(true);
      const newTrace = initPerformanceTrace('cookie_consent_banner');
      newTrace.start();
      setBannerTrace(newTrace);
    } else if (consentCookie === CONSENT_GRANTED || consentCookie === CONSENT_DENIED) {
      setIsVisible(false);
      if (bannerTrace) {
        bannerTrace.stop();
        setBannerTrace(undefined);
      }
    }

     return () => {
       if (bannerTrace) {
        bannerTrace.stop();
        setBannerTrace(undefined);
       }
     };

  }, [consentCookie, bannerTrace]);


  const handleAccept = () => {
    setConsentCookie(CONSENT_GRANTED, { expires: 365 });
    if (bannerTrace) {
      bannerTrace.putAttribute('consent_status', CONSENT_GRANTED);
      bannerTrace.stop();
      setBannerTrace(undefined);
    }
    setIsVisible(false);
  };

  const handleReject = () => {
    setConsentCookie(CONSENT_DENIED, { expires: 30 });
    if (bannerTrace) {
      bannerTrace.putAttribute('consent_status', CONSENT_DENIED);
      bannerTrace.stop();
      setBannerTrace(undefined);
    }
    setIsVisible(false);
  };

  if (!isVisible) {
    return null;
  }

  const bannerVariants = {
    hidden: {
      y: '100%',
      opacity: 0,
    },
    visible: {
      y: '0%',
      opacity: 1,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
    exit: {
      y: '100%',
      opacity: 0,
      transition: { duration: 0.3, ease: 'easeIn' },
    },
  };

  return (
    <motion.div
      className='fixed bottom-4 left-1/2 transform -translate-x-1/2 sm:right-4 sm:left-auto sm:translate-x-0 max-w-md bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-200 p-4 rounded-md shadow-lg flex flex-col sm:flex-row justify-between items-center z-50 gap-4'
      variants={bannerVariants}
      initial='hidden'
      animate='visible'
      exit='exit'
    >
      <p className='text-sm text-center sm:text-left'>
        This website uses cookies to ensure you get the best experience.
      </p>
      <div className='flex flex-row gap-2 mt-2 sm:mt-0 w-full sm:w-auto'>
        <Button
          size='md'
          variant='primary'
          onClick={handleAccept}
          className='w-full justify-center sm:w-auto'
        >
          Accept
        </Button>
        <Button
          size='md'
          variant='outline'
          onClick={handleReject}
          className='w-full justify-center sm:w-auto'
        >
          Reject
        </Button>
      </div>
    </motion.div>
  );
};

export default CookieConsentBanner;
