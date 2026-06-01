import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import Hero from '@/components/Hero';
import FadeIn from '@/components/FadeIn';
import ContactForm from '@/components/ContactForm';
import { CONTACT } from '@/lib/data';

export const metadata = {
  title: 'Contatti',
  description:
    "Siamo a disposizione per analizzare le tue esigenze e proporti le soluzioni più adatte alla tua azienda. Contattaci per una consulenza personalizzata.",
};

const iconMap = { Mail, Phone, MapPin, Clock };

export default function ContattiPage() {
  const cards = [
    { title: 'Email', primary: CONTACT.emails.primary, secondary: CONTACT.emails.palomba, icon: 'Mail' },
    { title: 'Telefono', primary: CONTACT.phones.mobile, secondary: CONTACT.phones.mobile2, icon: 'Phone' },
    { title: 'Indirizzo', primary: CONTACT.addresses.roma, secondary: 'Roma, Italia', icon: 'MapPin' },
    { title: 'Orari', primary: CONTACT.hours, secondary: 'Su appuntamento', icon: 'Clock' },
  ];

  return (
    <>
      <Hero
        eyebrow="Contatti"
        title="Parliamo del tuo progetto"
        subtitle="Siamo a disposizione per analizzare le tue esigenze e proporti le soluzioni più adatte alla tua azienda"
        bgImage="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&q=80"
      />

      <section className="py-24 bg-white">
        <div className="container-x">
          <div className="grid lg:grid-cols-2 gap-12">
            <FadeIn direction="left">
              <h2 className="text-3xl md:text-4xl font-bold text-navy mb-8">
                Come raggiungerci
              </h2>
              <div className="grid sm:grid-cols-2 gap-4 mb-8">
                {cards.map((c) => {
                  const Icon = iconMap[c.icon];
                  return (
                    <div key={c.title} className="bg-gray-50 rounded-2xl p-5">
                      <div className="w-12 h-12 rounded-xl bg-navy/10 flex items-center justify-center mb-3">
                        <Icon size={22} className="text-navy" />
                      </div>
                      <h3 className="text-sm font-semibold text-navy uppercase tracking-wider mb-2">
                        {c.title}
                      </h3>
                      <p className="text-gray-700 text-sm">{c.primary}</p>
                      <p className="text-gray-500 text-sm">{c.secondary}</p>
                    </div>
                  );
                })}
              </div>

              <div className="space-y-3 mb-8">
                <a
                  href={`https://wa.me/${CONTACT.phones.mobileWhatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary bg-whatsapp hover:bg-whatsapp-dark text-white w-full text-base"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                  </svg>
                  <span>Scrivici su WhatsApp</span>
                </a>
                <a
                  href={`tel:${CONTACT.phones.mobileTel}`}
                  className="btn-primary btn-navy w-full text-base"
                >
                  <Phone size={20} />
                  <span>Chiama ora: {CONTACT.phones.mobile}</span>
                </a>
              </div>

              <div className="rounded-2xl overflow-hidden border border-gray-200 h-[300px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2969.6545841861394!2d12.492523!3d41.907951!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x132f61a5cf5d3a9b%3A0x0!2sVia%20Umbria%2C%207%2C%20Roma%20RM!5e0!3m2!1sit!2sit"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Mappa Studio Palomba"
                />
              </div>
            </FadeIn>

            <FadeIn direction="right">
              <div className="bg-gray-50 rounded-3xl p-8 md:p-10">
                <h2 className="text-3xl md:text-4xl font-bold text-navy mb-3">
                  Inviaci un messaggio
                </h2>
                <p className="text-gray-500 mb-8">
                  Compila il form e ti risponderemo al più presto
                </p>
                <ContactForm />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </>
  );
}
