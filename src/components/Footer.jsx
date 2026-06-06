import Link from 'next/link';
import Image from 'next/image';
import { MapPin, Phone, Mail } from 'lucide-react';
import { CONTACT } from '@/lib/data';

export default function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="container-x py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <div className="flex items-center gap-4 mb-4">
              <Image
                src="/images/paer-logo.png"
                alt="PAER Consulting"
                width={120}
                height={96}
                className="h-24 w-auto"
              />
              <Image
                src="/images/logo2.png"
                alt="Paer Consulting"
                width={120}
                height={96}
                className="h-24 w-auto"
              />
            </div>
            <p className="text-white/70 text-sm leading-relaxed">
              Oltre 30 anni di esperienza nella consulenza del lavoro al servizio delle imprese italiane.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Link Rapidi</h3>
            <ul className="space-y-2.5 text-sm">
              <li><Link href="/" className="text-white/80 hover:text-gold transition-colors">Home</Link></li>
              <li><Link href="/ChiSiamo" className="text-white/80 hover:text-gold transition-colors">Chi Siamo</Link></li>
              <li><Link href="/Servizi" className="text-white/80 hover:text-gold transition-colors">Servizi</Link></li>
              <li><Link href="/Esperienza" className="text-white/80 hover:text-gold transition-colors">Esperienza</Link></li>
              <li><Link href="/Contatti" className="text-white/80 hover:text-gold transition-colors">Contatti</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Servizi</h3>
            <ul className="space-y-2.5 text-sm text-white/80">
              <li>Consulenza del lavoro</li>
              <li>Elaborazione paghe</li>
              <li>Gestione del personale</li>
              <li>Assistenza ispettiva</li>
              <li>Welfare aziendale</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contatti</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2.5 text-white/80">
                <MapPin size={16} className="mt-0.5 flex-shrink-0 text-gold" />
                <span>{CONTACT.addresses.roma}</span>
              </li>
              <li className="flex items-start gap-2.5 text-white/80">
                <MapPin size={16} className="mt-0.5 flex-shrink-0 text-gold" />
                <span>{CONTACT.addresses.monza}</span>
              </li>
              <li className="flex items-center gap-2.5 text-white/80">
                <Phone size={16} className="flex-shrink-0 text-gold" />
                <a href={`tel:${CONTACT.phones.mobileTel}`} className="hover:text-gold transition-colors">
                  {CONTACT.phones.mobile}
                </a>
              </li>
              <li className="flex items-center gap-2.5 text-white/80">
                <Phone size={16} className="flex-shrink-0 text-gold" />
                <a href={`tel:${CONTACT.phones.monzaTel}`} className="hover:text-gold transition-colors">
                  {CONTACT.phones.monza}
                </a>
              </li>
              <li className="flex items-center gap-2.5 text-white/80">
                <Mail size={16} className="flex-shrink-0 text-gold" />
                <a href={`mailto:${CONTACT.emails.primary}`} className="hover:text-gold transition-colors break-all">
                  {CONTACT.emails.primary}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col md:flex-row md:items-center md:justify-between gap-3 text-xs text-white/60">
          <p>© {new Date().getFullYear()} Paer Consulting. Tutti i diritti riservati.</p>
          <p>{CONTACT.legal} - {CONTACT.vat} - {CONTACT.addresses.roma}</p>
        </div>
      </div>
    </footer>
  );
}
