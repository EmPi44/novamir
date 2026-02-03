export interface CookieConsentState {
  version: number;
  timestamp: string;
  necessary: true;
  analytics: boolean;
  marketing: boolean;
}

export type ConsentCategory = "necessary" | "analytics" | "marketing";

const STORAGE_KEY = "novamir_cookie_consent";
const CURRENT_VERSION = 1;

export function getStoredConsent(): CookieConsentState | null {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw);
    if (parsed?.version !== CURRENT_VERSION) return null;
    return parsed as CookieConsentState;
  } catch {
    return null;
  }
}

export function setStoredConsent(prefs: {
  analytics: boolean;
  marketing: boolean;
}): CookieConsentState {
  const consent: CookieConsentState = {
    version: CURRENT_VERSION,
    timestamp: new Date().toISOString(),
    necessary: true,
    analytics: prefs.analytics,
    marketing: prefs.marketing,
  };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(consent));
  return consent;
}

export function hasConsent(category: ConsentCategory): boolean {
  if (category === "necessary") return true;
  const consent = getStoredConsent();
  if (!consent) return false;
  return consent[category];
}

export function acceptAll(): CookieConsentState {
  return setStoredConsent({ analytics: true, marketing: true });
}

export function rejectAll(): CookieConsentState {
  return setStoredConsent({ analytics: false, marketing: false });
}

export function hasConsentBeenRecorded(): boolean {
  return getStoredConsent() !== null;
}

export function withConsent(
  category: ConsentCategory,
  callback: () => void,
): void {
  if (hasConsent(category)) {
    callback();
  }
}
