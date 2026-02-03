import { useState, useCallback } from "react";
import {
  getStoredConsent,
  setStoredConsent,
  acceptAll,
  rejectAll,
  hasConsentBeenRecorded,
  type CookieConsentState,
} from "@/lib/cookie-consent";

export function useCookieConsent() {
  const [consent, setConsent] = useState<CookieConsentState | null>(() =>
    getStoredConsent(),
  );
  const [showBanner, setShowBanner] = useState(
    () => !hasConsentBeenRecorded(),
  );
  const [preferencesOpen, setPreferencesOpen] = useState(false);

  const accept = useCallback(() => {
    const newConsent = acceptAll();
    setConsent(newConsent);
    setShowBanner(false);
  }, []);

  const reject = useCallback(() => {
    const newConsent = rejectAll();
    setConsent(newConsent);
    setShowBanner(false);
  }, []);

  const updatePreferences = useCallback(
    (prefs: { analytics: boolean; marketing: boolean }) => {
      const newConsent = setStoredConsent(prefs);
      setConsent(newConsent);
      setShowBanner(false);
    },
    [],
  );

  return {
    consent,
    showBanner,
    accept,
    reject,
    updatePreferences,
    preferencesOpen,
    setPreferencesOpen,
  };
}
