import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { TransitionSection } from './components/TransitionSection';
import { ProductSection } from './components/ProductSection';
import { JourneySection } from './components/JourneySection';
import { BookingSection } from './components/BookingSection';
import { Footer } from './components/Footer';
import { CookieConsentBanner, useCookieConsent } from './components/CookieConsent';

function App() {
  const {
    consent,
    showBanner,
    accept,
    reject,
    updatePreferences,
    preferencesOpen,
    setPreferencesOpen,
  } = useCookieConsent();

  return (
    <div className="min-h-screen bg-surface selection:bg-black selection:text-white">
      <Header />
      <main>
        <Hero />
        <TransitionSection />
        <ProductSection />
        <JourneySection />
        <BookingSection />
      </main>

      <Footer onOpenCookieSettings={() => setPreferencesOpen(true)} />
      <CookieConsentBanner
        show={showBanner}
        onAccept={accept}
        onReject={reject}
        onUpdatePreferences={updatePreferences}
        preferencesOpen={preferencesOpen}
        onPreferencesOpenChange={setPreferencesOpen}
        currentAnalytics={consent?.analytics ?? false}
        currentMarketing={consent?.marketing ?? false}
      />
    </div>
  );
}

export default App;