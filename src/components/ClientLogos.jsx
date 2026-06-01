'use client';

import { useState } from 'react';
import Image from 'next/image';
import { CLIENT_LOGOS } from '@/lib/data';

export default function ClientLogos() {
  const [paused, setPaused] = useState(false);
  const doubled = [...CLIENT_LOGOS, ...CLIENT_LOGOS];

  return (
    <section className="pt-10 pb-6 bg-white overflow-hidden">
      <div className="container-x text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold text-navy mb-3">I Nostri Clienti</h2>
        <p className="text-gray-500 text-lg">
          Aziende e realtà che ci affidano la gestione del personale
        </p>
      </div>

      <div
        className="overflow-hidden pb-6"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        style={{ touchAction: 'pan-x' }}
      >
        <div
          className={`logos-track flex items-center ${paused ? 'paused' : ''}`}
          style={{ width: 'max-content' }}
        >
          {doubled.map((logo, i) => (
            <div
              key={i}
              className="logo-item flex-shrink-0 flex items-center justify-center"
              style={{ marginLeft: '48px', marginRight: '48px' }}
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                width={240}
                height={180}
                loading="lazy"
                className="h-[100px] md:h-[140px] w-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
