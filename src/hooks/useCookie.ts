import Cookies from 'js-cookie';
import { useState, useCallback } from 'react';

import appConfig from '@/config/app.config';

const getDomainFromUrl = (url: string): string | undefined => {
  const hostname = new URL(url).hostname;
  if (hostname === 'localhost' || /^[0-9.]+$/.test(hostname)) {
    return undefined;
  }
  
  const parts = hostname.split('.');
  if (parts.length > 1) {
    return '.' + parts.slice(-2).join('.');
  } else {
    return hostname;
  }
};

const defaultCookieDomain = getDomainFromUrl(appConfig.url);

const useCookie = (name: string, initialValue?: string) => {
  const initialCookieValue = typeof window !== 'undefined' ? Cookies.get(name) : initialValue;
  const [cookieValue, setInternalCookieValue] = useState<string | undefined>(initialCookieValue);

  // Function to set the cookie
  const setCookie = useCallback(
    (value: string, options?: Cookies.CookieAttributes) => {
      const cookieOptions: Cookies.CookieAttributes = {
        ...options,
        domain: options?.domain || defaultCookieDomain,
        sameSite: options?.sameSite || 'Lax',
        secure: typeof window !== 'undefined' && window.location.protocol === 'https:',
      };

      Cookies.set(name, value, cookieOptions);
      setInternalCookieValue(value);
    },
    [name]
  );

  // Function to remove the cookie
  const removeCookie = useCallback(
    (options?: Cookies.CookieAttributes) => {
      const cookieOptions: Cookies.CookieAttributes = {
        ...options,
        domain: options?.domain || defaultCookieDomain,
        sameSite: options?.sameSite || 'Lax',
        secure: typeof window !== 'undefined' && window.location.protocol === 'https:',
      };
      
      Cookies.remove(name, cookieOptions);
      setInternalCookieValue(undefined);
    },
    [name]
  );

  return [cookieValue, setCookie, removeCookie] as const;
};

export default useCookie;
