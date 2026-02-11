import React, { useEffect } from 'react';
import Cal, { getCalApi } from '@calcom/embed-react';

export const BookingSection: React.FC = () => {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi();
      cal('ui', {
        theme: 'light',
        styles: {
          branding: {
            brandColor: '#121317',
          },
        },
        hideEventTypeDetails: false,
        layout: 'month_view',
      });
    })();
  }, []);

  return (
    <section id="booking" className="py-24" style={{ scrollMarginTop: '80px' }}>
      <div className="max-w-[1400px] mx-auto px-4 sm:px-8">
        <div className="mb-12 text-center">
          <h2 className="text-4xl md:text-5xl font-light mb-6 text-surface-on tracking-tight">
            Let's Talk
          </h2>
          <p className="text-lg text-surface-on-variant font-light leading-relaxed max-w-xl mx-auto">
            Book a free 20-minute discovery call. We'll discuss your goals
            and explore how AI can create the most impact for your business.
          </p>
        </div>

        <div className="w-full max-w-4xl mx-auto rounded-2xl overflow-hidden bg-surface-container">
          <Cal
            calLink="emir-piric/20min"
            style={{
              width: '100%',
              height: '100%',
              overflow: 'scroll',
              minHeight: 'clamp(350px, 70vh, 500px)',
            }}
            config={{
              layout: 'month_view',
              theme: 'light',
            }}
          />
        </div>
        <noscript>
          <div className="text-center p-8">
            <p className="text-lg text-surface-on-variant">
              Book your free 20-minute consultation at{' '}
              <a href="https://cal.com/emir-piric/20min" target="_blank" rel="noopener noreferrer" className="underline text-surface-on">
                cal.com/emir-piric/20min
              </a>
            </p>
          </div>
        </noscript>
      </div>
    </section>
  );
};
