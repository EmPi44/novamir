import React from 'react';
import resapassLogo from '../assets/logos/resapass.png';
import dronicleLogo from '../assets/logos/dronicle.png';
import umamiCommsLogo from '../assets/logos/umami-comms.jpeg';
import podsAndSpicesLogo from '../assets/logos/pods-and-spices.jpg';

const clients = [
  { name: 'Resapass', logo: resapassLogo },
  { name: 'Dronicle', logo: dronicleLogo },
  { name: 'Umami Comms', logo: umamiCommsLogo },
  { name: 'Pods & Spices', logo: podsAndSpicesLogo },
];

export const ClientLogos: React.FC = () => {
  return (
    <section className="py-16 border-t border-surface-container">
      <style>{`
        @keyframes marquee-scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee-scroll 25s linear infinite;
        }
        .marquee-mask {
          mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
          -webkit-mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
        }
        @media (prefers-reduced-motion: reduce) {
          .animate-marquee {
            animation: none;
          }
        }
      `}</style>

      <p className="text-center text-sm font-medium tracking-widest uppercase text-surface-on-variant mb-12">
        Trusted by
      </p>

      <div className="w-full overflow-hidden marquee-mask">
        <div className="animate-marquee flex w-max">
          {[0, 1].map((setIndex) => (
            <div
              key={setIndex}
              className="flex shrink-0 items-center gap-16 md:gap-24 px-8 md:px-12"
            >
              {clients.map((client) => (
                <div
                  key={`${client.name}-${setIndex}`}
                  className="flex-shrink-0 flex items-center justify-center h-12 md:h-16"
                >
                  <img
                    src={client.logo}
                    alt={client.name}
                    className="h-full w-auto max-w-[160px] md:max-w-[200px] object-contain"
                    style={{
                      filter: 'grayscale(100%)',
                      opacity: 0.6,
                    }}
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
