import React from 'react';

export const VideoSection: React.FC = () => {
  return (
    <section id="video" className="py-24 px-4 sm:px-8 max-w-[1400px] mx-auto">
      <div className="w-full aspect-video rounded-[2rem] overflow-hidden shadow-2xl bg-zinc-900">
        <iframe 
            width="100%" 
            height="100%" 
            src="https://www.youtube.com/embed/SVCBA-pBgt0?si=OzpiqP3jpwqNGTEu" 
            title="Novamir Product Demo" 
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            referrerPolicy="strict-origin-when-cross-origin" 
            allowFullScreen
            className="w-full h-full object-cover"
        />
      </div>
    </section>
  );
};